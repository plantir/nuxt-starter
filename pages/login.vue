<style lang="scss" scoped>
</style>
<template>
  <div>
    <v-text-field v-model="user.username" name="name" label="label" id="id"></v-text-field>
    <v-text-field v-model="user.password" name="name" label="label" id="id"></v-text-field>
    <v-btn color="success" outlined @click="login">login</v-btn>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Test from '@/components/VuetifyLogo.vue'
interface User {
  firstName: string
  lastName: string
}
@Component({
  components: { Test },
  async asyncData() {
    let msg = 'hello class component'
    return {
      msg
    }
  },
  data: () => ({})
})
export default class YourComponent extends Vue {
  name = ''
  email = ''
  select = null
  picker = null
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  checkbox = null
  isActive = false
  user = {
    username: 'admin',
    password: 'admin',
    firstName: 'آرمین',
    lastName: 'خیرخواهان'
  }

  async login() {
    try {
      let response = await this.$auth
        .loginWith('local', { data: this.user })
        .then(() => {
          this.$toast.success().showSimple('با موفقیت وارد شدید')
        })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

