<style lang="scss" scoped>
</style>
<template>
  <div>
    <TopHeader />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
import TopHeader from '@/components/Pages/Home/TopHeader.vue'
@Component({
  layout: 'HomePage',
  components: {
    TopHeader
  }
})
export default class HomePage extends Vue {}
</script>

