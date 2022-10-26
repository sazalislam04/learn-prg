import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl mt-14 mb-5 font-medium">Instructors</h1>
      {instructors.map((instructor) => (
        <Instructor key={instructor.id} instructor={instructor} />
      ))}
    </div>
  );
};

export default Instructors;
