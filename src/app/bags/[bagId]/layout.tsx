import { bestSellers } from "@/db/bestSellers"
import { types } from "@/helpers"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import React from "react"

/**
 *
 * MetaData of a Single article page
 * @return {Promise<Metadata>}
 */
export async function generateMetadata({
   params,
}: {
   params: { bagId: string }
}): Promise<Metadata> {
   if (!params.bagId) return notFound()

   return {
      title: bestSellers.find(
         (article: types.Article) => (article.id as number) == +params.bagId
      )?.name,
      description: "Article description",
   }
}
/**
 * Layout of Article Page
 * @return {React.JSX.Element}:
 */
function Layout({ children }: { children: React.ReactNode }) {
   return <div>{children}</div>
}

export default Layout
