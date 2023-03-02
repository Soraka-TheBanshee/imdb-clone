import MenuItem from "./MenuItem";
import { ImHome3 } from "react-icons/im"
import { BsFillInfoCircleFill } from "react-icons/bs"
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="
      flex justify-between items-center 
      max-w-6xl min-h-[70px] 
      px-4 lg:px-6 sm:mx-auto
      select-none " >

      <div className="flex gap-4 lg:gap-6">
        <MenuItem title="HOME" link="/" Icon={ImHome3} />
        <MenuItem title="ABOUT" link="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="flex gap-1 items-center">
        <DarkModeSwitch />
        <Link href="/" >
          <h2 className="text-2xl" >
            <span  className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
            <span className="text-xl hidden sm:inline" >Clobe</span>
          </h2>
        </Link>

      </div>

    </div>
  )
}
