import React from "react";
import { FaBook, FaClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {
    _id,
    rating,
    lessons,
    price,
    duration,
    title,
    instructor,
    image_url,
  } = course;

  return (
    <div className="flex flex-col w-full p-6 lg:h-[500px] space-y-6 overflow-hidden rounded-lg custom-shadow bg-gray-100 lg:relative">
      <div className="flex space-x-4">
        <img
          src={instructor?.photo}
          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          alt=""
        />
        <div className="flex flex-col space-y-1">
          <Link
            rel="noopener noreferrer"
            to=""
            className="text-sm font-semibold"
          >
            {instructor?.name}
          </Link>
          <span className="text-xs ">{instructor?.designation}</span>
        </div>
      </div>
      <div>
        <img
          src={image_url}
          alt=""
          className="object-cover shadow-md w-full mb-4 h-60 bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm flex items-center justify-between text-gray-600">
          <span className="flex items-center">
            <FaBook /> <span className="ml-1">{lessons} Lessons</span>
          </span>
          <span className="flex items-center">
            <FaClock /> <span className="ml-1">{duration}</span>
          </span>
          <span className="flex items-center">
            <FaStar className="text-orange-500 mr-1" />
            <span>{rating.number}</span>
          </span>
        </p>
      </div>
      <div className="flex justify-between flex-wrap items-center lg:absolute lg:bottom-5 w-full right-0 px-2 lg:px-6">
        <div className="text-xl">Price: {price}$</div>
        <div className="text-sm text-gray-400">
          <Link to={`/course/${_id}`}>
            <button className="px-4 py-2 mt-2 md:mt-0 bg-blue-500 text-white rounded">
              Show Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
