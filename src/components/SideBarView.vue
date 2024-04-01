<script lang="ts" setup>
import { ref } from 'vue'
import { Location } from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router'

ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="false"
    @open="handleOpen"
    @close="handleClose">
    <!-- 一级菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>导航栏</span>
      </template>
      <!-- 子菜单 -->
      <el-menu-item-group>
        <template #title><span>主页组</span></template>
        <RouterLink to="/">
          <el-menu-item index="1-1">
            <span style="text-decoration: none">主页</span>
          </el-menu-item>
        </RouterLink>
      </el-menu-item-group>
      <el-menu-item-group title="实验组">
        <RouterLink to="/example01">
          <el-menu-item index="2-1">实验一</el-menu-item>
        </RouterLink>
        <RouterLink to="/example02">
          <el-menu-item index="2-2">实验二</el-menu-item>
        </RouterLink>
        <RouterLink to="/example03">
          <el-menu-item index="2-3">实验三</el-menu-item>
        </RouterLink>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/*设置点击前的样式 */
a {
  text-decoration: none;
  color: #000;
}
</style>
