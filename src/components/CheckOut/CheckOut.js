import React from "react";
import { FaBook, FaClock } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const course = useLoaderData();

  const { title, price, lessons, duration } = course;

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Cehckout Success!");
  };

  return (
    <div className="py-20 w-2/3 mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <span>Course Name:</span>
            <p className="font-medium text-2xl">{title}</p>
            <p className="text-xs">
              <span className="text-xl block text-red-500">
                Price: {price}$
              </span>
              <span className="text-xl flex items-center gap-1">
                Lessons: {lessons} <FaBook className="text-blue-500 text-sm" />
              </span>
              <span className="text-lg flex items-center gap-1">
                Duration: {duration}{" "}
                <FaClock className="text-blue-500 text-sm" />{" "}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">
                First name
              </label>
              <input
                name="fname"
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm">
                Last name
              </label>
              <input
                name="lname"
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2 "
              />
            </div>

            <div className="col-span-full">
              <label for="email" className="text-sm">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2 "
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2"
              />
            </div>
          </div>
          <div className="col-span-full text-center">
            <button className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-300 border focus:outline-none border-blue-300 p-2 hover:bg-blue-500 transition duration-300 hover:text-white">
              CheckOut
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CheckOut;
