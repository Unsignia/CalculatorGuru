import Head from "next/head";
import Title from "./../components/Title.js";
import Header from "./../components/Header.js";
import Search from "./../components/Search.js";
import Directory from "./../components/Directory.js";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Title title="Home" />
      <Header />
      <div className="pt-20 px-16 text-center text-2xl text-gray-600 font-baloo">
        CalculatorGuru is a one-stop shop for all your calculating needs when it
        comes to Algebra, Geometry and soon the Sciences~
      </div>
      <Search />
      <Directory />
    </div>
  );
}
