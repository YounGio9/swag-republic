export interface BannerContext {
   menuOpen: boolean
   setMenuOpen: (state: boolean) => void
   toggleMenu: () => void
}

export interface Article {
   id: number
   images?: string[]
   isNew: boolean
   description: string
   name: string
   cover: string
   colors: string[]
   price: string
   apport: string
   categories: string[]
}
