export interface BannerContext {
   menuOpen: boolean
   setMenuOpen: (state: boolean) => void
   toggleMenu: () => void
}

export interface Article {
   isNew: boolean
   name: string
   cover: string
   colors: string[]
   price: string
   apport: string
}
