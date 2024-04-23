<template>
  <div class="page">
    <div class="formWrap">
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
          <el-input v-model="formModel.password" />
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="handleLogin"
            >登录</el-button
          >
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
      ...loginHook
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

.loginBtn {
  width: 100%;
}
</style>
