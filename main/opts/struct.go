package opts

type Params struct {
	AppId    string `json:"appId"`
	QName    string `json:"queueName"`
	UserName string `json:"userName"`
	Date1    string `json:"date1"`
	Date2    string `json:"date2"`
	Fc       bool   `json:"fc"`
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
