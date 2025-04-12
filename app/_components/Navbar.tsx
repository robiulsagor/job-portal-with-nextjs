"use client";

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MyMobileNav from "./MyMobileNav";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full h-16  shadow-md z-50  ${scrollY > 100 ? "bg-[#000] shadow-md" : "bg-transparent"}  transition-all duration-300 ease-in-out`}>
      <div className="wrapper-nav flex justify-between items-center h-16  text-white">
        <div className="flex items-center space-x-3" >
          <BriefcaseBusiness /> <h2 className="text-xl font-semibold">DreamJob</h2>
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-base font-semibold gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Jobs</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
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
