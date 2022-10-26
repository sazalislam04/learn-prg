import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();

  const { details, rating, duration, price, title, instructor, image_url } =
    course;

  return (
    <div className="bg-red-500 px-12">
      <h2 className="text-2xl px-12 py-6">What you'll learn</h2>
      <div className="flex flex-col-reverse lg:flex-row course-detail-container mx-auto">
        <div className="flex flex-col px-6 rounded-sm sm:p-8 ">
          <div className="flex space-x-2 sm:space-x-4">
            <div className="space-y-2">
              <p className="text-lg font-medium leading-snug">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto ">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img
              src="https://source.unsplash.com/640x480/"
              alt=""
              className="rounded-lg shadow-lg  aspect-video sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
