<template>
  <div id="home">
    <h1>site : {{ site }}</h1>
    <h1>url : {{ url }}</h1>
    <h1>{{ details() }}</h1>
    <form action="">
      <input type="appId" placeholder="输入applicationID" v-model="formMess.appId">
      <input type="queueName" placeholder="输入队列名默认default" v-model="formMess.queueName">
      <input type="userName" placeholder="输入userName" v-model="formMess.userName">
    </form>
    <span class="but" @click="onSubmit()">提交</span>
  </div>
</template>
<script>
import Demo from "./Demo";
import HelloWorld from "./HelloWorld";
import Opts from "./Opts";

export default {
  name: "home",
  components: {
    Demo,
    HelloWorld,
    Opts
  },

  data: function () {
    return {
      site: "Freedom",
      url: "www.Freedom.com",
      alexa: "10000",
      formMess: {
        "appId": "",
        "queueName": "",
        "userName": ""
      }
    }
  },
  methods: {
    details: function () {
      return this.site + " - 一切皆缘分！";
    },
    onSubmit: function () {

      /* json格式提交： */
      // let formData = JSON.stringify(this.formMess);

      /* formData格式提交： */
      let formData = new FormData();
      for (var key in this.formMess) {
        formData.append(key, this.formMess[key]);
      }

      axios({
        method: "post",
        url: "xxxxxxx",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
        data: formData
      }).then((res) => {
        console.log(res);
      });
    }


  }


}

</script>


<style scoped>
</style>
