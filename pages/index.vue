<style lang="scss" scoped>
</style>
<template>
  <div>
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="12">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  layout: 'HomePage',
})
export default class HomePage extends Vue {
  images = []
}
</script>

