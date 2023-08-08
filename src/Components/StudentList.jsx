
import StudentData from "../data/data.json"; 

const StudentList = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {StudentData.map((student) => (
          <li key={student.id}>
            <h2>{student.names.preferredName} {student.names.surname}</h2>
            <p>Username: {student.username}</p>
            <p>Date of Birth: {student.dob}</p>
            <img src={student.profilePhoto} alt={`Profile of ${student.names.preferredName}`} />
            <p>Codewars Total: {student.codewars.current.total}</p>
            <p>Cohort: {student.cohort.cohortCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
