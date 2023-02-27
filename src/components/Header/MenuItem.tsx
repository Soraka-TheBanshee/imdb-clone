import Link from "next/link"
import { IconType } from "react-icons"

interface MenuItemProps {
  title: string
  link: string
  Icon: IconType
}

export default function MenuItem({ title, link, Icon }:MenuItemProps) {
  return (
    <div>
      <Link href={link} >
        <Icon />
        <p className="" >{title}</p>
      </Link>
    </div>
  )
}
