import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {IoMenu} from "react-icons/io5";
import logo from "./../public/logo.svg";

export default function Header() {
  return (
    <>
      <nav className="top-0 sticky z-40 bg-[#bdced6] lg:py-6 py-4 tracking-widest text-gray-700 drop-shadow-md">
        <ul className="flex justify-between	content-center align-center">
          <li className="h-6 w-40 relative mx-12">
            <Link href="/">
              <Image
                src={logo}
                alt=" Logo"
                layout="fill"
                quality={100}
                draggable="false"
                priority={true}
              />
            </Link>
          </li>
          <div>
            <li className="lg:mx-12 sm:mx-4 inline hover:text-black hover:font-bold">
              <Link href="/">HOME</Link>
            </li>

            <li className="lg:mx-12 sm:mx-4 pr-12 inline hover:text-black hover:font-bold">
              <Link href="/contact">CONTACT</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
