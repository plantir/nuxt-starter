<style lang="scss" scoped>
</style>
<template>
  <v-footer :fixed="false" app>
    <span>footer desktop</span>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class FooterDesktop extends Vue {}
</script>