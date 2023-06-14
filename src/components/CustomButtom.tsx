import React from "react"

type background = "yellow" | "red" | "white"
type color = "white" | "black"

interface Props {
   background: background
   children: React.ReactNode | string
   color: color
   rounded?: boolean
}

/**
 * The main button of the website.
 * @param {Props}: Props of the Button
 * @return {React.JSX.Element}: Return CustomButton
 */
function CustomButtom({ children, background, color, rounded }: Props) {
   const getBgClass = (color: background): string => {
      switch (color) {
         case "red":
            return "bg-swag-red"
         case "white":
            return "bg-white"
         case "yellow":
            return "bg-swag-yellow"
         default:
            return "bg-transparent"
      }
   }

   return (
      <button
         className={`transition-all ${!rounded ? "py-2.5" : "py-2"}  ${
            !rounded ? "px-6" : "px-2"
         } ${
            color === "white" ? "text-white" : "text-black"
         } rounded-full relative active:shadow-[0_0_black] active:translate-x-1 active:translate-y-1 ${getBgClass(
            background
         )}  ${
            rounded ? "shadow-[2px_2px_black]" : "shadow-[4px_4px_black]"
         }   border border-black`}
      >
         <div className=''>{children}</div>
      </button>
   )
}

export default CustomButtom
