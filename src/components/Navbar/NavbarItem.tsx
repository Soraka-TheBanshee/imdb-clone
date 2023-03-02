"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface NavbarItemProps {
  title: string
  urlParam: string
}

export default function NavbarItem({ title, urlParam }:NavbarItemProps) {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")

  return (
    <div className="flex  " >
      <Link href={`/?genre=${urlParam}`} 
      className={`
      hover:text-amber-600 p-2
      font-semibold sm:inline-block 
      ${genre && genre === urlParam && 'underline underline-offset-8 decoration-4 decoration-amber-500'} `} >
        {title}
      </Link>
    </div>
  )
}
