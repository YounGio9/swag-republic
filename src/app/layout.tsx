import "./globals.css"
import { Inter } from "next/font/google"
import BannerProvider from "@/contexts/BannerContext"
import Banner from "@/components/Banner/Banner"

// eslint-disable-next-line
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
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
            <body className={inter.className}>
               <Banner />
               {children}
            </body>
         </BannerProvider>
      </html>
   )
}
