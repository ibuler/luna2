<template>
  <div class="ibox-content">
    <div>
      <img :src="minLogo" width="60" height="60">
      <span class="font-bold text-center" style="font-size: 24px; font-family: inherit; margin-left: 20px">
        Login
      </span>
    </div>
    <Form ref="loginForm" :model="form" :rules="rules" class="m-t" @keydown.enter.native="handleSubmit">
      <FormItem prop="username">
        <Input v-model="form.username" placeholder="Username">
          <span slot="prepend">
            <Icon :size="16" type="ios-person"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="Password">
          <span slot="prepend">
            <Icon :size="16" type="md-lock"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary" long>登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import minLogo from '@/assets/images/logo-min.png'
  export default {
    name: 'LoginForm',
    props: {
      usernameRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ]
        }
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    data () {
      return {
        minLogo,
        form: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      rules () {
        return {
          username: this.usernameRules,
          password: this.passwordRules
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$emit('on-success-valid', {
              username: this.form.username,
              password: this.form.password
            })
          }
        })
      }
    }
  }
</script>
