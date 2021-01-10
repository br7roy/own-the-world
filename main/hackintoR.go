//go:generate statik -src=../dist -dest . -f
//go:generate go fmt statik/statik.go
//https://cn.vuejs.org/v2/guide/instance.html
//https://segmentfault.com/a/1190000012015667
package main

import (
	"flag"
	"fmt"
	"github.com/rakyll/statik/fs"
	_ "hackintoR/main/statik"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"strings"
)

var (
	Stderr io.Writer = os.Stderr
	Stdout io.Writer = os.Stdout
)

type Config struct {
	ServerHost string
}

var config *Config

func main() {

	parseFlags()

	statikFS, err := fs.New()

	if err != nil {
		log.Fatalf(err.Error())
	}

	http.FileServer(statikFS)

	var mux = http.NewServeMux()

	mux.Handle("/", http.StripPrefix("/", http.FileServer(statikFS)))

	go func(serverAddr string, m *http.ServeMux) {
		if err = http.ListenAndServe(serverAddr, m); err != nil {
			fmt.Println("Can not start server:", err)
			os.Exit(-1)
		}
	}(config.ServerHost, mux)

	openPage()

	handleSignals()

	/*	e := echo.New()
		e.GET("/", func(c echo.Context) error {
			return c.String(http.StatusOK, "Hello, World!")
		})
		e.Logger.Fatal(e.Start(":6660"))*/

}
func parseFlags() {
	config = &Config{}
	flag.StringVar(&config.ServerHost, "hackintoR", "localhost:20000", "local server address")
	flag.Usage = func() {
		fmt.Fprintf(os.Stderr, "Usage of %s:\n", os.Args[0])
		flag.PrintDefaults()
	}
	flag.Parse()
}
func handleSignals() {
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, os.Kill)
	<-c
}

func openPage() {
	url := fmt.Sprintf("http://%v", config.ServerHost)
	fmt.Println("hackintoR console open", url, "in browser")
	var err error
	switch runtime.GOOS {
	case "linux":
		err = runCmd("xdg-open", url)
	case "darwin":
		err = runCmd("open", url)
	case "windows":
		r := strings.NewReplacer("&", "^&")
		err = runCmd("cmd", "/c", "start", r.Replace(url))
	default:
		err = fmt.Errorf("unsupported platform")
	}
	if err != nil {
		fmt.Println(err)
	}
}
func runCmd(prog string, args ...string) error {
	cmd := exec.Command(prog, args...)
	cmd.Stdout = Stdout
	cmd.Stderr = Stderr
	return cmd.Run()
}
