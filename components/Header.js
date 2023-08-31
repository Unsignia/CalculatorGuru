import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import logo from "./../public/logo.svg";

export default function Header() {
  return (
    <>
      <nav className="bg-white lg:py-6 md:py-4 tracking-widest text-gray-700 drop-shadow-md">
        <ul className="flex justify-between	content-center align-center">
          <li className="h-6 w-40 relative mx-12">
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt=" Logo"
                  layout="fill"
                  quality={100}
                  draggable="false"
                  priority={true}
                />
              </a>
            </Link>
          </li>
          <li className="lg:mx-12 sm:mx-4 hover:text-black hover:font-bold">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
       
          <li className="lg:mx-12 sm:mx-4 pr-12 hover:text-black hover:font-bold">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
