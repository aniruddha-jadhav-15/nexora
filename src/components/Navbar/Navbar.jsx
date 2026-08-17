import Logo from "./Logo";
import Navigation from "./Navigation";
import NavbarIcons from "./NavbarIcons";
import { IoMenuSharp } from "react-icons/io5";
function Navbar() {
  return (
    <header className="icons flex justify-between  items-center md:px-8 px-4 py-2 border border-border bg-surface">
      <div className="flex items-center gap-1">
        <IoMenuSharp className="md:hidden text-lg color" />
        <Logo />
      </div>
      <Navigation />
      <NavbarIcons />
    </header>
  );
}

export default Navbar;
