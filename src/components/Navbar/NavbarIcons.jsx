import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function NavbarIcons() {
  return (
    <div className="flex gap-5 npm run decoration-violet-50text-gray-700 hover:text-text">
      <CiSearch className="w-5 h-5 text-text" />
      <CiHeart className="w-5 h-5 text-text" />
      <IoCartOutline className="w-5 h-5 text-text" />
    </div>
  );
}

export default NavbarIcons;
