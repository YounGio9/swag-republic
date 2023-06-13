"use client";

import { types } from "@/helpers";
import React from "react";

const BannerContext = React.createContext<types.BannerContext>({} as types.BannerContext);

interface Props {
   children: React.ReactNode | null;
}

/**
 * Provide all values of context to the children
 * @param {React.ReactNode} children: Consummers of the context.
 * @return {React.JSX.Element}: Banner Provider
 */
function BannerProvider({ children }: Props): React.JSX.Element {
   const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

   const toggleMenu = () => setMenuOpen(!menuOpen);

   return (
      <BannerContext.Provider value={{ menuOpen, setMenuOpen, toggleMenu }}>
         {children}
      </BannerContext.Provider>
   );
}

export default BannerProvider;

export const useBannerContext = () => React.useContext(BannerContext);
