
export interface Article {
  id?: number
  attachments?: Array<any>
  __meta__?: {
    claps_count: number
    comments_count: number
  }
  published_at?: string
  created_at?: string
  updated_at?: string
}
