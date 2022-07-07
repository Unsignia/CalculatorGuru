import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { volumeellipsoid } from "./../../utils/geoformula.js";

export default function VolumeSphere() {
  const [missing, setMissing] = useState("V");
  const [V, setV] = useState("");
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = volumeellipsoid(missing, V, a, b, c);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setV("");
    seta("");
    setb("");
    setc("");
  }

  function handleInputV(e) {
    setV(e.target.value);
  }
  function handleInputa(e) {
    seta(e.target.value);
  }
  function handleInputb(e) {
    setb(e.target.value);
  }
  function handleInputc(e) {
    setc(e.target.value);
  }

  const abc = (
    <>
      <Input name="a" function={handleInputa} value={a} />
      <Input name="b" function={handleInputb} value={b} />
      <Input name="c" function={handleInputc} value={c} />
    </>
  );
  const Vab = (
    <>
      <Input name="V" function={handleInputV} value={V} />
      <Input name="a" function={handleInputa} value={a} />
      <Input name="b" function={handleInputb} value={b} />
    </>
  );
  const Vac = (
    <>
      <Input name="V" function={handleInputV} value={V} />
      <Input name="a" function={handleInputa} value={a} />
      <Input name="c" function={handleInputc} value={c} />
    </>
  );
  const Vbc = (
    <>
      <Input name="V" function={handleInputV} value={V} />
      <Input name="b" function={handleInputb} value={b} />
      <Input name="c" function={handleInputc} value={c} />
    </>
  );

  return (
    <>
      <Title title="Surface Area of Ellipsoid" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Volume of Ellipsoid</h1>
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
              <option value="V">Solve for V</option>
              <option value="a">Solve for a</option>
              <option value="b">Solve for b</option>
              <option value="c">Solve for c</option>
            </select>
          </div>
        </div>

        {missing == "V"
          ? abc
          : missing == "a"
          ? Vbc
          : missing == "b"
          ? Vac
          : missing == "c"
          ? Vab
          : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + volumeellipsoid(missing, V, a, b, c)}
        </div>
      </form>
    </>
  );
}
