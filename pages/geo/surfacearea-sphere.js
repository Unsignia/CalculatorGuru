import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { surfaceareasphere } from "./../../utils/geoformula.js";

export default function SurfaceAreaSphere() {
  const [missing, setMissing] = useState("SA");
  const [SA, setSA] = useState("");
  const [r, setr] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = surfaceareasphere(missing, SA, r);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setSA("");
    setr("");
  }

  function handleInputSA(e) {
    setSA(e.target.value);
  }
  function handleInputr(e) {
    setr(e.target.value);
  }

  const r2 = (
    <>
      <Input name="r" function={handleInputr} value={r} />
    </>
  );
  const SA2 = (
    <>
      <Input name="SA" function={handleInputSA} value={SA} />
    </>
  );

  return (
    <>
      <Title title="Surface Area of Sphere" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Surface Area of Sphere</h1>
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
              <option value="SA">Solve for SA</option>
              <option value="r">Solve for r</option>
            </select>
          </div>
        </div>

        {missing == "SA" ? r2 : missing == "r" ? SA2 : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + surfaceareasphere(missing, SA, r)}
        </div>
      </form>
    </>
  );
}
