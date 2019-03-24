<template>
  <l-card :type="type" :title="title" :icon="icon">
    <p slot="title" v-if="!title">
      <slot name="title">
      </slot>
    </p>
    <slot>
      <table>
        <tr v-for="(value, key) in data" :key="key">
          <td class="key">{{ key | capitalize }}:</td>
          <td class="value" :style="valueClass"><strong>{{ value }}</strong></td>
        </tr>
      </table>
    </slot>
  </l-card>
</template>

<script>
  import LCard from './card.vue'
  export default {
    name: 'LTableCard',
    components: {
      LCard
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      data: Object,
      title: '',
      icon: '',
      valueFloat: ''
    },
    data() {
      return {
      }
    },
    computed: {
      valueClass: function () {
        if (this.valueFloat !== '') {
          return {
            float: this.valueFloat
          }
        }
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style >
  .ivu-card table {
    width: 100%;
  }

  .ivu-card td {
    border-bottom: 1px solid #eee;
    padding: 8px 0;
  }

  .ivu-card tr:last-child td {
    border-bottom: none;
    padding: 8px 0;
  }

  .ivu-card tr {
    padding: 10px 0;
  }

  .ivu-card .key {
    font-size: 14px;
    color: #2e2e2e;
    word-break: break-word;
  }
</style>
