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
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  layout: 'default2',
  auth: false
})
export default class YourComponent extends Vue {
  loading = true
  result = null
  async fetch() {
    this.loading = true
    this.result = await this.$service.test.test()
    this.loading = false
  }
  mounted() {
    console.log(this.$auth.$storage)
  }
}
</script>

