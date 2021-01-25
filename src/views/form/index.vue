<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" >
      <el-form-item label="App User Name">
        <el-input v-model="form.userName" placeholder="填写应用所属的用户名" />
      </el-form-item>
      <el-form-item label="App Id">
        <el-input v-model="form.appId" placeholder="填写应用ID" />
      </el-form-item>
      <el-form-item label="Yarn queue">
        <el-select v-model="form.queueName" placeholder="选择队列名称">
          <el-option label="root.app" value="root.app" />
          <el-option label="root.yanjiuyuan" value="root.yanjiuyuan" />
          <el-option label="root.yarn_ping_cone" value="root.yarn_ping_cone" />
          <el-option label="root.urgent" value="root.urgent" />
          <el-option label="root.yarn_qc" value="root.yarn_qc" />
          <el-option label="root.yarn_distcp_hfile" value="root.yarn_distcp_hfile" />
          <el-option label="root.yarn_dpi" value="root.yarn_dpi" />
          <el-option label="root.yarn_etl" value="root.yarn_etl" />
          <el-option label="root.default" value="root.default" />
          <el-option label="root.yarn_realestate" value="root.yarn_realestate" />
          <el-option label="root.yarn_marketplus" value="root.yarn_marketplus" />
          <el-option label="root.mob_ronghui" value="root.mob_ronghui" />
          <el-option label="root.yarn_mobfin" value="root.yarn_mobfin" />
          <el-option label="root.yarn_datax" value="root.yarn_datax" />
          <el-option label="root.yarn_mobeye" value="root.yarn_mobeye" />
          <el-option label="root.yarn_analyst" value="root.yarn_analyst" />
          <el-option label="root.yarn_mobdi" value="root.yarn_mobdi" />
          <el-option label="root.yarn_data_compliance" value="root.yarn_data_compliance" />
          <el-option label="root.yarn_app360" value="root.yarn_app360" />
          <el-option label="root.yarn_ga" value="root.yarn_ga" />
          <el-option label="root.yarn_dataengine_ai" value="root.yarn_dataengine_ai" />
          <el-option label="root.yarn_mobdashboard" value="root.yarn_mobdashboard" />
          <el-option label="root.yarn_dataengine" value="root.yarn_dataengine" />
          <el-option label="root.yarn_supplement_data" value="root.yarn_supplement_data" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="random queue">
        <el-switch v-model="form.fc" placeholder="是否允许随机选择队列"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Perform</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        userName: '',
        appId: '',
        queueName: '',
        date1: '',
        date2: '',
        fc: false
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
      axios({
        method: 'post',
        url: '/balance',
        data: {
          userName: this.form.userName,
          appId: this.form.appId,
          queueName: this.form.queueName,
          date1: this.form.date1,
          date2: this.form.date2,
          fc: this.form.fc
        }
      })
      console.log(JSON.stringify(this.form))
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

