
import React, { useState } from 'react';
import EnrollmentForm from './components/EnrollmentForm';
import ClassScheduleReminder from './components/ClassScheduleReminder';
import GradeCalculator from './components/GradeCalculator';
import AttendanceReport from './components/AttendanceReport';

const App = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [grades, setGrades] = useState([]);

  const handleEnrollStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleAttendance = (attendanceRecord) => {
    setAttendance([...attendance, attendanceRecord]);
  };

  const handleGrades = (studentId, grade) => {
    setGrades([...grades, { studentId, grade }]);
  };

  return (
    <div>
      <h1>Education Management System</h1>
      <EnrollmentForm onEnroll={handleEnrollStudent} />
      <ClassScheduleReminder students={students} />
      <GradeCalculator students={students} onGrade={handleGrades} />
      <AttendanceReport
attendance={attendance}
students={students}
onAddAttendance={handleAttendance}
/>

      {/* Display Grades */}
      <div>
        <h2>Grades</h2>
        <ul>
          {grades.map((entry, index) => (
            <li key={index}>
              {students[entry.studentId]?.name || "Unknown"}: {entry.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

 

