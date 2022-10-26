import React from "react";
import { Link } from "react-router-dom";

const Instructor = ({ instructor }) => {
  const { id, instructor_name } = instructor;
  return (
    <div className="p-3 border mb-2 rounded">
      <Link to={`/instructor/${id}`}>{instructor_name}</Link>
    </div>
  );
};

export default Instructor;
