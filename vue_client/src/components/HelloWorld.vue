
<template>
  <div>
    列表
    <p></p>
    <div>
      <p v-for="(item, index) in list">{{item}} - <span @click="delFruit(index)">删除</span></p>
    </div>
    <p></p>
    添加
    <input v-model="name" type="text">
    <button @click="addFruit">添加</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
const name = ref<string>('')
const list = ref<any>([])

const getList = async () => {
  const res = await axios.get('http://127.0.0.1:7001/fruit')
  console.log('list', res)
  list.value = res.data
}

const addFruit = async () => {
  const res = await axios({
    method: 'post',
    url: 'http://127.0.0.1:7001/fruit',
    data: {
      fruit: name.value
    },
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  });
  getList() 
}
const delFruit = async (index:number) => {
  const res = await axios({
    method: 'delete',
    url: `http://127.0.0.1:7001/fruit/${index}`,
  });
  getList() 
}
onMounted(() => {
  getList()
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
