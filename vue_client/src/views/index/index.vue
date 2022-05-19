

<template>
  <div class="login">
    首页
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { indexList } from '@/api/index'

const getList = async () => {
  const res = await indexList({})
  console.log(res)
}

onMounted(() => {
  getList()
})
</script>
<style>
.login {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 30px 0;
}
</style>
