import Title from "./../../components/Title.js";
import Header from "./../../components/Header.js";

export default function AngleComputation() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("s");
  }

  return (
    <>
      <Title title="Angle Computation" />
      <Header />

      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <h1 className="py-8 text-center text-lg">Angle Computation</h1>
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
            >
              <option>Sine</option>
              <option>Cosine</option>
              <option>Tangent</option>
              <option>Cosecant</option>
              <option>Secant</option>
              <option>Cotangent</option>
            </select>
          </div>
          <label htmlFor="toogleA" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toogleA"
                type="checkbox"
                className="hidden toggle-input-purple-800"
              />
              <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -top-1/4 -left-1/4 transition duration-500 ease-in-out">
                {/*radians or degrees*/}
              </div>
            </div>
          </label>

          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="toggleB" className="sr-only" />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">Toggle Me!o</div>
          </label>
        </div>

        <input
          id="input"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your data..."
        />
        <button className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
          Calculate
        </button>
      </form>
      <div>The answer is:</div>
    </>
  );
}
