"use client"
import React from "react"
import { BsChevronRight, BsChevronDown, BsInstagram, BsWhatsapp } from "react-icons/bs"
import CustomButtom from "./CustomButtom"
import logo from "../assets/logo.png"

/**
 *
 * Footer of website. It includes links to shop,
 * contact links and links to some articles.
 * @return {React.JSX.Element}: Website Footer
 */
function Footer() {
   const [isActive, setIsActive] = React.useState<boolean>(false)
   return (
      <div className='w-full bg-swag-yellow font-bold text-lg'>
         <div className='items-center flex justify-center w-full'>
            <img src={logo.src} alt='logo' className='w-[170px] h-auto mt-6' />
         </div>
         <div className='w-full flex items-center gap-3 pt-6 justify-center'>
            <CustomButtom color='black' background='white' rounded>
               <BsInstagram size={22} />
            </CustomButtom>
            <CustomButtom color='black' background='white' rounded>
               <BsWhatsapp size={22} />
            </CustomButtom>
         </div>
         <div className='w-full p-6'>
            <button
               className='border-t pt-2 pb-1 w-full text-left border-x-0 border-black flex items-center justify-between'
               onClick={() => setIsActive(!isActive)}
            >
               <span className='flex items-center text-center'>A PROPOS DU CLUB</span>
               {isActive ? <BsChevronDown /> : <BsChevronRight />}
            </button>

            {isActive && (
               <div className='grid gap-4'>
                  <span>Le club</span>
                  <span>FAQ</span>
               </div>
            )}
            <hr className='border-black' />
         </div>
      </div>
   )
}

export default Footer
