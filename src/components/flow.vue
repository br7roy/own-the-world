<template>
  <div>
<h1>test for keliu</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jsonData: {"list":[{"type":"input","icon":"icon-input","options":{"width":"30%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"应用id","disabled":false,"remoteFunc":"func_1610522263000_67129"},"name":"appid","key":"1610522263000_67129","model":"input_1610522263000_67129","rules":[{"type":"string","message":"appid格式不正确"},{"required":true,"message":"appid必须填写"}]},{"type":"select","icon":"icon-select","options":{"defaultValue":"","multiple":false,"disabled":false,"clearable":false,"placeholder":"","required":true,"showLabel":true,"width":"","options":[{"value":"Option 1"},{"value":"Option 2"},{"value":"Option 3"}],"remote":true,"filterable":true,"remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"fetchq"},"name":"队列选择","key":"1610522411000_71","model":"select_1610522411000_71","rules":[{"required":true,"message":"队列选择必须填写"}]},{"type":"input","icon":"icon-input","options":{"width":"30%","defaultValue":"","required":true,"dataType":"string","pattern":"","placeholder":"用户名","disabled":false,"remoteFunc":"func_1610522309000_59473"},"name":"userName","key":"1610522309000_59473","model":"input_1610522309000_59473","rules":[{"type":"string","message":"userName格式不正确"},{"required":true,"message":"userName必须填写"}]}],"config":{"labelWidth":100,"labelPosition":"right","size":"medium"}},
      editData: {},
      remoteFuncs: {

        fetchq (resolve) {
          console.log('haha')
          console.log(resolve)
          // 队列选择 select_1610522411000_71
          // Call callback function once get the data from remote server
          // resolve(data)
        },

      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.generateForm.getData().then(data => {
        console.log('tijiao')
        console.log(JSON.stringify(data))
        // data check success
        // data - form data
      }).catch(e => {
        console.log('error')
        console.log(e)
        // data check failed
      })
    }
  }
}
</script>