<template>
  <i-card title="创建用户" :disHover="true">
    <i-form :model="formItem" :label-width="120">
      <h3>账户</h3>
      <i-form-item label="姓名" required>
        <i-input ></i-input>
      </i-form-item>
      <i-form-item label="用户名" required>
        <i-input ></i-input>
      </i-form-item>
      <i-form-item label="邮件" required>
        <i-input type="email"></i-input>
      </i-form-item>
      <i-form-item label="用户组">
        <i-select clearable filterable multiple>
          <i-option value="beijing">New York</i-option>
          <i-option value="shanghai">London</i-option>
          <i-option value="shenzhen">Sydney</i-option>
        </i-select>
      </i-form-item>
      <div class="hr-line-dashed"></div>
      <h3>认证</h3>
      <i-form-item label="密码">
        <span>生成重置密码连接，通过邮件发送给用户</span>
      </i-form-item>
      <i-form-item label="MFA" required>
        <i-radio-group>
          <i-radio label="2">强制启用</i-radio>
          <i-radio label="1">启用</i-radio>
          <i-radio label="0">禁用</i-radio>
        </i-radio-group>
      </i-form-item>
      <div class="hr-line-dashed"></div>
      <h3>角色安全</h3>
      <i-form-item label="角色">
        <i-select>
          <i-option value="0">用户</i-option>
          <i-option value="0">管理员</i-option>
        </i-select>
      </i-form-item>
      <i-form-item label="失效时期">
        <i-date-picker type="date" style="width: 240px"></i-date-picker>
      </i-form-item>
      <div class="hr-line-dashed"></div>
      <h3>个人信息</h3>
      <i-form-item label="手机">
        <i-input></i-input>
      </i-form-item>
      <i-form-item label="微信">
        <i-input></i-input>
      </i-form-item>
      <i-form-item label="备注">
        <i-input type="textarea"></i-input>
      </i-form-item>
      <div class="hr-line-dashed"></div>
      <i-form-item>
        <i-button type="primary">提交</i-button>
        <i-button style="margin-left: 8px" html-type="reset">重置</i-button>
      </i-form-item>
    </i-form>

  </i-card>

</template>

<script>
  export default {
    name: 'user-create',
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    }
  }
</script>

<style>
  .ivu-form-item {
    padding-right: 73px;
    padding-left: 40px;
  }
  .ivu-form  .ivu-form-item-label {
    font-weight: 700;
    font-size: 13px;
  }
</style>
