import React, { useState } from "react";
import StudentData from "../data/data.json";

const StudentList = () => {
  const [expandedStudentId, setExpandedStudentId] = useState(null);

  const toggleExpansion = (studentId) => {
    if (expandedStudentId === studentId) {
      setExpandedStudentId(null);
    } else {
      setExpandedStudentId(studentId);
    }
  };

  const renderCertificationIcon = (certification) => {
    if (certification) {
      return <span style={{ color: "green" }}>✅</span>; // Green checkmark
    } else {
      return <span style={{ color: "red" }}>❌</span>; // Red "x"
    }
  };

  const isOnTrack = (student) => {
    return (
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview &&
      student.codewars.current.total > 600
    );
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {StudentData.map((student) => (
          <li key={student.id}>
            <h2>
              {student.names.preferredName} {student.names.surname}
              {isOnTrack(student) ? (
                <span style={{ color: "green", marginLeft: "0.5rem" }}>On Track</span>
              ) : (
                <span style={{ color: "red", marginLeft: "0.5rem" }}>Off Track</span>
              )}
            </h2>
            <p>Username: {student.username}</p>
            <p>Date of Birth: {student.dob}</p>
            <img
              src={student.profilePhoto}
              alt={`Profile of ${student.names.preferredName}`}
            />
            {expandedStudentId === student.id ? (
              <>
                <p>Codewars Total</p>
                <p>Current Total: {student.codewars.current.total}</p>
                <p>Last Week: {student.codewars.current.lastWeek}</p>
                <p>Goal: {student.codewars.goal.total}</p>
                <p>Percent of Goal Achieved:</p>
                <br></br>
                <p>Scores</p>
                <p>Assignments: {student.cohort.scores.assignments}%</p>
                <p>Projects: {student.cohort.scores.projects}%</p>
                <p>Assessments: {student.cohort.scores.assessments}%</p>
                <p>Certifications</p>
                <p>Resume: {renderCertificationIcon(student.certifications.resume)}</p>
                <p>LinkedIn: {renderCertificationIcon(student.certifications.linkedin)}</p>
                <p>GitHub: {renderCertificationIcon(student.certifications.github)}</p>
                <p>Mock Interview: {renderCertificationIcon(student.certifications.mockInterview)}</p>
                <button onClick={() => toggleExpansion(student.id)}>
                  Show Less
                </button>
              </>
            ) : (
              <button onClick={() => toggleExpansion(student.id)}>
                Show More
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
