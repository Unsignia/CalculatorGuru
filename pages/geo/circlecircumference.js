import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import ToggleButton from "./../../components/ToggleButton.js";
import { circlecircumference } from "./../../utils/geoformula.js";

export default function CircumferenceCircle() {
  const [missing, setMissing] = useState("C");
  const [C, setC] = useState("");
  const [rd, setrd] = useState("");
  const [angle, setangle] = useState("");
  const [selected, setSelected] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var c = circlecircumference(missing, C, rd, selected);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setC("");
    setrd("");
  }

  function handleInputC(e) {
    setC(e.target.value);
  }
  function handleInputrd(e) {
    setrd(e.target.value);
  }

  const C2 = (
    <>
      <Input name="C" function={handleInputC} value={C} />
    </>
  );
  const rd2 = (
    <>
      <Input name={!selected ? "r" : "d"} function={handleInputrd} value={rd} />
    </>
  );

  return (
    <>
      <Title title="Circumference of a Circle" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Circumference of a Circle</h1>
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
              <option value="C">Solve for C</option>
              <option value="rd">Solve for {rd ? "r" : "d"}</option>
            </select>
          </div>
          <div className="w-1/4 px-4">
            <label
              htmlFor="names"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Radius/Diameter
            </label>
            <ToggleButton
              left="r"
              right="d"
              degreeSelected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>

        {missing == "C" ? rd2 : missing == "rd" ? C2 : null}

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {" " + circlecircumference(missing, C, rd, selected)}
        </div>
      </form>
    </>
  );
}
