<template>
  <div class="page">
    <div class="formWrap">
      <p class="title">{{ title }}</p>
      <el-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        labelWidth="80px"
        labelPosition="right"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formModel.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { useLogin } from './hooks'

export default defineComponent({
  setup() {
    const loginHook = useLogin()

    return {
      ...loginHook,
      title: process.env.APP_TITLE
    }
  }
})
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
}

.formWrap {
  width: 400px;
  margin-top: 100px;
}

.title {
  margin-left: 80px;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.loginBtn {
  width: 100%;
}
</style>
