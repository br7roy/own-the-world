<template>
  <div id="navmenuu">
    <el-container>
      <el-aside>
        <el-menu default-active="1" unique-opened router @open="handleOpen" @close="handleClose">
          <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
            <template slot="title"><i :class="item.icon" v-text="item.name"></i></template>
            <el-menu-item-group v-for="sub in item.sub" :key="sub.componentName">
              <el-menu-item :class="sub.icon" :index="sub.componentName" v-text="sub.name"
                            @click="changeIndex(sub.idx)"></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <!--      <el-menu default-active="1" unique-opened router @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>导航一</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>-->
      </el-aside>

      <!--    <el-container>
            <el-header >
              <el-dropdown>
                <i class="el-icon-setting" ></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>王小虎</span>
            </el-header>
            <el-main>
              <el-table :data="tableData">
                <el-table-column prop="date" label="日期" >
                </el-table-column>
                <el-table-column prop="name" label="姓名" >
                </el-table-column>
                <el-table-column prop="address" >
                </el-table-column>
              </el-table>
            </el-main>
          </el-container>-->
    </el-container>
  </div>
</template>

<script>
import menu from '@/config/menu-config'
import {mapGetters} from 'vuex'

export default {
  name: 'navmenuu',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    changeIndex: function (index) {
      this.$store.dispatch('SetActiveIndex', index)
    }
  },
  components: [menu],
  data() {
    return {menu: menu}
  },
  computed: {
    ...mapGetters([
      'msg',
      'items',
      'toggleShow',
      'activeIndex'
    ])
  }
}
</script>
<style>
/*.el-menu-item*/
/*{*/
/*  color: #303133;*/
/*  padding: 10px 0;*/
/*  background-color: #f9fafc;*/
/*}*/

</style>