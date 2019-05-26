<template>
  <div class="filter-field">
    <form style="border: 1px solid #dcdee2; border-radius: 3px;" @submit.prevent>
      <Dropdown placement="bottom-start" @on-click="handleMenuItemClick">
        <a href="javascript:void(0)" style="padding-right: 6px; padding-left: 8px">
          <Icon type="md-arrow-dropdown" slot="prefix"/>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem  v-for="option in filterFields" :value="option.title" :name="option.key" :key="option.key">{{ option.title }}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Tag v-for="(v, k) in filterTags" :key="k" :name="k" closable @on-close="handleTagClose">
        <strong v-if="v.title">{{ v.title }}{{ tagSeparator}}</strong> {{ v.value }}
      </Tag>
      <Row style="display: inline-block; padding-left: 5px">
        <span style="padding-right: 2px" v-if="filterTitle">{{ filterTitle }}{{ tagSeparator }}</span>
        <Input placeholder="添加筛选条件" @on-enter="handleConfirm"
               v-model="filterValue" ref="filterInput" style="max-width: 100px; border: none;"
        >
        </Input>
      </Row>
      <a @click="handleSearch">
        <Icon type="ios-search" style="float: right; margin: 10px 8px"/>
      </a>
    </form>
  </div>
</template>

<script>
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
        tagSeparator: ':',
        filterKey: '',
        filterValue: '',
        filterTags: {
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
      },
      filterMaps () {
        let data = {}
        console.log(123123123)
        for (let key in this.filterTags) {
          let value = this.filterTags[key]['value']
          if (key === '') {
            key = 'search'
          }
          data[key] = value
        }
        console.log(data)
        return data
      }
    },
    watch: {
      filterTags: function (val) {
        if (val) {
          console.log('Emit dta')
          this.$emit('on-filters-change', this.filterMaps)
        }
      }
    },
    methods: {
      handleTagClose (evt, name) {
        this.$delete(this.filterTags, name)
      },
      handleMenuItemClick (name) {
        this.filterKey = name
        this.$refs.filterInput.focus()
      },
      handleConfirm () {
        this.$set(this.filterTags, this.filterKey, { title: this.filterTitle, value: this.filterValue })
        this.filterKey = ''
        this.filterValue = ''
      },
      handleSearch () {
        console.log('handle search')
      }
    }
  }
</script>

<style scoped>
  .filter-field >>> .ivu-input, .filter-field .ivu-input:focus {
    border: none;
    box-shadow: none;
    padding: 0;
    font-size: 13px;
  }
  a {
    color: #000;
  }
</style>
