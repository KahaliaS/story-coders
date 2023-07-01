import React, { useEffect, useState } from "react";

//components
import StudentDetails from "../components/StudentDetails";
import StudentForm from "../components/StudentForm";

export default function Home() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("/api/students");
      const json = await response.json();

      if (response.ok) {
        setStudents(json);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="home">
      <div className="students">
        {students &&
          students.map((student) => (
            <StudentDetails key={student._id} student={student} /> 
          ))}
      </div>
      <StudentForm />
    </div>
  );
}
