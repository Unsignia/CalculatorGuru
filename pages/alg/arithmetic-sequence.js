import { useState } from "react";
import Image from "next/image";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { arithmeticsequence } from "./../../utils/geoformula.js";
import search_item from "./../api/search-item.js";

export async function getStaticProps() {
  const res = await search_item("Arithmetic Sequence");
  return {
    props: {
      res,
    },
  };
}

export default function ArithmeticSequence({ res }) {
  const [missing, setMissing] = useState("an");
  const [an, setan] = useState("");
  const [a1, seta1] = useState("");
  const [n, setn] = useState("");
  const [d, setd] = useState("");

  const img = res[0]["img_link"];

  function handleSubmit(e) {
    e.preventDefault();
    // var c = arithmeticsequence(missing, an, a1, n, d);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setan("");
    seta1("");
    setn("");
    setd("");
  }

  function handleInputan(e) {
    setan(e.target.value);
  }
  function handleInputa1(e) {
    seta1(e.target.value);
  }
  function handleInputn(e) {
    setn(e.target.value);
  }
  function handleInputd(e) {
    setd(e.target.value);
  }

  const a1nd = (
    <>
      <Input name="a1" function={handleInputa1} value={a1} />
      <Input name="n" function={handleInputn} value={n} />
      <Input name="d" function={handleInputd} value={d} />
    </>
  );
  const annd = (
    <>
      <Input name="an" function={handleInputan} value={an} />
      <Input name="n" function={handleInputn} value={n} />
      <Input name="d" function={handleInputd} value={d} />
    </>
  );
  const ana1d = (
    <>
      <Input name="an" function={handleInputan} value={an} />
      <Input name="a1" function={handleInputa1} value={a1} />
      <Input name="d" function={handleInputd} value={d} />
    </>
  );

  return (
    <>
      <Title title="Arithmetic Sequence" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Arithmetic Sequence</h1>

        <div className="h-20 relative">
          <Image
            src={img}
            alt="arithmeticsequence"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>

        <div className="flex">
          <div className="w-3/4">
            <label
              htmlFor="names"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select from the dropdown menu
            </label>
            <select
              id="names"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleMissing}
              value={missing}
            >
              <option value="an">Solve for a&#8345;</option>
              <option value="a1">Solve for a&#8321;</option>
              <option value="n">Solve for n</option>
            </select>
          </div>
        </div>

        {missing == "an"
          ? a1nd
          : missing == "a1"
          ? annd
          : missing == "n"
          ? ana1d
          : null}

        <button className="my-4 block bg-blue-500 hover:bg-blue-700 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {"The answer is: " + arithmeticsequence(missing, an, a1, n, d)}
        </div>
      </form>
    </>
  );
}
