import { useRef } from "react";
import Title from "./../components/Title.js";
import Header from "./../components/Header.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  function sendMessage(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q2ldmmm",
        "template_ac9ysed",
        form.current,
        "user_IqoNjqmWLPKEEmLum3JWi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const C = () => {
    return (
      <div className="w-full z-10">
        <div className="max-w-5xl mx-auto pt-96 px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gray-50 w-full drop-shadow-xl rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center text-gray-800">
              Contact me
            </p>
            <form ref={form} onSubmit={(e) => sendMessage(e)}>
              <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="leading-none text-gray-700 p-3 focus:border-blue-700 mt-4 border-0 bg-gray-200 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="leading-none text-gray-700 p-3 focus:border-blue-700 mt-4 border-0 bg-gray-200 rounded"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none text-gray-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="leading-none text-gray-700 p-3 focus:border-blue-700 mt-4 border-0 bg-gray-200 rounded"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none text-gray-600">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    className="h-40 text-base leading-none text-gray-700 p-3 focus:border-blue-700 mt-4 bg-gray-200 border-0 rounded"
                    placeholder="Enter your inquiries or suggestions here..."
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-main rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                  onClick={(e) => sendMessage(e)}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Title title="Contact" />
      <Header />
      <C />
    </>
  );
}
