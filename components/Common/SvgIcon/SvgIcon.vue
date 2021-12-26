<style lang="scss" scoped>
div {
  display: inline-flex;
}
.icon--link {
  cursor: pointer;
}
</style>
<template>
  <div :class="{ 'icon--link': hasClickListener }" @click="$event => $emit('click', $event)">
    <component
      :class="name + '-icon'"
      :is="icon"
      :width="size"
      :style="{ fill: svgColor,stroke:stroke }"
    ></component>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import colors from 'vuetify/es5/util/colors'
@Component
export default class component_name extends Vue {
  @Prop()
  name!: string

  @Prop({ default: 24 })
  size!: string

  @Prop()
  color!: string
  @Prop()
  stroke!: string

  get svgColor() {
    if (this.color) {
      let [color, base = 'base'] = this.color.split(' ')
      if (
        this.$vuetify.theme &&
        this.$vuetify.theme.currentTheme.hasOwnProperty(color)
      ) {
        return this.$vuetify.theme.currentTheme[color]
      } else if (colors.hasOwnProperty(color)) {
        return (colors as any)[color][base]
      } else {
        return this.color
      }
    } else {
      if (this.$store.state.setting.selectedTheme == 'primary-light') {
        return '#333'
      } else if (this.$store.state.setting.selectedTheme == 'primary-dark') {
        return '#fff'
      } else if (this.$store.state.setting.selectedTheme == 'straw-light') {
        return '#4A3A21'
      }
    }
  }
  get icon() {
    return () => import(`@/assets/svg/${this.name}.svg?inline`)
  }

  get hasClickListener(): boolean {
    return Boolean(this.$listeners.click || this.$listeners['!click'])
  }
}
</script>
