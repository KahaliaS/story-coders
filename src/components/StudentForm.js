import React, { useState } from "react";

export default function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const student = { firstName, lastName, userName };
    const response = await fetch("/api/students/", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.err.message);
    }
    if (response.ok) {
      setFirstName("");
      setLastName("");
      setUserName("");
      setError(null);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create A New Account</h3>
      <label>First Name </label>
      <input
        type="text"
        onChange={(event) => setFirstName(event.target.value)}
        value={firstName}
      ></input>

      <label>Last Name </label>
      <input
        type="text"
        onChange={(event) => setLastName(event.target.value)}
        value={lastName}
      ></input>

      <label>User Name </label>
      <input
        type="text"
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
      ></input>

      <button>Create Account</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
