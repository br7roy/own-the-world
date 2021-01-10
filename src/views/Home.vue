<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <navmenu></navmenu>
        <el-aside >Aside</el-aside>
        <el-main>Main</el-main>

      </el-container>
    </el-container>

  </div>
</template>

<script>

import NavMenu from "@/components/NavMenu";

export default {
  name: 'home',
  components: {
    'navmenu': NavMenu
  }
}

</script>

<style>

</style>