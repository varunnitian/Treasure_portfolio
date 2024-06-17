import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./Mobilenav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Varun <span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop navbar and hire me button*/}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          
          <Link href="/contact">
          <Button>Hire me</Button>
          </Link>
        </div>

        {/*mobile navbar */}
        <div className="md:hidden">
          <MobileNav/>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
