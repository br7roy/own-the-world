package go_test

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"testing"
)

func TestHelloServer(t *testing.T) {
	//url := "http://127.0.0.1:20000/balance"
	url := "http://127.0.0.1:20000/test"
	// 表单数据
	//contentType := "application/x-www-form-urlencoded"
	// json
	contentType := "application/json"
	data := `{"appId":"app123123123_123123","qName":"default","UserName":"realestate"}`
	resp, err := http.Post(url, contentType, strings.NewReader(data))
	if err != nil {
		fmt.Printf("post failed, err:%v\n", err)
		return
	}
	defer resp.Body.Close()
	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("get resp failed, err:%v\n", err)
		return
	}
	fmt.Printf("resposne:\n")
	fmt.Println(string(b))

}

func TestShExec(t *testing.T) {

	file, err := os.Open("/home/realestate_test/fth/info.sh")
	if err != nil {
		panic(err)
	}
	defer file.Close()
	content, err := ioutil.ReadAll(file)
	c := string(content)

	fmt.Println(c)

	cmd := exec.Command("sh", "-c", c)
	out, err := cmd.Output()
	fmt.Println(string(out), err)
	println("?????")
	println(string(out))
}

func TestQueue(t *testing.T) {
	//param := "root.yarn_mobfin,root.mob_ronghui,root.yarn_dataengine,root.yarn_qc,root.yarn_analyst,root.yarn_data_compliance,root.yarn_dpi,root.yarn_dataengine_ai,root.urgent,root.yarn_distcp_hfile,root.yarn_realestate,root.yarn_mobeye,root.yarn_marketplus,root.yarn_mobdashboard,root.yarn_etl,root.default,root.yarn_mobdi,root.yarn_app360,root.yarn_supplement_data,root.yarn_ga,root.yarn_datax,root.yanjiuyuan,root.app,\n"

}
