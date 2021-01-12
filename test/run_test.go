package test

import (
	"fmt"
	"io/ioutil"
	"net/http"
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
