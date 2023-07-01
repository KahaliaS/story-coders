import React from "react";

export default function StudentDetails(prop) {
  return (
    <div className="student-details">
      <h4>
        {prop.student.firstName} {prop.student.lastName}
      </h4>
      <p>
        <strong>Username: </strong>
        {prop.student.userName}
      </p>
      <p>
        <strong>Current Story: </strong> {prop.student.story}
      </p>
      <p>
        <strong>Member Since: </strong>
        {prop.student.createdAt}
      </p>
    </div>
  );
}
