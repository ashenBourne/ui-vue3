<!--
 * @Date: 2024-07-05 17:04:11
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-10 22:01:52
 * @FilePath: \Vue3UI\src\components\HelloWorld.vue
-->


<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
let arr=ref([
  {
    name:"张三",
    id:"1"
  },{
    name:"李四",
    id:"2"
  },{
    name:"王武",
    id:"3"
  }
])
function changeArr(){
  // arr.push(5)
  console.log(arr.value.push({
    name:'迷路',
    id:"4"
  }))
}


</script>

<template>
  <h1>{{ msg }}</h1>
  <p v-for="item in arr" :key="item">{{item.name}}</p>
  <button @click="changeArr">更改数组</button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
</style>
