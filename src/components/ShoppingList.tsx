"use client"

import { types } from "@/helpers"
import React, { useState } from "react"
import Article from "./Article"
import CustomButtom from "./CustomButtom"

interface Props {
   articles: types.Article[]
   name: string
   categories?: string[]
}

/**
 *
 * List of products
 * @return {React.ReactElement}: A shoppinglist
 */
function ShopppingList({ articles, name, categories }: Props) {
   const [activeCategory, setActiveCategory] = useState<string>("")

   React.useMemo(() => {
      console.log(activeCategory)
   }, [activeCategory])
   return (
      <div className='flex flex-col gap-4 justify-center items-center lg:mx-auto lg:max-w-[90rem]'>
         <section className='bg-repeat bg-fixed flex flex-col items-center pt-12 lg:pt-24'>
            <p className='text-3xl font-medium lg:text-6xl'>{name}</p>

            {!!categories && (
               <div className='flex gap-6'>
                  {categories?.map((category) => (
                     <CustomButtom
                        handleClick={(e) => setActiveCategory(category)}
                        key={category}
                        background='white'
                        color='black'
                     >
                        {category}
                     </CustomButtom>
                  ))}
               </div>
            )}

            <div className='flex flex-wrap gap-4 justify-center my-8 max-w-2xl lg:my-12 lg:max-w-screen-2xl'>
               {articles.map(
                  (pull, idx) =>
                     (!activeCategory || pull.categories.includes(activeCategory)) && (
                        <Article key={pull.name + idx} {...pull} />
                     )
               )}
            </div>
         </section>
      </div>
   )
}

export default ShopppingList
