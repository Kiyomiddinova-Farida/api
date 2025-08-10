export type Product = {
  id: string
  title: string
  price: number
  imageUrl?: string
}

export type ApiList<T> = {
  items: T[]
  total: number
}