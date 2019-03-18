<template>
  <i-card :disHover="true">
    <i-tabs v-model="activeName" @tab-click="handleClick" >
      <i-tab-pane label="用户详情" name="first">
        <i-row>
          <i-col span="16">
            <i-card title="广宏伟" :disHover="true">
              hello
            </i-card>
          </i-col>
        </i-row>
      </i-tab-pane>
      <i-tab-pane label="用户资产" name="second">用户资产</i-tab-pane>
    </i-tabs>
  </i-card>
</template>

<script>
  export default {
    name: 'user-detail',
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped>

</style>
