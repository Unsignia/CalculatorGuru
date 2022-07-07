import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { geometricsequence } from "./../../utils/geoformula.js";

export default function GeometricSequence() {
  const [missing, setMissing] = useState("an");
  const [an, setan] = useState("");
  const [a1, seta1] = useState("");
  const [n, setn] = useState("");
  const [r, setr] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = geometricsequence(missing, an, a1, r, n);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setan("");
    seta1("");
    setn("");
    setr("");
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
  function handleInputr(e) {
    setr(e.target.value);
  }

  const a1nr = (
    <>
      <Input name="a1" function={handleInputa1} value={a1} />
      <Input name="n" function={handleInputn} value={n} />
      <Input name="r" function={handleInputr} value={r} />
    </>
  );
  const annr = (
    <>
      <Input name="an" function={handleInputan} value={an} />
      <Input name="n" function={handleInputn} value={n} />
      <Input name="r" function={handleInputr} value={r} />
    </>
  );
  const ana1r = (
    <>
      <Input name="an" function={handleInputan} value={an} />
      <Input name="a1" function={handleInputa1} value={a1} />
      <Input name="r" function={handleInputr} value={r} />
    </>
  );

  return (
    <>
      <Title title="Geometric Sequence" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Geometric Sequence</h1>
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
          ? a1nr
          : missing == "a1"
          ? annr
          : missing == "n"
          ? ana1r
          : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + geometricsequence(missing, an, a1, r, n)}
        </div>
      </form>
    </>
  );
}
