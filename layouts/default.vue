<style lang="scss" scoped>
.container {
  padding: 0;
  @include media(md) {
    padding: 12px;
  }
}
.splash {
  background: #00cbb3;
}
</style>
<template>
  <v-app>
    <!-- <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >-->
    <!-- <Splash :show="show_splash" /> -->
    <!-- </transition> -->
    <v-container>
      <v-content>
        <nuxt />
      </v-content>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  middleware: 'auth',
  components: {},
})
export default class DefaultLayout extends Vue {}
</script>
