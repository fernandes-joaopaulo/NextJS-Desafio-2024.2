"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import {Menu, X } from "lucide-react";
import {Search as SearchIcon} from "lucide-react";
import Search from "../Search";


const links = [
  { href: "/", label: "Home" },
  { href: "/contato", label: "Contato" },
  { href: "/produtos", label: "Produtos" },
  { href: "/admin", label: "Gerenciamento" },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const toggleNavSearch = () => {
    if(isSearchOpen){
      toggleSearch()
    } else{
      toggleNav()
    }
  }

  return (
    <>
      <header className="flex bg-azul m-0 items-center justify-between shadow-lg p-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={logo} alt="Logomarca" priority={true} />
          </Link>

          <nav className="flex justify-end">
            <div className="hidden w-full md:flex justify-end items-center">

            <button onClick={toggleNav}>

                {isSearchOpen ? 

                  <X
                  onClick={toggleSearch}
                  className="w-10 h-10 text-amarelo cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                  />
                  :
                  <SearchIcon
                    onClick={toggleSearch}
                    className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                  />
                }

            </button>

              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <span className="px-6 xl:px-10 font-bold text-white text-sm xl:text-xl">
                    {link.label}
                  </span>
                </Link>
              ))}

              <Link
                href={"/login"}
                className="border-2 border-amarelo text-amarelo py-3 px-7 rounded-2xl text-sm xl:text-xl font-bold "
              >
                Login
              </Link>
            </div>

            <div className="md:hidden">
              {isNavOpen || isSearchOpen ? (
                <X
                  onClick={toggleNavSearch}
                  className="w-10 h-10 text-amarelo cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                />
              ) : (
                <div className="flex gap-4">
                  <SearchIcon
                    onClick={toggleSearch}
                    className="w-10 h-10 text-white cursor-pointer"
                  />
                  <Menu
                    onClick={toggleNav}
                    className="w-10 h-10 text-amarelo cursor-pointer"
                  />
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      {isSearchOpen && (
        <Search/>
      )}
      {isNavOpen && (
            <div className="md:hidden bg-amarelo items-center gap-6 flex flex-col">
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <span className="px-6 xl:px-10 font-bold text-xl text-white">
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link
                href={"/login"}
                className=" px-6 xl:px-10 font-bold text-xl text-white "
              >
                Login
              </Link>
            </div>
          )}
    </>
  );
}
