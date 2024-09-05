"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import {Menu, X } from "lucide-react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/contato", label: "Contato" },
  { href: "/produtos", label: "Produtos" },
  { href: "/gerenciamento", label: "Gerenciamento" },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <header className="flex items-center justify-between m-3">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={logo} alt="Logomarca" priority={true} />
          </Link>

          <nav className="flex justify-end">
            <div className="hidden w-full md:flex justify-end items-center">

              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <span className="px-6 xl:px-10 font-bold text-sm xl:text-xl">
                    {link.label}
                  </span>
                </Link>
              ))}

              <Link
                href={"/login"}
                className="border-2 border-azul py-3 px-7 rounded-2xl text-sm xl:text-xl font-bold text-azul"
              >
                Login
              </Link>
            </div>

            <div className="md:hidden">
              {isNavOpen ? (
                <X
                  onClick={toggleNav}
                  className="w-10 h-10 text-amarelo cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                />
              ) : (
                <div className="flex gap-4">
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
      {isNavOpen && (
            <div className="md:hidden bg-amarelo items-center gap-6 flex flex-col">
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <span className="px-6 xl:px-10 font-bold text-xl text-white">
                    {link.label}
                  </span>
                </Link>
              ))}
              <span className="px-6 xl:px-10 font-bold text-xl text-white">
                Login
              </span>
            </div>
          )}
    </>
  );
}
