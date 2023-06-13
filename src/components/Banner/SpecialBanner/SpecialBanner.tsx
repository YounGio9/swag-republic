import { useBannerContext } from "@/contexts/BannerContext";
import React from "react";
import View from "./View";

/**
 * A Special Banner just at bottom of Banner
 * @return {React.JSX.Element}: Shows benefits of the market.
 */
function SpecialBanner(): React.JSX.Element {
   const { menuOpen } = useBannerContext();

   return (
      <div
         className={`py-3 min-h-[3.25rem] border-y-[1px] bg-swag-yellow border-y-black ${
            menuOpen ? "hidden" : ""
         }`}
      >
         <div className="marquee-container flex">
            {Array(6)
               .fill(0)
               .map((_, idx) => (
                  <View key={idx} />
               ))}
         </div>
      </div>
   );
}

export default SpecialBanner;
