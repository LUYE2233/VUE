<script lang="ts" setup>
import { computed } from 'vue'
import { useH2Store } from './store'

const store = useH2Store()
const orders = store.ordersS
// 计算orders中的价格，forEach也可
const cost = computed(() =>
  // reduce(callback, index)类似递归函数；callback函数，pre，前一次结果；cur，当前遍历对象
  orders.value.reduce((pre, cur) => pre + cur.quantity * (cur.item.price ?? 0), 0).toFixed(2)
)
</script>

<template>
  <el-row>
    <el-col :span="8">
      <!-- 基于名称的路由，等效于/exp03/foods -->
      <el-button>
        <router-link to="/example03/foods" style="text-decoration: none">美食</router-link>
      </el-button>
      <el-button>
        <router-link to="/example03/location" style="text-decoration: none">本地</router-link>
      </el-button>
      <el-button>
        <a href="" @click.prevent style="text-decoration: none">跑腿</a>
      </el-button>
      <p>
        <el-button>
          <router-link to="/example03/orders" style="text-decoration: none" class="order">
            订单：{{ cost }}
          </router-link>
        </el-button>
      </p>
    </el-col>
    <el-col :span="16">
      <router-view style="padding: 5px" />
    </el-col>
  </el-row>
</template>

<style scoped></style>
