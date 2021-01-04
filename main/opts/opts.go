package opts
import (
  "encoding/json"
  "fmt"
  "io/ioutil"
  "net/http"
  "net/url"
  "sort"
  "strings"
  "time"

)
type InitOptions struct {
  Mux *http.ServeMux
}
type Opts struct {
  mux *http.ServeMux
}
func (se *Opts) RegHandler() {
  se.mux.HandleFunc("/balance", se.balance)
}


//
func (se *Opts) balance(w http.ResponseWriter, r *http.Request) {

}
