import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Course from "../Courses/Course";
import Instructors from "./Instructors";

const InstructorCourse = () => {
  const courses = useLoaderData();
  return (
    <div className="px-12 mx-auto container py-10">
      <div className="course-container">
        <div className="">
          <Categories />
          <Instructors />
        </div>
        <div className="">
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

export default InstructorCourse;
