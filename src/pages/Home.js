import React, { useEffect, useState } from "react";

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
            <p key={student._id}>
              {student.firstName} {student.lastName}
            </p>
          ))}
      </div>
    </div>
  );
}
