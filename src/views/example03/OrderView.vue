<script lang="ts" setup>
import { useH2Store } from './store'
const store = useH2Store()
// 由于state orders中数组已经初始化，数组对象不会改变引用
// 数组中元素是响应式，因此可以不使用computed
const orders = store.ordersS
</script>

<template>
  <el-scrollbar height="570px">
    <div class="card" v-for="(o, index) of orders" :key="index">
      {{ o.item.name }} * {{ o.quantity }}
    </div>
  </el-scrollbar>
</template>

<style scoped>
.card {
  min-height: 50px;
  justify-content: center;
  align-content: center;
  padding: 5px;
  margin-top: 10px;
  background: rgba(0, 255, 255, 0.1);
  transition: 0.5s;
  border: thick aqua;
  border-radius: 5px;
}

.card:hover {
  transition: 0.5s;
  background: rgba(0, 255, 255, 0.5);
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
