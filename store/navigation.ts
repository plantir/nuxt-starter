import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'navigation',
  namespaced: true
})
export default class Navigation extends VuexModule {
  items = [
    {
      name: 'خانه',
      svgIcon: 'home',
      to: '/'
    },
    {
      name: 'میز کار',
      svgIcon: 'dashboard',
      to: '/desk'
    },
    {
      svgIcon: 'draft_icon',
      name: 'متن جدید',
      to: '/posts/create'
    },
    {
      svgIcon: 'favorite',
      name: 'علاقه مندی ها',
      to: '/favorites'
    },
    {
      svgIcon: 'padcast',
      name: 'صداها',
      to: '/audios'
    },
    {
      svgIcon: 'video_icon',
      name: ' ویدیو ها',
      to: '/videos'
    }
  ]
}
