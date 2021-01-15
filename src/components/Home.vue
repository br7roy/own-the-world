<template>
  <div id="home">
    <el-container>
      <!--      <el-header>Header</el-header>-->
      <!--          <img src="@/assets/1346078725989916674.gif">-->
      <el-header class="header">
        <vheader/>
      </el-header>
      <el-container>
        <el-aside>
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <div v-if="activeIndex === 1">
            <flow></flow>
          </div>
          <div v-if="activeIndex === 3">
            <cluster></cluster>
          </div>
        </el-main>

      </el-container>
    </el-container>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavMenu from "@components/NavMenu";
import Header from "@components/Header";
import Flow from "@components/flow";
import Cluster from "@components/Cluster";

export default {
  name: 'home',
  components: {
    'navmenu': NavMenu,
    'vheader': Header,
    'flow': Flow,
    'cluster': Cluster
  },
  computed: {
    ...mapGetters([
      'activeIndex'
    ])
  },
  created: function () {
    // this.$store.commit('changeShowIndex')
    // console.log(this.$store.state.showIndex)
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