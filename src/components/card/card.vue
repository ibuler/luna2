<script>
  import Card from 'iview/src/components/card'
  const prefixCls = 'ivu-card'
  export default {
    name: 'LCard',
    extends: Card,
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disHover: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
      }
    },
    computed: {
      headClasses () {
        return [`${prefixCls}-head`, `${prefixCls}-color`, `${prefixCls}-${this.type}`]
      }
    }
  }
</script>

<style lang="less" >
  @import '~@/index.less';
  .ivu-card-color p {
    color: #fff;
  }

  .ivu-card-default p, .ivu-card-gray p {
    color: #515a6e;
  }

  .ivu-card-gray {
    background-color: #fafafa;
  }

  .ivu-card-primary {
    background-color: @primary-color;
  }

  .ivu-card-primary p {
    color: #fff;
  }

  .ivu-card-info {
    background-color: @info-color;
  }

  .ivu-card-warning {
    background-color: @warning-color;
  }

  .ivu-card-error {
    background-color: @error-color;
  }

</style>
