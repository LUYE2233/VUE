<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Item, Shop } from './data/homework02'
import { useH2Store } from './store'
import { getShopService } from './service'
import { useRoute } from 'vue-router'

const params = useRoute().params
const shop = ref<Shop>()

getShopService(Number.parseInt(params.sid as string)).then((sh) => {
  shop.value = sh
})
const store = useH2Store()
// orders数组对象是响应式，添加移除元素是响应式
const orders = store.ordersS
const add = (item: Item) => {
  let order = orders.value.find((o) => o.item.id == item.id)
  if (order) {
    order.quantity++
  } else {
    // 对应item的order不存在，创建订单对象，加入订单列表
    // 由于没有修改orders数组对象本身，可以不通过vuex事件
    order = { quantity: 1, item: item }
    orders.value.push(order)
  }
}
const remove = (item: Item) => {
  const order = orders.value.find((o) => o.item.id == item.id)
  if (order) {
    const q = order.quantity--
    if (q == 0) {
      orders.value.splice(orders.value.indexOf(order), 1)
    }
  }
}
const orderQ = computed(() => (item: Item) => {
  const o = orders.value.find((o) => o.item.id == item.id)
  return o?.quantity ?? 0
})
</script>

<template>
  <el-scrollbar height="570px">
    <h3 style="margin: 0">{{ shop?.name }}</h3>
    <div style="padding: 5px" v-for="(item, index) of shop?.items" :key="index">
      <div class="card">
        <el-row>
          <el-col :span="8">
            <img :src="item.url" alt="" style="width: 200px; padding: 5px" />
          </el-col>
          <el-col :span="16">
            <h3>{{ item.name }}</h3>
            价格：{{ item.price }}
            <br />
            月销量：{{ item.sales }}
            <br />
            <el-button @click="remove(item)">-</el-button>
            {{ orderQ(item) }}
            <el-button @click="add(item)">+</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.card {
  margin-top: 10px;
  background: rgba(0, 255, 255, 0.1);
  transition: 0.5s;
  padding: 5px;
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
