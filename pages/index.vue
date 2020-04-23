<style lang="scss" scoped>
</style>
<template>
  <div>
    <v-skeleton-loader
      class="mt-5"
      :loading="$fetchState && $fetchState.pending"
      height="94"
      type="list-item-two-line"
    >
      <v-card>
        <v-card-title>{{result}}</v-card-title>
        <v-card-text>Card Text</v-card-text>
        <v-btn color="success" to="inspire">text</v-btn>
      </v-card>
    </v-skeleton-loader>
    <v-select :items="items" v-model="value" label="label"></v-select>
    {{value}}
    <vr-badge :color="['red','green','yellow'][value]">{{value | enum('role')}}</vr-badge>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ERole } from '~/enums/role'
Component.registerHooks(['fetch'])
@Component({
  layout: 'default2',
  auth: false
})
export default class YourComponent extends Vue {
  loading = true
  result = null
  value = null
  items: any = []
  async fetch() {
    this.loading = true
    this.result = await this.$service.test.test()
    this.loading = false
  }
  mounted() {
    console.log(ERole.student)
    console.log(this.$enum.role)
    this.items = this.$enum.role.toSelect
    console.log()
    console.log(this.$enum.role)
    console.log(ERole[4])
    console.log(this.$auth.$storage)
  }
}
</script>

