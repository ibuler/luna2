<template>
  <div class="filter-field">
    <form style="border: 1px solid #dcdee2; border-radius: 3px;">
      <Dropdown placement="bottom-start" @on-click="handleMenuItemClick">
        <a href="javascript:void(0)" style="padding-right: 8px; padding-left: 8px">
          <Icon type="md-arrow-dropdown" slot="prefix"/>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem  v-for="option in filterFields" :value="option.title" :name="option.key" :key="option.key">{{ option.title }}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Tag v-for="(v, k) in tags" :key="k" :name="k" closable @on-close="handleTagClose">{{ v.title }}: {{ v.value }}</Tag>
      <Row style="display: inline-block; padding-left: 5px">
        <span style="padding-right: 2px" v-if="filterTitle">{{ filterTitle }}:</span>
        <Input placeholder="添加筛选条件" style="max-width: 100px; border: none"></Input>
      </Row>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'LTableFilter',
    props: {
      filterFields: {
        type: Array,
        default () {
          return [
            {
              title: '用户名',
              key: 'username'
            },
            {
              title: '姓名',
              key: 'name'
            },
            {
              title: '年龄',
              key: 'age'
            }
          ]
        }
      }
    },
    data() {
      return {
        filterKey: '',
        tags: {
          username: {
            title: '用户名',
            value: 'guanghongwei'
          },
          age: {
            title: '年龄',
            value: 18
          }
        }
      }
    },
    computed: {
      filterTitle () {
        for (let field of this.filterFields) {
          if (field.key === this.filterKey) {
            return field.title
          }
        }
      }
    },
    methods: {
      handleTagClose (evt, name) {
        Vue.delete(this.tags, name)
      },
      handleMenuItemClick (name) {
        this.filterKey = name
      }
    }
  }
</script>

<style scoped>
  .filter-field >>> .ivu-input, .filter-field .ivu-input:focus {
    border: none;
    box-shadow: none;
  }
</style>
