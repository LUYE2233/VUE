<script lang="ts" setup>
import { useH2Store } from './store'
import { listShopsService } from './service/index'

listShopsService()
const shopList = useH2Store().shopListS
</script>

<template>
  <div>
    <p>附近的美食</p>
    <div v-for="(shop, index) of shopList" :key="index" style="min-width: 150px">
      <router-link :to="`/example03/shops/${shop.id}`" class="router">
        <div class="card">
          <h4>{{ shop.name }}</h4>
          评分：{{ shop.point }}
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.router {
  color: #000;
  text-decoration: none;
}
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
