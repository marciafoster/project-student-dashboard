import React from 'react';
import StudentData from "../data/data.json";


const ClassByStartDate = () => {
  const cohortList = new Set()
    StudentData.forEach(student => cohortList.add(student.cohort.cohortCode))
    console.log(cohortList)
  
    return (
      <div>
        <h3>Choose a Class by Start Date</h3>
         <h3>"Winter2025"</h3>
         <h3>"Winter2026"</h3>
         <h3>"Summer2026"</h3>
         <h3>"Summer2025"</h3>
         <h3>"Spring2025"</h3>
         <h3>"Spring2026</h3>
         <h3>"Fall2025"</h3>
         <h3>"Fall2026</h3>







 





 
"Spring2026"
 
"Fall2026"
       
      </div>
    );
  };
  


 export default ClassByStartDate;
