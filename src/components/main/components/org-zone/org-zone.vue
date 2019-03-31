<template>
  <div class="org-zone">
    <Dropdown transfer trigger="click">
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
    name: 'OrgZone'
  }
</script>

<style scoped>

</style>
