import { types } from "@/helpers"
import React from "react"
import { bestSellers } from "../db/bestSellers"
import Article from "./Article"

/**
 * Render all articles in bestsales section.
 * @return {React.JSX.Element}: BestSale component
 */
function BestSales(): React.JSX.Element {
   return (
      <section className='bg-repeat bg-fixed flex flex-col items-center py-12 lg:py-24'>
         <p className='text-4xl font-medium lg:text-6xl'>Nos best sellers</p>
         <div className='flex flex-wrap gap-4 justify-center my-8 max-w-2xl lg:my-12 lg:max-w-screen-2xl'>
            {bestSellers.map((pull: types.Article) => (
               <Article key={pull.name} {...pull} />
            ))}
         </div>
         <a href='#'>
            <button
               className='transition-all py-2.5 px-6 rounded-full relative active:shadow-[0_0_black] 
            active:translate-x-1 active:translate-y-1 bg-swagg hover:text-white hover:bg-cornflower-blue 
          active:text-white active:bg-cornflower-blue font-semibold shadow-[4px_4px_black] border border-black'
            >
               Voir tous nos tels
            </button>
         </a>
      </section>
   )
}

export default BestSales
