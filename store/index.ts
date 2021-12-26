export const strict = false
export const state = () => ({
  splash: false,
  first_init: true
})
export const actions = {
  async nuxtClientInit({ state }: any, ctx: any) {
    // if (ctx.isMobile) {
    //   state.splash = true
    //   setTimeout(() => {
    //     state.splash = false
    //     setTimeout(() => {
    //       state.first_init = false
    //     }, 2000)
    //   }, 4000)
    // }
  }
}
