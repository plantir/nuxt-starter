<template>
  <v-layout>
    <nuxt-link to="/">home</nuxt-link>
    <v-btn color="danger" @click="logout">logout</v-btn>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
@Component
export default class Inspire extends Vue {
  logout() {
    this.$auth.logout()
  }
}
</script>