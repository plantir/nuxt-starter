<style lang="scss" scoped>
</style>
<template>
  <div>
    <Logo />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Logo from '@/assets/svg/logo.svg?inline'
@Component({
  components: {
    Logo
  }
})
export default class TopHeader extends Vue {}
</script>