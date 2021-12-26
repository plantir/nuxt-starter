import { Article } from './../models/Article'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
export default class ArticleService {
  path = 'articles'
  constructor(public $axios: NuxtAxiosInstance) {}

  query(params?: any): Promise<Article[]> {
    return this.$axios.$get(`${this.path}`, { params })
  }

  selections(params?: any): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/selections`, { params })
  }

  forUser(params?: any): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/forUser`, { params })
  }

  search(keyword: string): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/search`, { params: { keyword } })
  }

  get(id: number): Promise<Article> {
    return this.$axios.$get(`${this.path}/${id}`)
  }

  related(id: number): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/${id}/related`)
  }

  update(id: number, data: Article): Promise<Article> {
    return this.$axios.$put(`${this.path}/${id}`, data)
  }

  referr(id: number, referred_to?: string): Promise<Article> {
    return this.$axios.$post(`${this.path}/${id}/referr`, { referred_to })
  }

  reject(id: number): Promise<Article> {
    return this.$axios.$post(`${this.path}/${id}/reject`)
  }

  cancelRejection(id: number): Promise<Article> {
    return this.$axios.$post(`${this.path}/${id}/cancelRejection`)
  }

  cancelPublication(id: number): Promise<Article> {
    return this.$axios.$post(`${this.path}/${id}/cancelPublication`)
  }

  publish(id: number): Promise<Article> {
    return this.$axios.$post(`${this.path}/${id}/publish`)
  }

  recently(): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/visited`)
  }

  comments(id: number): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/${id}/comments`)
  }

  addComment(id: number, text: string): Promise<Article[]> {
    return this.$axios.$post(`${this.path}/${id}/comments`, { text })
  }

  bookmarked(): Promise<Article[]> {
    return this.$axios.$get(`${this.path}/bookmarked`)
  }

  byowner(id: number): Promise<Article[]> {
    return this.$axios.$get(`${this.path}`)
  }

  addBookmark(id: number): Promise<Article[]> {
    return this.$axios.$post(`${this.path}/${id}/addBookmark`)
  }

  removeBookmark(id: number): Promise<Article[]> {
    return this.$axios.$delete(`${this.path}/${id}/removeBookmark`)
  }

  addClap(id: number): Promise<Article[]> {
    return this.$axios.$post(`${this.path}/${id}/addClap`)
  }

  sliderItems(params: any) {
    return this.$axios.$get(`${this.path}/sliderItems`, { params })
  }
}
