<template>
  <div id="app">
<!--    <img src="./assets/1346078725989916674.gif">-->
<!--    <img src="./assets/1346173349861462017.jpg">-->
    <!--    <div>
          <p>
            If Element is successfully added to this project, you'll see an
            <code v-text="'<el-button>'"></code>
            below
          </p>
          <el-button>el-button</el-button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavMenu from "@/components/NavMenu";

export default {
  name: 'app',
  components: {
    // HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*background: #409EFF;*/

}
</style>
