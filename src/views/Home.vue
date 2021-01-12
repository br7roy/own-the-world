<template>
  <div id="home">
    <el-container>
      <!--      <el-header>Header</el-header>-->
          <img src="@/assets/1346078725989916674.gif">
      <el-header class="header">
        <vheader/>
      </el-header>
      <el-container>
        <el-aside>
          <navmenu></navmenu>
        </el-aside>
        <el-main>Main</el-main>

      </el-container>
    </el-container>

  </div>
</template>

<script>

import NavMenu from "@/components/NavMenu";
import Header from "@components/Header";

export default {
  name: 'home',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  }
}

</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 80px;
  margin-top: fill;
  width: auto;
}
</style>