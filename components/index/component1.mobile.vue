<template>
  <div>
    <h1>hello!</h1>
    <h2>i'm in mobile mode</h2>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Component1 extends Vue {
  data() {
    return {
      img: {
        src: 'https://api.cashineh.com/download/1586333734748_original.jpeg'
      }
    }
  }
  handler() {
    console.log('object')
  }
}
</script>