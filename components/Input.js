export default function Input(props) {
  return (
    <>
      <div className="my-4">
        <label
          htmlFor={"input-" + props.name}
          className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {props.name} =
        </label>
        <input
          id={"input-" + props.name}
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your data..."
          onChange={props.function}
          value={props.value}
        />
      </div>
    </>
  );
}
