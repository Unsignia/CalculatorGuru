import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { areatriangle } from "./../../utils/geoformula.js";

export default function AreaTriangle() {
  const [missing, setMissing] = useState("A");
  const [A, setA] = useState("");
  const [b, setB] = useState("");
  const [h, setH] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = areatriangle(missing, A, b, h);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setA("");
    setB("");
    setH("");
  }

  function handleInputA(e) {
    setA(e.target.value);
  }
  function handleInputb(e) {
    setB(e.target.value);
  }
  function handleInputh(e) {
    setH(e.target.value);
  }

  const bnh = (
    <>
      <Input name="b" function={handleInputb} value={b} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );

  const Anb = (
    <>
      <Input name="A" function={handleInputA} value={A} />
      <Input name="b" function={handleInputb} value={b} />
    </>
  );

  const Anh = (
    <>
      <Input name="A" function={handleInputA} value={A} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );

  return (
    <>
      <Title title="Area of Triangle" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Area of Triangle</h1>
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
              <option value="A">Solve for A</option>
              <option value="b">Solve for b</option>
              <option value="h">Solve for h</option>
            </select>
          </div>
        </div>

        {missing == "A"
          ? bnh
          : missing == "b"
          ? Anh
          : missing == "h"
          ? Anb
          : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + areatriangle(missing, A, b, h)}
        </div>
      </form>
    </>
  );
}
