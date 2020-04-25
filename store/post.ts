import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'post',
  namespaced: true
})
export default class Post extends VuexModule {
  posts: any[] = ['armin'] // initialise empty for now

  get totalComments(): number {
    return this.posts
      .filter(post => {
        // Take those posts that have comments
        return post.comments && post.comments.length
      })
      .reduce((sum, post) => {
        // Sum all the lengths of comments arrays
        return sum + post.comments.length
      }, 0)
  }
  @Mutation
  updatePosts(posts: any[]) {
    this.posts = posts
  }

  @Action({ commit: 'updatePosts' })
  async fetchPosts() {
    return this.posts
  }
}
