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
  <Card title="用户列表" :disHover="true">
    <Row class="action-panel">
      <Col class="action" span="3">
         <BtnDropdown @on-action-click="handleActionClick" :actions="actions"></BtnDropdown>
      </Col>
      <Col class="filters" span="18" >
          <l-table-filter @on-filters-change="filterUserList"></l-table-filter>
      </Col>
      <Col span="3" class="setting">
        <ButtonGroup>
          <Button type="default"><Icon type="md-refresh" /></Button>
          <Button type="default"><Icon type="ios-settings" /></Button>
          <Button type="default"><Icon type="md-arrow-down" /></Button>
        </ButtonGroup>
      </Col>
    </Row>
    <Row>
      <Table border stripe :columns="columns" :data="userList">
        <template slot-scope="{ row }" slot="name">
          <router-link :to="{ name: 'user-detail', params: { id: 1 } }">{{ row.name }}</router-link>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Dropdown trigger="click">
            <Button type="primary" size="small">
              操作
              <Icon type="md-more" />
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem>更新</DropdownItem>
              <DropdownItem disabled>删除</DropdownItem>
              <DropdownItem divided>测试</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </template>
      </Table>
    </Row>
    <Row>
      <div class="pagination">
        <Page :total="userTotal" :page-size.sync="page.size" :current.sync="currentPage"
              :page-size-opts="page.sizeOpts" show-total show-sizer show-elevator
              @on-page-size-change="handlePageSizeChange" @on-change="handleGetUserList"
        />
      </div>
    </Row>
  </Card>
</template>

<script>
  import BtnDropdown from '@c/btn-dropdown'
  import LTableFilter from '@c/table-filter'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'user-list',
    components: {
      BtnDropdown,
      LTableFilter
    },
    data() {
      return {
        total: 0,
        value4: '',
        page: { size: 15, sizeOpts: [15, 25, 50] },
        currentPage: 1,
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
            'title': '姓名',
            'key': 'name'
          },
          {
            'title': '用户名',
            'key': 'username'
          },
          {
            'title': '年龄',
            'key': 'age'
          }
        ],
        columns: [
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
            title: '用户名',
            key: 'username'
          },
          {
            title: '角色',
            key: 'role_display'
          },
          {
            title: '用户组',
            key: 'groups_display'
          },
          {
            title: '来源',
            key: 'source_display'
          },
          {
            title: '动作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ]
      }
    },
    computed: {
      ...mapState({
        userList: state => state.users.userList,
        userTotal: state => state.users.userTotal
      })
    },
    methods: {
      ...mapActions([
        'getUserList'
      ]),
      handleSelect (value) {
        this.value4 = value + ':'
      // this.$refs.input2.$refs.input.focus();
      },
      handleActionClick (name) {
        console.log(name)
      },
      handleGetUserList () {
        this.getUserList({ page: this.currentPage, pageSize: this.page.size })
      },
      handlePageSizeChange (size) {
        this.page.size = size
        this.handleGetUserList()
      },
      filterUserList (filters) {
        this.getUserList({ page: this.currentPage, pageSize: this.page.size, filters: filters })
      }
    },
    created () {
      this.handleGetUserList()
    }
  }
</script>

<style scoped>

</style>
