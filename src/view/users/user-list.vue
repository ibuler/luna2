<style>
  .ivu-table th, .ivu-table td {
    height: 39px;
    border-bottom: 1px solid #e8eaec;
  }
  .ivu-table-stripe-even td{
    background-color: #f9f9f9;
  }
  /*奇数行*/
  .ivu-table-stripe-odd td{
    background-color: #fff !important;
  }

  .action-panel {
    padding-bottom: 10px;
  }

  .setting {
    font-size: 20px;
    padding-left: 5px;
    text-align: right;
  }

  .pagination {
    margin-top: 10px;
    text-align: right;
  }

  .filter-header {
    padding-left: 5px;
    color: #a2a2a2;
  }
</style>
<template>
  <i-card title="用户列表" :disHover="true">
    <i-row class="action-panel">
      <i-col class="action" span="12">
         <BtnDropdown @on-action-click="handleActionClick" :actions="actions"></BtnDropdown>
      </i-col>
      <i-col class="filters" offset="3" span="6">
        <l-table-filter></l-table-filter>
      </i-col>
      <i-col span="3" class="setting">
        <i-button-group>
          <Button type="default"><Icon type="md-refresh" /></Button>
          <Button type="default"><Icon type="ios-settings" /></Button>
          <Button type="default"><Icon type="md-arrow-down" /></Button>
        </i-button-group>
      </i-col>
    </i-row>
    <i-row>
      <i-table border stripe :row-class-name="rowClassName" :columns="columns1" :data="data1">
        <template slot-scope="{ row }" slot="name">
          <router-link :to="{ name: 'user-detail', params: { id: 1 } }">{{ row.name }}</router-link>
          <!--<a :href="row.name">{{ row.name }}</a>-->
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <i-dropdown trigger="click">
            <Button type="primary" size="small">
              操作
              <Icon type="md-more" />
            </Button>
            <i-dropdown-menu slot="list">
              <i-dropdown-item>更新</i-dropdown-item>
              <i-dropdown-item disabled>删除</i-dropdown-item>
              <i-dropdown-item divided>测试</i-dropdown-item>
            </i-dropdown-menu>
          </i-dropdown>
        </template>
      </i-table>
    </i-row>
    <i-row>
      <div class="pagination">
        <Page :total="100" show-total show-sizer show-elevator />
      </div>
    </i-row>
  </i-card>
</template>

<script>
  import BtnDropdown from '_c/btn-dropdown'
  import LTableFilter from '_c/table-filter'
  export default {
    name: 'user-list',
    components: {
      BtnDropdown,
      LTableFilter
    },
    data() {
      return {
        value4: '',
        actions: [
          {
            'title': '创建用户',
            'to': { 'name': 'user-create' }
          },
          {
            'title': '批量导入'
          },
          {
            'title': '批量更新'
          }
        ],
        filterFields: [
          {
            'title': '用户名',
            'key': 'username'
          },
          {
            'title': '姓名',
            'key': 'name'
          },
          {
            'title': '年龄',
            'key': 'age'
          }
        ],
        columns1: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            slot: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '动作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    methods: {
      rowClassName: function (row, index) {
        if (index % 2 === 0) {
          return 'ivu-table-stripe-even'
        } else return 'ivu-table-stripe-odd'
      },
      handleSelect(value) {
        this.value4 = value + ':'
      // this.$refs.input2.$refs.input.focus();
      },
      handleActionClick(name) {
        console.log(name)
      }
    }
  }
</script>

<style scoped>

</style>
