<template>
  <div class="side-menu-header">
    <div class="logo-con">
      <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
      <img v-show="collapsed" :src="minLogo" key="min-logo" />
    </div>
    <Dropdown class="org-zone" transfer trigger="click">
      <a href="javascript:void(0)">
        DEFAULT
        <fa :icon="['fas', 'sort-down']"/>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>组织1</DropdownItem>
        <DropdownItem>组织2</DropdownItem>
        <DropdownItem>组织3</DropdownItem>
        <DropdownItem>组织4</DropdownItem>
        <DropdownItem>组织5</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
  export default {
    name: 'SideMenuHeader'
  }
</script>

<style scoped>

</style>
