<style lang="scss" scoped>
</style>
<template>
  <div>
    <!-- {{$i18n.locale}} -->
    <v-select v-model="$i18n.locale" :items="langs"></v-select>
    <!-- {{$i18n.locale }} -->
    {{$t('name')}}
    <v-text-field
      v-validate="'required'"
      :error-messages="errors.collect('name')"
      name="name"
      label="label"
      id="id"
    ></v-text-field>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import PostModule from '@/store/post'
import fa from '@/locales/fa'
Component.registerHooks(['fetch'])
@Component({})
export default class YourComponent extends Vue {
  loading = true
  result = null
  value = 2
  items: any = []
  langs = ['fa', 'en']
  mounted() {}
  public created() {}
}
</script>

