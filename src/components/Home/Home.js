import React from "react";
import { Link } from "react-router-dom";
import student from "../../assets/student.png";

const Home = () => {
  return (
    <div className="banner p-8 lg:p-0">
      <div className="container flex flex-col  justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div
          className="flex flex-col lg:px-12 justify-center text-center rounded-sm w-full lg:w-1/2 lg:text-left"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1 className="text-4xl text-white font-bold leading-9 sm:text-6xl">
            Learn New Skills Online With Top
            <span className="text-blue-500"> Educators</span>
          </h1>
          <p className="mt-6 mb-8 text-gray-200 text-lg sm:mb-12">
            Take High-Quality Online Courses from the Best Online Instructors &
            Develop Your Skills
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="px-8 py-3 text-lg font-semibold rounded bg-blue-500 text-gray-100"
            >
              Join For Free
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/courses"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 text-gray-100 hover:bg-blue-500 transition duration-300 hover:border-blue-500"
            >
              Find Course
            </Link>
          </div>
        </div>
        <div
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 scale-110 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img src={student} alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Home;
