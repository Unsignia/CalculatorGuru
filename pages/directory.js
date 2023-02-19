import { useEffect } from "react";
import Link from "next/link";
import Title from "./../components/Title.js";
import Header from "./../components/Header.js";
import file from "./../public/calculator_guru.json";

export default function Directory() {
  const D = () => {
    return (
      <div className="py-14 px-10 text-center">
        <>
          <div className="text-2xl text-red-700 pb-8">Algebra</div>
          <div className="grid grid-cols-3 gap-4">
            {file.map((i, index) =>
              i.subject == "algebra" ? (
                <p
                  key={index}
                  className="text-gray-600 hover:text-blue-800 hover:cursor-pointer"
                >
                  <Link href={i.link}>{i.name}</Link>
                </p>
              ) : null
            )}
          </div>
        </>
        <>
          <div className="text-2xl text-green-700 pt-14 pb-8">Geometry</div>
          <div className="grid grid-cols-3 gap-4">
            {file.map((i, index) =>
              i.subject == "geometry" ? (
                <p
                  key={index}
                  className="text-gray-600 hover:text-blue-800 hover:cursor-pointer"
                >
                  <Link href={i.link}>{i.name}</Link>
                </p>
              ) : null
            )}
          </div>
        </>
        <>
          <div className="text-2xl text-blue-700 pt-14 pb-8">Other</div>
          <div className="grid grid-cols-3 gap-4">
            {file.map((i, index) =>
              i.subject == "other" ? (
                <p
                  key={index}
                  className="text-gray-600 hover:text-blue-900 hover:cursor-pointer"
                >
                  <Link href={i.link}>{i.name}</Link>
                </p>
              ) : null
            )}
          </div>
        </>
      </div>
    );
  };

  return (
    <>
      <Title title="Directory" />
      <Header />
      <D />
    </>
  );
}
