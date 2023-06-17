"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { bestSellers } from "../db/bestSellers"
import CustomButtom from "./CustomButtom"
import ShopppingList from "./ShoppingList"

/**
 * Render all articles in bestsales section.
 * @return {React.JSX.Element}: BestSale component
 */
function BestSales(): React.JSX.Element {
   const router = useRouter()

   return (
      <>
         <ShopppingList articles={bestSellers} name='Nos meilleurs articles' />
         <CustomButtom
            handleClick={() => router.push("/shop")}
            background='white'
            color='black'
         >
            Voir tous nos articles
         </CustomButtom>
         <p className='mb-12'></p>
      </>
   )
}

export default BestSales
