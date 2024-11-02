// components/AttendanceReport.js
import React, { useState } from 'react';

const AttendanceReport = ({ students, attendance, onAddAttendance }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [present, setPresent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      const attendanceRecord = {
        studentId: selectedStudent,
        date: new Date().toLocaleDateString(),
        status: present ? 'Present' : 'Absent',
      };
      onAddAttendance(attendanceRecord);
      setSelectedStudent('');
      setPresent(false);
    }
  };

  return (
    <div>
      <h2>Attendance Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Student:
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Choose a student</option>
            {students.map((student, index) => (
              <option key={index} value={index}>
                {student.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Present:
          <input
            type="checkbox"
            checked={present}
            onChange={(e) => setPresent(e.target.checked)}
          />
        </label>
        <button type="submit">Add Attendance</button>
      </form>

      <h3>Attendance Records</h3>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {students[record.studentId]?.name} - {record.date}: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceReport;
