import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { areaellipse } from "./../../utils/geoformula.js";

export default function AreaEllipse() {
  const [missing, setMissing] = useState("A");
  const [A, setA] = useState("");
  const [a, seta] = useState("");
  const [b, setb] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = areaellipse(missing, A, a, b);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setA("");
    seta("");
    setb("");
  }

  function handleInputA(e) {
    setA(e.target.value);
  }
  function handleInputa(e) {
    seta(e.target.value);
  }
  function handleInputb(e) {
    setb(e.target.value);
  }

  const ab = (
    <>
      <Input name="a" function={handleInputa} value={a} />
      <Input name="b" function={handleInputb} value={b} />
    </>
  );
  const Aa = (
    <>
      <Input name="A" function={handleInputA} value={A} />
      <Input name="a" function={handleInputa} value={a} />
    </>
  );
  const Ab = (
    <>
      <Input name="A" function={handleInputA} value={A} />
      <Input name="b" function={handleInputb} value={b} />
    </>
  );

  return (
    <>
      <Title title="Area of Ellipse" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Area of Ellipse</h1>
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
              <option value="a">Solve for a</option>
              <option value="b">Solve for b</option>
            </select>
          </div>
        </div>

        {missing == "A" ? ab : missing == "a" ? Ab : missing == "b" ? Aa : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + areaellipse(missing, A, a, b)}
        </div>
      </form>
    </>
  );
}
