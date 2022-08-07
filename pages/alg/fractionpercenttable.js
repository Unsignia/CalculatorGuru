import { useState } from "react";
import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";
import Input from "./../../components/Input.js";

export default function FractionPercentTable() {
  const [total, setTotal] = useState("");
  const [showTable, setShowTable] = useState(false);

  function makeTable() {
    let arr = [];

    for (var i = 0; i <= total; i++) {
      arr.push(i);
    }

    return (
      <table>
        <tr>
          <th>Fraction</th>
          <th>Percentage</th>
        </tr>
        {arr.map((i) => {
          return (
            <tr key={i}>
              <td>
                {i}/{total}
              </td>
              <td>{((i / total) * 100).toFixed(2)}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowTable(true);
  }

  function handleInputTotal(e) {
    setTotal(e.target.value);
  }

  return (
    <>
      <Title title="Area of Circle" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Fraction Percent Table</h1>
        <div className="flex">
          <div className="w-3/4">
            <label
              htmlFor="names"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Enter the total amount{" "}
            </label>
            <input
              id="names"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputTotal}
              value={total}
            />
          </div>
        </div>

        <button className="my-4 block bg-blue-500 rounded-full font-bold text-white px-4 py-3 mr-6">
          Calculate
        </button>

        <div className="my-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          The answer is:
          {showTable ? makeTable() : null}
        </div>
      </form>
    </>
  );
}
