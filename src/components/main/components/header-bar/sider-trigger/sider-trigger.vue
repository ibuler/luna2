<template>
  <Button @click.native.stop @click="handleChange" type="primary" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']">
    <Icon :type="icon" :size="size" />
  </Button>
  <!--<a @click="handleChange" class="btn btn-primary" type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']">-->
</template>
<script>
  export default {
    name: 'siderTrigger',
    props: {
      collapsed: Boolean,
      icon: {
        type: String,
        default: 'navicon-round'
      },
      size: {
        type: Number,
        default: 17
      }
    },
    methods: {
      handleChange () {
        this.$emit('on-change', !this.collapsed)
      }
    }
  }
</script>
<style lang="less">
@import './sider-trigger.less';
</style>
