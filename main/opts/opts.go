package opts

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type InitOptions struct {
	Mux *http.ServeMux
}
type Opts struct {
	mux *http.ServeMux
}

func WakeOpts(initOpts InitOptions) *Opts {
	opt := new(Opts)
	opt.mux = initOpts.Mux
	opt.RegHandler()
	return opt
}
func (se *Opts) RegHandler() {
	se.mux.HandleFunc("/test", se.test)
	se.mux.HandleFunc("/balance", se.balance)
}

// just a test Handler
func (se *Opts) test(w http.ResponseWriter, r *http.Request) {
	params, err := requestDeser(r)
	if err != nil {
		w.Write(respSer(1, map[string]interface{}{"error": "testerror"}))
		return
	}
	res, _ := json.Marshal(params)
	fmt.Println(string(res))
	w.Write(respSer(0, params))

}

// move the application to specify queue
func (se *Opts) balance(w http.ResponseWriter, r *http.Request) {

	params, err := getParams(r)
	if err != nil {
		w.Write(jsonEncode(1, map[string]interface{}{"error": "服务端错误：参数解析失败。"}))
		return
	}
	// fortest
	marshal, err := json.Marshal(params)
	if err != nil {
		w.Write(jsonEncode(1, map[string]interface{}{"error": "服务端错误：参数解析失败。"}))
		return
	}

	fmt.Println([]interface{}{marshal})
	countryCapitalMap := make(map[string]string)
	countryCapitalMap["France"] = "Paris"
	countryCapitalMap["Italy"] = "Roman"
	countryCapitalMap["Japn"] = "Tokyo"
	countryCapitalMap["India"] = "Madrid"

	//w.Write(jsonEncode(0,[]interface{}{countryCapitalMap}))
	//w.Write(jsonEncode(0,string(marshal)))
	w.WriteHeader(200)
	w.Write(respSer(0, countryCapitalMap))

}
