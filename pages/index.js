import Head from "next/head";
import Title from "./../components/Title.js";
import Header from "./../components/Header.js";
import Search from "./../components/Search.js";

export default function Home() {
  return (
    <div className="h-screen bg-slate-300">
      <Title title="Home" />
      <Header />
      <Search />
    </div>
  );
}
