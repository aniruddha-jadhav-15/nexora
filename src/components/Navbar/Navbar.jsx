import Logo from "./Logo";
import Navigation from "./Navigation";
import NavbarIcons from "./NavbarIcons";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [toogle, setToogle] = useState(false);
  const handleOpenClose = () => {
    setToogle((prev) => !prev);
  };
  console.log(toogle);

  return (
    <header className="icons flex justify-between  items-center md:px-8 px-4 py-2 border border-border bg-surface">
      <div className="flex items-center gap-1">
        <button onClick={handleOpenClose}>
          <IoMenuSharp className="md:hidden text-lg color" />
        </button>
        <Logo />
      </div>
      <Navigation toogle={toogle} handleOpenClose={handleOpenClose} />
      <NavbarIcons />
    </header>
  );
}

export default Navbar;
