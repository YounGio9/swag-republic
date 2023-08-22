import { types } from "@/helpers"
import Image from "next/image"
import Link from "next/link"
import React from "react"

/**
 * Return Infos about article.
 * @param {types.Article} Article Article infos
 * @return {React.JSX.Element}: Article Component
 */
function Article({ name, cover, colors, price, id, apport, isNew }: types.Article) {
   return (
      <Link href={`/bags/${id}`}>
         <div className='flex relative flex-col-reverse'>
            <div className='absolute top-1 left-1 border rounded-lg border-black w-full h-full'></div>
            <div
               className='relative rounded-lg border transform-gpu border-black bg-white 
            hover:shadow-[4px_4px_black] flex flex-col gap-4 items-center pt-4 lg:pt-9 h-[300px]'
            >
               <div className='font-bold capitalize lg:text-2xl w-[170px] lg:w-[280px] text-center'>
                  {name}
               </div>
               <div className='relative flex justify-center items-center mx-2 w-32 h-36 lg:mx-14 lg:w-44 lg:h-60'>
                  <span className='mt-4'>
                     <Image
                        src={cover}
                        alt=''
                        width={200}
                        height={200}
                        className='relative w-auto h-auto -z-10'
                     />
                  </span>
               </div>
               <img
                  width={65}
                  src='/imgs/soldouticon.png'
                  className={`absolute top-24 right-0   lg:top-28 lg:right-6 ${
                     !isNew ? "" : "hidden"
                  }`}
               />
               {/* <div className='flex gap-2.5 justify-center mt-8'>
                  {Array.from({ length: colors.length }, (_, index) => (
                     <div
                        key={index}
                        className='w-3.5 h-3.5 rounded-full border border-black'
                        style={{ background: colors[index] }}
                     ></div>
                  ))}
               </div> */}

               <p className='font-bold lg:text-2xl'> {price} </p>
               <div className='flex flex-col items-center lg:mb-2 mb-6 mt-2'> </div>
            </div>
         </div>
      </Link>
   )
}

export default Article
