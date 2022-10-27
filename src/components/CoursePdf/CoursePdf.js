import React from "react";
import Pdf from "react-to-pdf";
import CourseDetails from "../CourseDetails/CourseDetails";
const CoursePdf = () => {
  const ref = React.createRef();
  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="px-4 py-2 border border-red-500 rounded hover:bg-red-500 hover:text-white transition duration-300"
          >
            Download Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div>
          <CourseDetails />
        </div>
      </div>
    </>
  );
};

export default CoursePdf;
