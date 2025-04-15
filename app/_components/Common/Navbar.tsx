"use client";

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import MyMobileNav from "./MyMobileNav";
import { menuItems } from "@/lib/data";

const Navbar = () => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className={`sticky top-0 left-0 w-full h-16  shadow-md z-50  bg-black transition-all duration-300 ease-in-out`}>
      <div className="wrapper-nav flex justify-between items-center h-16  text-white">
        <Link href='/' className="flex items-center space-x-3" >
          <BriefcaseBusiness /> <h2 className="text-xl font-semibold">DreamJob</h2>
        </Link>

        <ul className="hidden md:flex items-center space-x-6 text-base font-semibold gap-3">
          {
            menuItems.map(item => (
              <li key={item.id}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))
          }
        </ul>

        <div className="hidden sm:block">
          <Button variant="ghost">Login</Button>
          <Button className="bg-brand hover:bg-[#20a689]">Register</Button>
        </div>

        <MyMobileNav />
      </div>
    </header>
  );
};

export default Navbar;
