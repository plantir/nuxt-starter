<template>
  <div>
    <v-radio-group hide-details row v-model="selectedTheme">
      <v-radio label="light" value="primary-light"></v-radio>
      <v-radio label="dark" value="primary-dark"></v-radio>
    </v-radio-group>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({
  name: 'ThemeChanger'
})
export default class ThemeChanger extends Vue {

  get selectedTheme() {
    return this.$userSetting.selectedTheme
  }
  set selectedTheme(selectedTheme: string) {
    this.$userSetting.setTheme(selectedTheme)
  }

}
</script>
