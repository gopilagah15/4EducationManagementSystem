// components/EnrollmentForm.js
import React, { useState } from 'react';

const EnrollmentForm = ({ onEnroll }) => {
  const [student, setStudent] = useState({ name: '', course: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll(student);
    setStudent({ name: '', course: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Enrollment</h2>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />
      <button type="submit">Enroll</button>
    </form>
  );
};

export default EnrollmentForm;
