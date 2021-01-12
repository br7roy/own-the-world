package opts

type Params struct {
	AppId    string `json:"appId"`
	QName    string `json:"qName"`
	UserName string `json:"UserName"`
	//Method     string `json:"method"`
	//Options    string `json:"options"`
	//Body       string `json:"body"`
	//SQL        string `json:"sql"`
	//Index      string `json:"index"`
}
type JsonResult struct {
	Result int         `json:"result"` // 0：success 1:faild
	Data   interface{} `json:"data"`   // 返回的data
}
