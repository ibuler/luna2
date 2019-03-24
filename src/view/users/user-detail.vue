<style>
  .shortcut-right * {
    float: right;
  }

  .shortcut-right .ivu-btn-small {
    padding: 1px 10px 2px;
  }

</style>
<template>
  <div>
    <l-card title="用户 ibuler">
      <span slot="extra">
        <i-button type="primary">
          <fa :icon="['far', 'edit']" />
          编辑
        </i-button>
        <i-button style="margin-left: 5px">
          <fa :icon="['far', 'trash-alt']" />
          删除
        </i-button>
      </span>
      <i-tabs v-model="activeName" @tab-click="handleClick" >
        <i-tab-pane label="用户详情" name="first">
          <i-row>
            <i-col span="14">
              <l-table-card type="gray" title="广宏伟" class="user-profile" key="user-profile" :data="user">
                <!--<table>-->
                  <!--<tr v-for="(value, key) in user" :key="key">-->
                    <!--<td class="key">{{ key | capitalize }}:</td>-->
                    <!--<td class="value"><strong>{{ value }}</strong></td>-->
                  <!--</tr>-->
                <!--</table>-->
              </l-table-card>
            </i-col>
            <i-col span="9" offset="1">
              <l-table-card type="primary" key="shortcut" class="shortcut" valueFloat="right">
                <p slot="title">
                  <fa :icon="['fas', 'info-circle']"></fa>
                  快捷方式
                </p>
                <table>
                  <tr>
                    <td>激活中:</td>
                    <td class="shortcut-right">
                      <i-switch :value="1" />
                    </td>
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
              </l-table-card>

              <l-card type="warning" key="usergroup" class="usergroup" style="margin-top: 10px">
                <p slot="title">
                  <fa :icon="['fas', 'users']"></fa>
                  用户组
                </p>
                <i-select filterable>
                  <i-option v-for="item in groups" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                </i-select>
                <i-button type="warning" style="margin-top: 10px">
                  加入
                </i-button>
              </l-card>
            </i-col>
          </i-row>
        </i-tab-pane>
        <i-tab-pane label="用户资产" name="second">用户资产</i-tab-pane>
      </i-tabs>
    </l-card>
  </div>
</template>

<script>
  import { LCard, LTableCard } from '_c/card'
  export default {
    name: 'user-detail',
    components: {
      LCard,
      LTableCard
    },
    data() {
      return {
        activeName: 'first',
        user: {
          姓名: '广宏伟',
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
        },
        shortcuts: {
          '快捷方式': '<i-switch :value="1" />'

        },
        groups: [
          {
            value: '1',
            label: '用户组1'
          },
          {
            value: '2',
            label: '用户组2'
          }
        ]
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
