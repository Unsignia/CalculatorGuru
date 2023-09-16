import {useEffect} from "react";
import Link from "next/link";
import Title from "./../components/Title.js";
import file from "./../public/calculator_guru.json";
import {BiMath} from "react-icons/bi";
import {TbGeometry} from "react-icons/tb";
import {BsCaretRightFill} from "react-icons/bs";
import {MdOutlineTripOrigin} from "react-icons/md";

export default function Directory() {
  file.sort((a, b) => {
    if (a.subject < b.subject) return -1;
    if (a.subject > b.subject) return 1;
    return 0;
  });

  const groupedData = file.reduce((acc, item) => {
    if (!item.subject) return acc;

    if (!acc[item.subject]) {
      acc[item.subject] = [];
    }

    acc[item.subject].push(item);
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-2">
      {Object.keys(groupedData).map(subject => (
        <div
          key={subject}
          className="bg-gray-200 rounded-3xl shadow-2xl py-10 px-10 mx-10 my-10"
        >
          <div
            className={`text-2xl text-center pb-8 ${
              subject === "algebra"
                ? "text-red-700"
                : subject === "geometry"
                ? "text-green-700"
                : null
            }`}
          >
            {subject === "algebra" && <BiMath className="inline mb-1" />}
            {subject === "geometry" && <TbGeometry className="inline mb-1" />}
            {subject === "other" && <BiMath className="inline mb-1" />}
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </div>

          <div className=" ">
            {groupedData[subject].map((i, index) => (
              <p
                key={index}
                className="text-gray-600 hover:text-blue-800 hover:cursor-pointer my-2 w-fit"
              >
                <BsCaretRightFill className="inline mb-1" />
                <Link href={i.link} className="">
                  {i.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
