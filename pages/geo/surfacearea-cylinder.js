import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { surfaceareacylinder } from "./../../utils/geoformula.js";

export default function SurfaceAreaCylinder() {
  const [missing, setMissing] = useState("SA");
  const [SA, setSA] = useState("");
  const [r, setr] = useState("");
  const [h, seth] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = surfaceareacylinder(missing, SA, r, h);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setSA("");
    setr("");
    seth("");
  }

  function handleInputSA(e) {
    setSA(e.target.value);
  }
  function handleInputr(e) {
    setr(e.target.value);
  }
  function handleInputh(e) {
    seth(e.target.value);
  }

  const rh = (
    <>
      <Input name="r" function={handleInputr} value={r} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );
  const SAr = (
    <>
      <Input name="SA" function={handleInputSA} value={SA} />
      <Input name="r" function={handleInputr} value={r} />
    </>
  );
  const SAh = (
    <>
      <Input name="SA" function={handleInputSA} value={SA} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );

  return (
    <>
      <Title title="Surface Area of Cylinder" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Surface Area of Cylinder</h1>
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
              <option value="h">Solve for h</option>
            </select>
          </div>
        </div>

        {missing == "SA"
          ? rh
          : missing == "r"
          ? SAh
          : missing == "h"
          ? SAr
          : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + surfaceareacylinder(missing, SA, r, h)}
        </div>
      </form>
    </>
  );
}
