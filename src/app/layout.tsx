import "./globals.css"
import { Inter } from "next/font/google"
import BannerProvider from "@/contexts/BannerContext"
import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Footer"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// eslint-disable-next-line
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
   title: "swagg Republic",
   description: "Official website of swag republic",
}

/**
 *
 * @param {React.ReactNode} children :Children
 * @return {React.JSX.Element}
 */
export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}): React.JSX.Element {
   return (
      <html lang='en'>
         <BannerProvider>
            <body className={"font-swag"}>
               <Banner />
               {children}
               <Footer />
            </body>
         </BannerProvider>
      </html>
   )
}
