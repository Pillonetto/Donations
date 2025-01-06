export type ItemInfo = {
  name: string
  price: number
  provider: ItemProvider
  description?: string
  image?: string
}

export enum ItemProvider {
  GREMIO,
  INTER,
  RENNER,
  ZAFFARI,
}
