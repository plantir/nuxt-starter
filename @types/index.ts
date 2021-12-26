import Efact from '~/enums/fact'
import EArticleType from '~/enums/article_type'
import EContentStatus from '~/enums/content_status'
import { UserSetting } from '~/plugins/userSetting'
import ArticleService from '~/services/articles'
import AudioService from '~/services/audios'
import AuthService from '~/services/auth'
import DepartmentService from '~/services/departments'
import CalendarContentService from '~/services/calendar_content'
import NotificationService from '~/services/notifications'
import OwnerService from '~/services/owners'
import PadcastService from '~/services/padcasts'
import PlaylistService from '~/services/playlists'
import PostService from '~/services/posts'
import ResourceService from '~/services/resources'
import SeriesService from '~/services/series'
import VideoService from '~/services/videos'
import ProfileService from '~/services/profiles'
import TitleService from '~/services/titles'
import PositionService from '~/services/positions'
import HighlightService from '~/services/highlights'
import TagService from '~/services/tags'
import CommentService from '~/services/comments'
import UploadService from '~/services/upload'
import ReferralCommentService from '~/services/referral_comments'
import HomeService from '~/services/home'
interface IEnum {
  toSelect: { text: string; value: number }[]
}
interface Storage {
  setState(key: string, val: any): void
  getState(key: string): any
  watchState(key: string, callback: (newValue: any) => any): void
  setCookie(key: string, val: any, isJson?: boolean): void
  getCookie(key: string): any
  setLocalStorage(key: string, val: any, isJson?: boolean): void
  getLocalStorage(key: string): any
  removeLocalStorage(key: string): any
  setUniversal(key: string, val: any, isJson?: boolean): void
  getUniversal(key: string, isJson?: boolean): any
  syncUniversal(key: string, val: any, isJson?: boolean): void
  removeUniversal(key: string): any
}
interface Auth {
  user?: Object
  loggedIn: boolean
  $storage: Storage
  loginWith(strategy: string, date: any): Promise<any>
  login(args: any): Promise<any>
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
    $storage: Storage
    $gtm: GTM
    $userSetting: UserSetting
  }
  interface Context {
    $auth: Auth
    $storage: Storage
    $gtm: GTM
    $userSetting: UserSetting
  }
  interface NuxtAppOptions {
    $auth: Auth
    $storage: Storage
    $gtm: GTM
    $userSetting: UserSetting
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    articles: ArticleService
    series: SeriesService
    departments: DepartmentService
    owners: OwnerService
    resources: ResourceService
    videos: VideoService
    playlists: PlaylistService
    padcasts: PadcastService
    audios: AudioService
    notifications: NotificationService
    auth: AuthService
    posts: PostService
    calendar_content: CalendarContentService
    profiles: ProfileService
    titles: TitleService
    positions: PositionService
    highlights: HighlightService
    tags: TagService
    comments: CommentService
    upload: UploadService
    referral_comments: ReferralCommentService
    home: HomeService
  }
  interface NuxtEnumInstance {
    role: IEnum
    fact: IEnum
    content_status: IEnum
    article_type: IEnum
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    auth?: string | boolean
  }
}
