// components/GradeCalculator.js
import React, { useState } from 'react';

const GradeCalculator = ({ students, onGrade }) => {
  const [grade, setGrade] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleCalculateGrade = () => {
    onGrade(studentId, grade);
    setGrade('');
    setStudentId('');
  };

  return (
    <div>
      <h2>Grade Calculator</h2>
      <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        <option value="">Select Student</option>
        {students.map((student, index) => (
          <option key={index} value={index}>{student.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button onClick={handleCalculateGrade}>Calculate Grade</button>
    </div>
  );
};

export default GradeCalculator; 