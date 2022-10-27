import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Instructors from "../Instructors/Instructors";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="px-12 mx-auto container py-10">
      <div className="course-container">
        <div
          className=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Categories />
          <Instructors />
        </div>
        <div
          className=""
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h1 className="text-lg mb-3">{courses.length} Courses Found</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
