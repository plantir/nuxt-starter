import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}
  test() {
    return this.$axios.$get(`/`)
  }
}
