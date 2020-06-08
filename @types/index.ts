import AuthService from '~/services/test'
interface IEnum {
  toSelect: { text: string; value: number }[]
}
interface Storage {
  setState(key: string, val: any): void
  getState(key: string): any
  watchState(key: string, callback: (newValue: any) => any): void
  setCookie(key: string, val: any, isJson: boolean): void
  getCookie(key: string): any
  setLocalStorage(key: string, val: any, isJson: boolean): void
  getLocalStorage(key: string): any
}
interface Auth {
  user?: Object
  loggedIn: boolean
  $storage: Storage
  loginWith(strategy: string, date: any): Promise<any>
  login(): Promise<any>
  setUser(user: any): void
  setToken(strategy: string, token: string): void
  setUserToken(token: string): Promise<any>
  fetchUser(): Promise<any>
  hasScope(role: string): boolean
  logout(): void
  onError(callback: (error: string, name: string, endpoin: string) => any): void
  onRedirect(callback: (to: Object, from: Object) => any): void
}
interface GTM {
  push(arg: { event: string; [key: string]: any }): any
}
declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
    $gtm: GTM
  }
  interface Context {
    $auth: Auth
    $gtm: GTM
  }
  interface NuxtAppOptions {
    $auth: Auth
    $gtm: GTM
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    test: AuthService
  }
  interface NuxtEnumInstance {
    role: IEnum
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    auth?: string | boolean
  }
}
