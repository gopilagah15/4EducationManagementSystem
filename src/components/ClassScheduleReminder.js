// components/ClassScheduleReminder.js
import React from 'react';

const ClassScheduleReminder = ({ students }) => {
  return (
    <div>
      <h2>Class Schedule Reminder</h2>
      {students.map((student, index) => (
        <p key={index}>{student.name} is enrolled in {student.course}.</p>
      ))}
    </div>
  );
};

export default ClassScheduleReminder;
