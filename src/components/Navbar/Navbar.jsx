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
    <>
      {/* Top Bar */}
      <div className="hidden bg-black px-4 py-2 text-xs text-white md:block">
        <div className="container flex items-center justify-between">
          <span>🚚 Free Shipping on orders over ₹999</span>
          <span>✨ New Year Sale — Up to 30% Off</span>
          <span>Launch 2026</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="border-b border-border bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:h-20">
          {/* Mobile Menu + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenClose}
              className="text-2xl text-text md:hidden"
            >
              <IoMenuSharp />
            </button>

            <Logo />
          </div>
          <Navigation toogle={toogle} handleOpenClose={handleOpenClose} />
          <NavbarIcons />
        </div>
      </header>
    </>
  );
}

export default Navbar;
