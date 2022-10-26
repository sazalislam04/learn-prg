import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, course_name } = category;
  return (
    <div className="p-3 border mb-2 rounded">
      <Link to={`/category/${id}`}>{course_name}</Link>
    </div>
  );
};

export default Category;
