import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Instructors from "../Instructors/Instructors";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="px-6 lg:px-12 mx-auto container py-10">
      <div className="course-container">
        <div className="" data-aos="fade-right" data-aos-duration="500">
          <Categories />
          <Instructors />
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
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
