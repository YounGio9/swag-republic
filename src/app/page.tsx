import BestSales from "@/components/BestSellers"
import Presentation from "@/components/Presentation"
import React from "react"

/**
 *
 * @return {React.JSX.Element}: The home page .
 */
export default function Home(): React.JSX.Element {
   return (
      <main className='flex min-h-screen flex-col items-center justify-between'>
         <Presentation />
         <BestSales />
      </main>
   )
}
