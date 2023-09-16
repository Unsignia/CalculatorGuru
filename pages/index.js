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
      <div className="flex bg-[#e3ecf1] pb-20">
        <div className="flex-grow">
          <div className="relative aspect-w-2 lg:aspect-w-5 aspect-h-1">
            <Image
              src="/mediamodifier.jpg"
              alt="background-hero"
              className="absolute inset-0 w-full h-full"
              quality={100}
              objectFit="cover"
              objectPosition="center"
              priority={true}
              fill={true}
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative text-center text-2xl text-gray-600 font-baloo">
                CalculatorGuru is a one-stop shop for all your calculating needs
                when it comes to Algebra, Geometry and soon the Sciences~
              </div>
            </div>{" "}
            <Search />
          </div>

          <Directory />
        </div>
      </div>
    </>
  );
}
