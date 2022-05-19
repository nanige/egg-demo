

<template>
  <div class="login">
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="loginFun">登录</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { login } from '@/api/index'

const form = reactive({
  username: '',
  password: ''
})

const loginFun = async () => {
  const res:any = await login(form)
  console.log(res)
  sessionStorage.setItem('token', res.data.token)
}
</script>
<style>
.login {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 30px 0;
}
</style>
