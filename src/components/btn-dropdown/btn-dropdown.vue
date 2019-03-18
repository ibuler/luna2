<template>
  <Button v-if="!hasOtherActions" :icon="defaultAction.icon" :name="defaultActionName" @click="handleActionClick(defaultActionName)" :to="defaultAction.to" :type="type">
    {{ defaultAction.title }}
  </Button>
  <Dropdown v-else trigger="click" transfer @on-click="handleActionClick">
    <ButtonGroup>
      <Button :icon="defaultAction.icon" @click.native.stop :name="defaultActionName" @click="handleActionClick(defaultActionName)" :to="defaultAction.to" :type="type">
        {{ defaultAction.title }}
      </Button>
      <Button :type="type">
        <Icon type="ios-arrow-down"></Icon>
      </Button>
    </ButtonGroup>
    <DropdownMenu slot="list">
      <DropdownItem v-for="item in otherActions" :name="getActionName(item)" :key="item.title">{{ item.title }}</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {
    name: 'BtnDropdown',
    props: {
      type: {
        default: 'primary'
      },
      actions: {
        type: Array,
        default: function () {
          return [
            {
              'title': 'Create',
              // 'to': 'create',
              'name': 'create',
              'icon': ''
            }
          ]
        }
      }
    },

    data () {
      return {
      }
    },
    computed: {
      defaultAction () {
        return this.actions[0]
      },
      defaultActionName() {
        return this.getActionName(this.defaultAction)
      },
      otherActions() {
        return this.actions.slice(1)
      },
      hasOtherActions() {
        return this.otherActions.length > 0
      }
    },
    methods: {
      handleActionClick (name) {
        this.$emit('on-action-click', name)
      },
      getActionName(item) {
        return item.name ? item.name : item.title
      }
    }
  }
</script>

<style scoped>
</style>
