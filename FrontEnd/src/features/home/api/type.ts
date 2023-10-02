type imageAttributes={
  attributes: {
    url: string
  }
  
}
export type product = {
  attributes: {
    title: string
    description: string
    category: string
    price: number
    rating: number
    image: {
      data: imageAttributes[]
    }
  }
}
export type filterProduct = {
  [key: string]: string|null,
  populate:string
}
