"use client"
import { useRouter } from "next/navigation"
import React from "react"
import cover from "../assets/swag-cover.jpg"
import CustomButtom from "./CustomButtom"

/**
 * This component is the first component of the website
 * It shows the cover and attract the visitors or customers
 * @return {React.JSX.Element}: Presentaion Component
 */
function Presentation() {
   const router = useRouter()
   return (
      <section className='w-full'>
         <div className='flex flex-col grow lg:flex-row-reverse'>
            <div>
               <span className='w-full'>
                  <img
                     src={cover.src}
                     alt=''
                     className='w-full h-auto object-top object-cover'
                  />
               </span>
            </div>
            <article className='flex basis-[48%]  flex-col items-center border-r border-r-black'>
               <div className='flex flex-col h-full items-center px-8 max-w-3xl lg:items-start lg:px-16'>
                  <h1 className='my-6 text-xl font-mono  font-medium text-center px-1 lg:my-12 lg:text-6xl'>
                     If you don&apos;t understand SWAG REPUBLIC,{" "}
                     <br className=' lg:mb-6' /> Wear one of the pieces and you will
                     understand
                  </h1>
                  {/* <p className='text-lg text-center inline lg:text-2xl lg:text-left'>
                     Des articles a partir de &nbsp;
                     <span className='font-semibold'>8 000 francs</span>
                  </p> */}
                  <a href='# ' className='my-12 flex justify-center w-full'>
                     <CustomButtom
                        background='red'
                        color='white'
                        handleClick={() => router.push("/shop")}
                     >
                        <span className='mb-6'>Choisis ton article SR</span>
                     </CustomButtom>
                  </a>
               </div>
               <hr className='h-0 border-t w-full border-black'></hr>
               {/* <div className='flex relative justify-center items-center  p-8 w-full max-w-3xl lg:px-16'>
                  <div className='w-full'>
                     <h3 className='mt-10 mb-1 text-xl font-semibold lg:mt-5 lg:text-3xl'>
                        Ton Sweet SR
                     </h3>
                     <p className='mb-1 text-lg lg:mb-5 lg:text-2xl'>Livré en 48h</p>
                     <a href='# '>
                        <button
                           className='transition-all py-2.5 px-6 rounded-full relative active:shadow-[0_0_black] active:translate-x-1 active:translate-y-1
                    bg-white my-1 text-lg font-medium lg:my-5 shadow-[4px_4px_black] border border-black'
                        >
                           <div className=''>dès 10 000 F</div>
                        </button>
                     </a>
                  </div>
                  <div className='flex relative basis-1/2 ml-4 lg:basis-1/3'>
                     <span>
                        <img src={cover.src} alt='' />
                     </span>
                  </div>
               </div> */}
            </article>
            {/* <div className='hidden relative grow bg-slate-700 lg:flex'>
               <span className='w-full'>
                  <img src={cover.src} alt='' className='w-full object-cover h-full' />
               </span>
            </div> */}
         </div>
         {/* <div className='flex flex-wrap gap-x-10 gap-y-6 justify-center py-6 text-center bg-swag-yellow border-y border-y-black lg:gap-x-20'>
            <div className='flex flex-col items-center'>
               <svg
                  width='36'
                  height='36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='mb-3'
               >
                  <path
                     d='M31.5 18.75c0 10.5-13.5 15-13.5 15s-13.5-4.5-13.5-15V4.5l13.5-3 13.5 3v14.25Z'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                     stroke-linecap='square'
                  ></path>
                  <path
                     d='m12 17.25 4.5 4.5 9-10.5'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                     stroke-linecap='square'
                  ></path>
               </svg>
               <p className='text-sm lg:text-lg'>
                  <span className='font-semibold'>Assurance incluse</span>
                  <br />
                  Casse &amp; Vol
               </p>
            </div>
            <div className='flex flex-col items-center'>
               <svg
                  width='36'
                  height='36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='mb-3'
               >
                  <path
                     d='m9 6.75 18 10.5M34.5 12.75l-15 9-18-10.5M19.5 21.75v12'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                  ></path>
                  <path
                     d='M34.5 12.75v10.5l-15 10.5-18-10.5v-12l15-9 18 10.5Z'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                     stroke-linecap='square'
                  ></path>
               </svg>
               <p className='text-sm lg:text-lg'>
                  <span className='font-semibold'>Livraison offerte</span>
                  <br />
                  en point relais
               </p>
            </div>
            <div className='flex flex-col items-center'>
               <svg
                  width='36'
                  height='36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='mb-3'
               >
                  <path
                     d='M10.551 16.602 3 1.5h9l6 12M25.45 16.6 33 1.5h-9l-6 12'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                  ></path>
                  <path
                     d='M18 34.5c5.799 0 10.5-4.701 10.5-10.5S23.799 13.5 18 13.5 7.5 18.201 7.5 24 12.201 34.5 18 34.5Z'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                     stroke-linecap='square'
                  ></path>
                  <path
                     d='m18 18.573 1.764 3.573 3.942.573-2.853 2.781.673 3.927L18 27.573l-3.527 1.854.674-3.927-2.853-2.781 3.942-.573L18 18.573Z'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                     stroke-linecap='square'
                  ></path>
               </svg>
               <p className='text-sm lg:text-lg'>
                  <span className='font-semibold'>Garantie</span>
                  <br />
                  pendant la location
               </p>
            </div>
            <div className='flex flex-col items-center'>
               <svg
                  width='36'
                  height='36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='mb-3'
               >
                  <g
                     clip-path='url(#recycling_svg__a)'
                     stroke='#000'
                     stroke-width='2'
                     stroke-miterlimit='10'
                  >
                     <path d='M11.625 20.09c0-3.485 2.89-6.375 6.375-6.375a6.251 6.251 0 0 1 5.695 3.57M24.375 20.26c0 3.485-2.89 6.375-6.375 6.375a6.251 6.251 0 0 1-5.695-3.57'></path>
                     <path
                        d='m23.95 13.46-.255 3.825-3.825-.17M12.22 26.89l.085-3.825h3.825'
                        stroke-linecap='square'
                     ></path>
                     <path d='m6 6 1.5 28.5h21L30 6'></path>
                     <path d='M1.5 6h33M13.5 6V1.5h9V6' stroke-linecap='square'></path>
                  </g>
                  <defs>
                     <clipPath id='recycling_svg__a'>
                        <path fill='#fff' d='M0 0h36v36H0z'></path>
                     </clipPath>
                  </defs>
               </svg>
               <p className='text-sm lg:text-lg'>
                  <span className='font-semibold'>Moins de gaspillage</span>
                  <br />
                  électronique
               </p>
            </div>
         </div> */}
      </section>
   )
}

export default Presentation
