<style lang="scss" scoped>
</style>
<template>
  <div>
    <logoComponent />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import NuxtLogo from '~/assets/svg/logo.svg?raw'
import logoComponent from '~/assets/svg/logo.svg?inline'
import { getModule } from 'vuex-module-decorators'
import PostModule from '@/store/post'
import fa from '@/locales/fa'
Component.registerHooks(['fetch'])
@Component({
  components: { logoComponent }
})
export default class YourComponent extends Vue {}
</script>

