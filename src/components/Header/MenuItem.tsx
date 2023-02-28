import Link from "next/link"
import { IconType } from "react-icons"

interface MenuItemProps {
  title: string
  link: string
  Icon: IconType
}

export default function MenuItem({ title, link, Icon }:MenuItemProps) {
  return (
    <div className="flex  " >
      <Link href={link} 
      className='hover:text-amber-400 ' >
        <Icon className="text-2xl sm:hidden " />
        <p className="hidden text-sm font-bold sm:inline-block " >{title}</p>
      </Link>
    </div>
  )
}
