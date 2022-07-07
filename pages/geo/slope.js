import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { slope } from "./../../utils/geoformula.js";

export default function Slope() {
  const [missing, setMissing] = useState("m");
  const [m, setm] = useState("");
  const [x1, setx1] = useState("");
  const [x2, setx2] = useState("");
  const [y1, sety1] = useState("");
  const [y2, sety2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = slope(missing, m, x1, x2, y1, y2);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setm("");
    setx1("");
    setx2("");
    sety1("");
    sety2("");
  }

  function handleInputm(e) {
    setm(e.target.value);
  }
  function handleInputx1(e) {
    setx1(e.target.value);
  }
  function handleInputx2(e) {
    setx2(e.target.value);
  }
  function handleInputy1(e) {
    sety1(e.target.value);
  }
  function handleInputy2(e) {
    sety2(e.target.value);
  }

  const x12y12 = (
    <>
      <Input name="x1" function={handleInputx1} value={x1} />
      <Input name="y1" function={handleInputy1} value={y1} />
      <Input name="x2" function={handleInputx2} value={x2} />
      <Input name="y2" function={handleInputy2} value={y2} />
    </>
  );

  return (
    <>
      <Title title="Slope" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Slope</h1>
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
              <option value="m">Solve for m</option>
              <option value="x1">Solve for x&#8321;</option>
              <option value="x2">Solve for x&#8322;</option>
              <option value="y1">Solve for y&#8321;</option>
              <option value="y2">Solve for y&#8322;</option>
            </select>
          </div>
        </div>

        {missing == "m" ? x12y12 : missing == "d" ? x12y12 : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + slope(missing, m, x1, x2, y1, y2)}
        </div>
      </form>
    </>
  );
}
