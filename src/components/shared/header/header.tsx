"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { menuList } from "./constans";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="z-50 py-4 sticky top-0 bg-white/90 backdrop-blur-xs nav-border-reveal">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="">
          {" "}
          <span className="inline-block -mt-0.5 whitespace-nowrap text-xl font-bold">
            Your Next Store
          </span>
        </a>
        {/* nav links */}
        <div className="max-w-full flex shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
          <div className="sm:block hidden">
            <ul className="flex flex-row items-center justify-center gap-x-1">
              {menuList.map((item, index) => (
                <a key={index} href={item.url}>
                  <li className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden">
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        {/* search */}
        <div className="mr-3 ml-auto sm:ml-0">
          <div className="flex w-full relative items-center min-w-9 justify-end">
            <Input
              type="search"
              placeholder="Search for products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiSearch className="absolute right-[5%]" />
          </div>
        </div>
        {/* Cart & LogIn */}
        <div className="flex gap-2 items-center">
          <a href="/cart" className="relative block h-6 w-6">
            <LiaCartArrowDownSolid
              size={24}
              className="hover:text-black/50 transition-colors duration-200 ease-in"
            />
          </a>
          <a href="">
            <LuLogIn size={20} className="hover:text-black/50 " />
          </a>
        </div>
      </div>
    </header>
  );
};
