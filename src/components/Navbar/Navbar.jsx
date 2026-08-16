import Logo from "./Logo";
import Navigation from "./Navigation";
import NavbarIcons from "./NavbarIcons";
function Navbar() {
  return (
    <header className="icons flex justify-between items-center px-8 py-2 border border-border bg-surface">
      <Logo />
      <Navigation />
      <NavbarIcons />
    </header>
  );
}

export default Navbar;
