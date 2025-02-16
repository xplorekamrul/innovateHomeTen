"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io"
import { Container } from "@/components/Container"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Service", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Price", href: "#" },
    { name: "Blog", href: "#" },
  ]

  return (
    <header className="py-3 fixed top-0 w-full bg-white z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={100} height={40} />
          </Link>
          <nav className="hidden sm:flex gap-[30px]">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="group hover:text-[#8454F5]">
                {item.name}
                <IoIosArrowDown className="inline ml-1 group-hover:text-[#8454F5] group-hover:rotate-180 transition-transform duration-800 ease-in" />
              </Link>
            ))}
          </nav>
          <Link
            href="#"
            className="hidden sm:block px-[28px] py-[14px] rounded-[18px] bg-[#8454F5] text-white hover:bg-[#7040e0] transition-colors duration-300"
          >
            Contact Us
          </Link>
          <button onClick={toggleMenu} className="sm:hidden text-2xl mr-3">
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div className="sm:hidden mt-3 bg-[rgba(134,216,225,0.37)] w-[50%] ml-auto rounded-lg  absolute top-[65px] right-0">
          <Container>
            <nav className="flex flex-col gap-4 py-4 ">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="group hover:text-[#8454F5] text-center">
                  {item.name}
                  <IoIosArrowDown className="inline ml-1 group-hover:text-[#8454F5] group-hover:rotate-180 transition-transform duration-800 ease-in" />
                </Link>
              ))}
              <Link
                href="#"
                className="px-[28px] py-[14px] w-fit  rounded-[18px] bg-[#8454F5] text-white hover:bg-[#7040e0] transition-colors duration-300 mx-auto"
              >
                Contact Us
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

export default NavBar

