import ShopppingList from "@/components/ShoppingList"
import { bestSellers } from "@/db/bestSellers"
import React from "react"

/**
 * Return all articles with all categories of the merchant.
 * @return {React.JSX.Element}: The shop page
 *
 */
function Shop() {
   const totalArticles = [...bestSellers]

   const categories = totalArticles.reduce(
      (acc, article) => acc.concat(article.categories),
      [] as string[]
   )

   const filteredCategories = Array.from(new Set(categories))

   return (
      <div className='min-h-[88vh] mb-14'>
         <ShopppingList
            name='Nos vetements'
            articles={totalArticles}
            categories={filteredCategories}
         />
      </div>
   )
}

export default Shop
