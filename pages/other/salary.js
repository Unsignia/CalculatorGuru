import { useState } from "react";
import Image from "next/image";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";
import { salary } from "./../../utils/otherformula.js";

export default function Salary() {
  const [missing, setMissing] = useState("sal");
  const [sal, setSal] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [hourly, setHourly] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    var c = salary(missing, sal, days, hours, hourly);
  }

  function handleMissing(e) {
    setMissing(e.target.value);
    setDays();
    setHours();
    setHourly();
  }

  function handleInputDays(e) {
    setDays(e.target.value);
  }

  function handleInputHours(e) {
    setHours(e.target.value);
  }

  function handleInputHourly(e) {
    setHourly(e.target.value);
  }

  const findSal = (
    <>
      <Input
        name="Days worked in a week"
        function={handleInputDays}
        value={days}
        min="0"
        max="7"
      />
      <Input
        name="Hours worked daily"
        function={handleInputHours}
        value={hours}
        min="0"
        max="24"
      />
      <Input
        name="Hourly pay"
        function={handleInputHourly}
        value={hourly}
        min="0"
        extratext="$"
      />
    </>
  );

  return (
    <>
      <Title title="Salary" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Salary</h1>

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
              <option value="sal">Solve for yearly salary</option>
            </select>
          </div>
        </div>

        {missing == "sal" ? findSal : null}

        <button className="my-4 block bg-blue-500 hover:bg-blue-700 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {"The answer is: $" +
            salary(missing, sal, days, hours, hourly) +
            " a year"}
        </div>
      </form>
    </>
  );
}
