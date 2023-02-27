import MenuItem from "./MenuItem";
import { ImHome3 } from "react-icons/im"

export default function Header() {
  return (
    <div>

      <div className="">
        <MenuItem title="HOME" link="/" Icon={ImHome3} />
      </div>
      <div className="">
        {/* our logo and theme are here */}
      </div>

    </div>
  )
}
