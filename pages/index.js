import Head from "next/head";
import Title from "./../components/Title.js";
import Header from "./../components/Header.js";
import Search from "./../components/Search.js";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <Header />
      <Search />
    </>
  );
}
