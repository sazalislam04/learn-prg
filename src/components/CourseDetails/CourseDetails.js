import React from "react";
import {
  FaArrowRight,
  FaBook,
  FaBookOpen,
  FaCheck,
  FaClock,
  FaGraduationCap,
  FaInfo,
  FaStar,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();

  const {
    _id,
    details,
    rating,
    duration,
    lessons,
    price,
    info,
    title,
    instructor,
    image_url,
    quiz,
  } = course;

  return (
    <div className=" py-10">
      <div className="px-6 lg:px-12 container md:flex justify-between mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col lg:w-9/12 w-full justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <div>
              <h3 className="flex items-center space-x-2 text-gray-800">
                <span className="flex-shrink-0 w-3 h-3 uppercase rounded-full bg-blue-500"></span>
                <span className="text-lg font-bold tracking-wider uppercase">
                  Course Overview
                </span>
              </h3>
              <p className="py-3 w-9/12 text-gray-700">{info}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 text-gray-800">
                <span className="flex-shrink-0 w-3 h-3 uppercase rounded-full bg-blue-500"></span>
                <span className="text-lg font-bold tracking-wider uppercase">
                  What you'll learn
                </span>
              </h3>
              {details.map((detail, index) => {
                return (
                  <ul className="flex items-center" key={index}>
                    <FaCheck className="mr-2 text-gray-600 text-sm" />{" "}
                    <li className="text-gray-700">{detail}</li>
                  </ul>
                );
              })}
            </div>
            <div className="flex flex-col space-y-3 pt-5">
              <h3 className="flex items-center space-x-2">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-blue-500"></span>
                <span className="text-xs font-bold text-gray-800 tracking-wider uppercase">
                  {instructor.designation}
                </span>
              </h3>
              <div className="pt-5">
                <div className="flex space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <img
                    src={instructor.photo}
                    alt=""
                    className="self-center flex-shrink-0 w-20 h-20 rounded md:justify-self-start"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">
                      {instructor.name}
                    </h4>
                    <div className="ml-5 md:ml-0">
                      <p className="text-sm">{instructor.in_title}</p>
                      <span className="flex gap-6 mt-1">
                        <small className="flex items-center">
                          <span className="text-blue-500 mr-1">
                            <FaBook />
                          </span>{" "}
                          {instructor.courses}
                        </small>
                        <small className="flex items-center gap-1">
                          <small>
                            <FaStar className="text-orange-500" />
                          </small>
                          {rating.number}
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-3 text-gray-700">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                  Integer velit ligula, semper sed nisl in, cursus commodo elit.
                  Pellentesque sit amet mi luctus ligula euismod lobortis
                  ultricies et nibh.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 pt-12">
              <h3 className="flex items-center space-x-2 ">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-green-600"></span>
                <span className="text-xs text-green-500 font-bold tracking-wider uppercase">
                  Reviews
                </span>
              </h3>
              <div className="container flex flex-col w-full max-w-lg divide-y rounded-md divide-gray-600">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full bg-gray-700"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Leroy Jenkins</h4>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">{rating.number}</span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                  <p>
                    Vivamus sit amet turpis leo. Praesent varius eleifend elit,
                    eu dictum lectus consequat vitae. Etiam ut dolor id justo
                    fringilla finibus.
                  </p>
                  <p>
                    Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                    eu mauris cursus venenatis. Maecenas gravida urna vitae
                    accumsan feugiat. Vestibulum commodo, ante sit urna purus
                    rutrum sem.
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  rel="noopener noreferrer"
                  to="/courses"
                  className="flex items-center text-red-500 gap-2"
                >
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Back to Course
                  </span>
                  <small>
                    <FaArrowRight />
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-20 rounded h-[550px] mt-5 lg:mt-0">
          <div className="">
            <img src={image_url} className="rounded w-full mx-auto" alt="" />
            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-red-400 text-white">
              <span className="flex items-center">
                <span className="mr-1 text-2xl text-blue-500">
                  <FaGraduationCap />
                </span>{" "}
                edu-Skillup
              </span>
            </span>
            <div className="p-5">
              <h5 className="text-2xl font-semibold text-red-500">{price}$</h5>
              <div className="mt-8">
                <p className="flex items-center gap-2 border p-2">
                  <FaBookOpen className="text-blue-500" /> <span>Lessons</span>
                  <span>{lessons}</span>
                </p>
                <p className="flex items-center mt-2 gap-2 border p-2">
                  <FaClock className="text-blue-500" /> <span>Durations</span>
                  <span>{duration}</span>
                </p>
                <p className="flex items-center gap-2 mt-2 border p-2">
                  <FaInfo className="text-blue-500" /> <span>Quizzes</span>
                  <span>{quiz}</span>
                </p>
              </div>
              <div className="mt-6">
                <Link to={`/course/${_id}`}>
                  <button className="flex gap-2 items-center bg-red-500 py-2 rounded text-white w-full ">
                    <span className="text-center w-full">
                      Get premium access
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
