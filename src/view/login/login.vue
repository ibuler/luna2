<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import LoginForm from '@c/login-form'
  import { mapActions } from 'vuex'
  export default {
    components: {
      LoginForm
    },
    methods: {
      ...mapActions([
        'handleLogin',
        'getProfile'
      ]),
      handleSubmit ({ username, password }) {
        this.handleLogin({ username, password }).then(res => {
          this.getProfile().then(res => {
            this.$router.push({
              name: this.$config.homeName
            })
          })
        })
      }
    }
  }
</script>

<style lang="less">
  @import './login.less';
</style>
