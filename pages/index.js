import Head from "next/head";
import Title from "./../components/Title.js";
import Header from "./../components/Header.js";
import Search from "./../components/Search.js";
import Directory from "./../components/Directory.js";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <Header />
      <div className="flex">
        <div className="bg-gray-100 flex-grow">
          <div>
            <Image
              src="/mediamodifier.jpg"
              alt="background-hero"
              quality={100}
              priority={true}
              fill={true}
              layout="fill"
            />
          </div>
          <div className="pt-20 px-16 text-center text-2xl text-gray-600 font-baloo">
            CalculatorGuru is a one-stop shop for all your calculating needs
            when it comes to Algebra, Geometry and soon the Sciences~
          </div>
          <Search />
          <Directory />
        </div>
      </div>
    </>
  );
}
