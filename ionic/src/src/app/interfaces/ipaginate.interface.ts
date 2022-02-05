export interface IPaginate<T> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: any[]
  next_page_url: string
  path: string
  per_page: string
  prev_page_url: string
  to: number
  total: number
}
