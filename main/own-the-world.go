package main

import (
	"flag"
	"fmt"
	"github.com/rakyll/statik/fs"
	"io"
	"log"
	"net/http"
	"os"
)

var (
	Stderr io.Writer = os.Stderr // Stderr is the io.Writer to which executed commands write standard error.
	Stdout io.Writer = os.Stdout // Stdout is the io.Writer to which executed commands write standard output.
)

type Config struct {
	ServerHost string
}

var config *Config


func main() {

	parseFlags()
	statikFS, err := fs.New() // 静态文件编译成二进制
	if err != nil {
		log.Fatalf(err.Error())
	}
	http.FileServer(statikFS)
	var mux = http.NewServeMux()
	mux.Handle("/", http.StripPrefix("/", http.FileServer(statikFS)))

	/*	e := echo.New()
		e.GET("/", func(c echo.Context) error {
			return c.String(http.StatusOK, "Hello, World!")
		})
		e.Logger.Fatal(e.Start(":1323"))*/

}
func parseFlags() {
	config = &Config{}
	flag.StringVar(&config.ServerHost, "p", "0.0.0.0:6666", "local server address")
	flag.Usage = func() {
		fmt.Fprintf(os.Stderr, "Usage of %s:\n", os.Args[0])
		flag.PrintDefaults()
	}
	flag.Parse()
}
