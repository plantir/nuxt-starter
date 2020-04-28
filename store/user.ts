import { Module, VuexModule, Action } from 'vuex-module-decorators'

@Module({
  name: 'user',
  namespaced: true
})
export default class User extends VuexModule {
  name = 'armin'
}
