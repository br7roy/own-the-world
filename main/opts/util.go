package opts

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

func getParams(r *http.Request) (param Params, err error) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return param, err
	}
	if err = json.Unmarshal(body, &param); err != nil {
		return param, err
	}
	//todo basic validator
	return param, nil
}

func jsonEncode(code int, data interface{}) []byte {
	tr := new(JsonResult)
	tr.Result, tr.Data = code, data
	result, _ := json.Marshal(tr)
	return result
}

func requestDeser(r *http.Request) (param interface{}, err error) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return param, err
	}
	if err = json.Unmarshal(body, &param); err != nil {
		return param, err
	}
	//todo basic validator
	return param, nil

}

func respSer(code int, data interface{}) []byte {
	resp, _ := json.Marshal(JsonResult{
		Result: code,
		Data:   data,
	})

	return resp

}
