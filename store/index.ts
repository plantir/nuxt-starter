import { Module, VuexModule, Action } from 'vuex-module-decorators'

@Module
export default class Index extends VuexModule {
  name = 'armin'
  @Action
  nuxtClientInit() {}
}
