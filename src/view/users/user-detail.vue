<style>
  .user-profile .ivu-card-head {
    background: #fafafa;
  }

  .shortcut .ivu-card-head {
    background: #1ab394;
  }

  .shortcut .ivu-card-head p {
    color: #fff;
    font-weight: normal;
  }

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

  .shortcut-right * {
    float: right;
  }

  .shortcut-right .ivu-btn-small {
    padding: 1px 10px 2px;
  }

</style>
<template>
  <div>
    <i-card title="用户 ibuler" :disHover="true">
      <span slot="extra">
        <i-button type="primary">编辑</i-button>
        <i-button style="margin-left: 5px">删除</i-button>
      </span>
      <i-tabs v-model="activeName" @tab-click="handleClick" >
        <i-tab-pane label="用户详情" name="first">
          <i-row>
            <i-col span="12">
              <i-card :disHover="true" title="广宏伟" class="user-profile" key="user-profile">
                <table>
                  <tr v-for="(value, key) in user" :key="key">
                    <td class="key">{{ key | capitalize }}:</td>
                    <td class="value"><strong>{{ value }}</strong></td>
                  </tr>
                </table>
              </i-card>
            </i-col>
            <i-col span="11" offset="1">
              <Card :disHover="true" title="快捷方式" key="shortcut" class="shortcut">
                <table>
                  <tr>
                    <td>激活中:</td>
                    <td class="shortcut-right"><i-switch value="1" /></td>
                  </tr>
                  <tr>
                    <td>强制启用MFA:</td>
                    <td class="shortcut-right"><i-switch /></td>
                  </tr>
                  <tr>
                    <td>重置MFA:</td>
                    <td class="shortcut-right">
                      <i-button type="primary" size="small">重置</i-button>
                    </td>
                  </tr>
                  <tr>
                    <td>发送重置密码邮件:</td>
                    <td class="shortcut-right">
                      <i-button type="primary" size="small">发送</i-button>
                    </td>
                  </tr>
                  <tr>
                    <td>发送重置密钥邮件:</td>
                    <td class="shortcut-right">
                      <i-button type="primary" size="small">发送</i-button>
                    </td>
                  </tr>
                </table>
              </Card>
            </i-col>
          </i-row>
        </i-tab-pane>
        <i-tab-pane label="用户资产" name="second">用户资产</i-tab-pane>
      </i-tabs>
    </i-card>
  </div>
</template>

<script>
  export default {
    name: 'user-detail',
    data() {
      return {
        activeName: 'first',
        user: {
          name: '广宏伟',
          username: 'ibuler',
          email: 'ibuler@qq.com',
          role: '用户',
          mfa: '禁用',
          source: 'Local',
          dateExpired: '2099-01-01 00:00:00',
          creator: 'admin',
          dateCreated: '2018-01-01 00:00:00',
          dateUpdated: '2018-02-01 00:00:00',
          comment: '无'
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
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
