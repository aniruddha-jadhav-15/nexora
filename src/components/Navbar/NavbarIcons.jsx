import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function NavbarIcons() {
  return (
    <div className="flex gap-5 havbar-icons">
      <CiSearch />
      <CiHeart />
      <IoCartOutline />
    </div>
  );
}

export default NavbarIcons;
