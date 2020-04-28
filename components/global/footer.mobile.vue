<style lang="scss" scoped>
</style>
<template>
  <v-footer :fixed="true" app>
    <span>footer mobile</span>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class FooterMobile extends Vue {}
</script>