"use client"

import { useBannerContext } from "@/contexts/BannerContext"
import Link from "next/link"
import React from "react"
import BannerLogo from "../../assets/bannerLogo.png"

// const bebasNeue = Bebas_Neue({weight: '400', subsets: ['latin']})
/**
 * Banner Component that include navigation links and website logo
 * @return {React.JSX.Element}: The entire Banner of the website.
 */
function Banner(): React.JSX.Element {
   const { menuOpen, toggleMenu } = useBannerContext()
   return (
      <nav
         className={`pt-3 lg:pt-0 ${
            menuOpen
               ? "fixed bg-white w-full h-screen z-50 lg:static lg:h-fit pt-10 lg:pt-0"
               : ""
         }`}
      >
         <div className='relative flex justify-between items-center lg:text-lg lg:py-5 lg:px-6 lg:mt-0 px-4 pb-4'>
            {menuOpen ? (
               <div className='flex items-center lg:hidden'>
                  <button
                     onClick={toggleMenu}
                     className={`flex justify-between lg:hidden`}
                  >
                     <svg
                        width='30'
                        height='30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                     >
                        <g clip-path='url(#cross_svg__a)' fill='#000'>
                           <path d='M23.839 4.643 4.394 24.09l1.767 1.768L25.607 6.41l-1.768-1.768Z'></path>
                           <path d='M25.607 23.588 6.16 4.142 4.393 5.91 23.84 25.355l1.768-1.767Z'></path>
                        </g>
                        <defs>
                           <clipPath id='cross_svg__a'>
                              <path fill='#fff' d='M0 0h30v30H0z'></path>
                           </clipPath>
                        </defs>
                     </svg>
                  </button>
               </div>
            ) : (
               <div className='flex items-center lg:hidden'>
                  <button
                     onClick={toggleMenu}
                     className={`flex justify-between lg:hidden `}
                  >
                     <svg
                        width='30'
                        height='30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                     >
                        <path
                           d='M28.75 13.75H1.25v2.5h27.5v-2.5ZM28.75 5H1.25v2.5h27.5V5ZM28.75 22.5H1.25V25h27.5v-2.5Z'
                           fill='#000'
                        ></path>
                     </svg>
                  </button>
               </div>
            )}
            <Link href={"/"} className='text-3xl font-bold'>
               <div
                  className={`flex flex-col items-center font-semibold font-header relative h-[8.5vh]`}
               >
                  <img src={BannerLogo.src} alt='' className=' h-52 w-auto -mt-14' />
               </div>
            </Link>
            <div className='hidden lg:flex gap-x-6'>
               <Link
                  href='/shop'
                  className='flex gap-6 items-center text-2xl font-medium lg:text-lg'
               >
                  Nos articles
               </Link>
               {/* <a
                  href='/club'
                  className='flex gap-6 items-center text-2xl font-medium lg:text-lg'
               >
                  Le Club
               </a> */}
            </div>
            <div className='flex relative items-center ml-2'>
               {/* <CustomButtom color='black' background='white'>
                  <div className='flex flex-row items-center gap-x-2'>
                     <svg
                        width='24'
                        height='24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                     >
                        <path
                           d='M19 20.486v-.745a3 3 0 0 0-1.512-2.605l-3.219-1.842M9.727 15.292l-3.215 1.844A3 3 0 0 0 5 19.741v.745'
                           stroke='#000'
                           strokeWidth='2'
                           stroke-miterlimit='10'
                        ></path>
                        <path
                           d='M12 16a4 4 0 0 1-4-4v-2a4 4 0 0 1 8 0v2a4 4 0 0 1-4 4Z'
                           stroke='#000'
                           strokeWidth='2'
                           stroke-miterlimit='10'
                           stroke-linecap='square'
                        ></path>
                        <path
                           d='M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z'
                           stroke='#000'
                           strokeWidth='2'
                           stroke-miterlimit='10'
                           stroke-linecap='square'
                        ></path>
                     </svg>
                     <span className='hidden lg:block'>Espace membre</span>
                  </div>
               </CustomButtom> */}
            </div>
         </div>
         <div
            className={`flex z-50 flex-col gap-y-9 items-center py-24 w-full h-screen bg-swag-yellow border-t lg:hidden ${
               menuOpen ? "" : "hidden"
            }`}
         >
            <a
               className='flex gap-6 items-center text-2xl font-medium lg:text-lg'
               href='/shop'
            >
               Nos articles
               <svg
                  width='20'
                  height='20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='lg:hidden'
               >
                  <path
                     d='M3.832 6.17v.5h7.129l-8.315 8.313-.353.354.353.354 2.663 2.663.354.353.354-.353 8.314-8.315v7.13H19.5V1.5H3.832v4.67Z'
                     fill='#000'
                     stroke='#000'
                  ></path>
                  <path
                     d='M2.832 5.17v.5H9.96l-8.315 8.313-.353.354.353.354 2.663 2.663.354.353.354-.353 8.314-8.315v7.13H18.5V.5H2.832v4.67Z'
                     fill='#fff'
                     stroke='#000'
                  ></path>
               </svg>
            </a>
            {/* <a
               className='flex gap-6 items-center text-2xl font-medium lg:text-lg'
               href='/blog?utm_source=website&utm_medium=website+link&utm_campaign=generic_websitelink'
            >
               Le club
               <svg
                  width='20'
                  height='20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='lg:hidden'
               >
                  <path
                     d='M3.832 6.17v.5h7.129l-8.315 8.313-.353.354.353.354 2.663 2.663.354.353.354-.353 8.314-8.315v7.13H19.5V1.5H3.832v4.67Z'
                     fill='#000'
                     stroke='#000'
                  ></path>
                  <path
                     d='M2.832 5.17v.5H9.96l-8.315 8.313-.353.354.353.354 2.663 2.663.354.353.354-.353 8.314-8.315v7.13H18.5V.5H2.832v4.67Z'
                     fill='#fff'
                     stroke='#000'
                  ></path>
               </svg>
            </a> */}
            {/* <CustomButtom color='white' background='red'>
               Espace membre
            </CustomButtom> */}
         </div>
         {/* <SpecialBanner /> */}
      </nav>
   )
}

export default Banner
