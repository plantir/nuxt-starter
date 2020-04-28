<style lang="scss" scoped>
</style>
<template>
  <div>
    <CM1 v-if="$device.isDesktop" />
    <CM1Mob v-else />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import logoComponent from '~/assets/svg/logo.svg?inline'
Component.registerHooks(['fetch'])
@Component({
  layout: ctx => (ctx.isMobile ? 'mobile' : 'desktop'),
  components: {
    logoComponent,
    CM1: () => import('@/components/index/component1.dekstop.vue'),
    CM1Mob: () => import('@/components/index/component1.mobile.vue')
  }
})
export default class YourComponent extends Vue {}
</script>

