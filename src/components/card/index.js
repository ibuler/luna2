import Card from 'iview/src/components/card'

const LCard = {
  extends: Card,
  propsData: {
    type: {
      type: String,
      default: 'gray'
    }
  },
  data() {
    return {
      disHover: false
    }
  },
  computed: {
    headClasses () {
      return `${prefixCls}-head ${prefixCls}-${type}`
    }
  }

}

export default LCard
