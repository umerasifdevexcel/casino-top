import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface CasinoBrand {
  _id: string
  name: string
  logo: SanityImageSource
  description?: string
  rating?: number
  bonus?: string
  features?: string[]
  pros?: string[]
  cons?: string[]
  website?: string
  isActive: boolean
  order: number
  // Comparison table fields
  gamesCount?: string
  withdrawalTime?: string
  minDeposit?: string
  license?: string
  supportedCryptos?: string[]
  hasLiveChat?: boolean
  hasMobileApp?: boolean
  fairnessType?: string
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  author: Author
  mainImage?: SanityImageSource
  categories: Category[]
  publishedAt: string
  body: BlockContent[]
}

export interface Author {
  _id: string
  name: string
  image?: SanityImageSource
  bio?: string
}

export interface Category {
  _id: string
  title: string
  description?: string
}

export interface BlockContent {
  _type: string
  children?: { text: string; marks?: string[] }[]
  markDefs?: { _type: string; _key: string }[]
  style?: string
  listItem?: string
  level?: number
  [key: string]: unknown
}
