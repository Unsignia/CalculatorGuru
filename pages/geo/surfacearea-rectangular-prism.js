import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { surfacearearectprism } from "./../../utils/geoformula.js";

export default function SurfaceAreaRectPrism() {
  const [missing, setMissing] = useState("SA");
  const [SA, setSA] = useState("");
  const [l, setl] = useState("");
  const [w, setw] = useState("");
  const [h, seth] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = surfacearearectprism(missing, A, l, w, h);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setSA("");
    setl("");
    setw("");
    seth("");
  }

  function handleInputSA(e) {
    setSA(e.target.value);
  }
  function handleInputl(e) {
    setl(e.target.value);
  }
  function handleInputw(e) {
    setw(e.target.value);
  }
  function handleInputh(e) {
    seth(e.target.value);
  }

  const lwh = (
    <>
      <Input name="l" function={handleInputl} value={l} />
      <Input name="w" function={handleInputw} value={w} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );
  const Alw = (
    <>
      <Input name="SA" function={handleInputSA} value={SA} />
      <Input name="l" function={handleInputl} value={l} />
      <Input name="w" function={handleInputw} value={w} />
    </>
  );
  const Alh = (
    <>
      <Input name="SA" function={handleInputSA} value={SA} />
      <Input name="l" function={handleInputl} value={l} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );
  const Awh = (
    <>
      <Input name="SA" function={handleInputSA} value={SA} />
      <Input name="w" function={handleInputw} value={w} />
      <Input name="h" function={handleInputh} value={h} />
    </>
  );

  return (
    <>
      <Title title="Surface Area of Rectangular Prism" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">
          Surface Area of Rectangular Prism
        </h1>
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
              <option value="l">Solve for l</option>
              <option value="w">Solve for w</option>
              <option value="h">Solve for h</option>
            </select>
          </div>
        </div>

        {missing == "SA"
          ? lwh
          : missing == "l"
          ? Awh
          : missing == "w"
          ? Alh
          : missing == "h"
          ? Alw
          : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + surfacearearectprism(missing, SA, l, w, h)}
        </div>
      </form>
    </>
  );
}
