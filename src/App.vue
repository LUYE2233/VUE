<script setup lang="ts">
import { ref } from 'vue'
import Sider from '../src/components/SideBarView.vue'
import { RouterView } from 'vue-router'

const siderWidth = ref('200px')
</script>

<!-- layout/index.vue -->
<template>
  <!-- 外层容器 -->
  <el-container class="pm-layout">
    <el-container>
      <!-- 侧边栏容器 -->
      <el-aside :width="siderWidth" class="pm-layout__aside overflow-y-scroll">
        <Sider />
      </el-aside>
      <el-container>
        <!-- 主要区域容器 -->
        <el-main>
          <el-card class="pm-layout-main overflow-scroll">
            <RouterView></RouterView>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.pm-layout {
  &__header {
    background-color: #0a0f25;
  }

  &-main {
    height: calc(100vh - 140px);

    > .ep-card__body {
      padding-bottom: 0;
    }
  }

  &__aside {
    overflow: hidden;
  }
}
</style>
