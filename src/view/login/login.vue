<template>
  <div class="gray-bg">
    <div class="loginColumns animated fadeInDown">
      <Row>
        <Col span="12">
          <h2 class="font-bold" style="text-align: center">Jumpserver open source fortress</h2>
          <p>
            The world's first fully open source fortress, using the GNU GPL v2.0 open source protocol,
            is a professional operation and maintenance audit system in compliance with 4A.
          </p>
          <p>
            Developed using Python/Django, following the Web 2.0 specification and equipped with industry-leading
            Web Terminal solutions, with beautiful interactive interface and good user experience.
          </p>
          <p>
            Distributed architecture is adopted to support multi-machine room deployment across regions,
            central node provides API, and each machine room deploys login node, which can be extended horizontally
            and without concurrent access restrictions.
          </p>
          <p>
            Changes the world, starting with a little bit.
          </p>
          <Copyright></Copyright>
        </Col>
        <Col span="12">
            <login-form  @on-success-valid="handleSubmit"></login-form>
        </Col>
      </Row>
      <Row>
        <div class="col-md-12">
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
  import LoginForm from '@c/login-form'
  import Copyright from '@c/copyright'
  import { mapActions } from 'vuex'
  export default {
    components: {
      Copyright,
      LoginForm
    },
    data() {
      return {
      }
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
