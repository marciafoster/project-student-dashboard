import React from 'react';
import StudentData from "../data/data.json";


const ClassByStartDate = () => {
  const cohortList = new Set()
    StudentData.forEach(student => cohortList.add(student.cohort.cohortCode))
    console.log(cohortList)
  
    return (
      <div>
        <h3>Choose a Class by Start Date</h3>
         <h3>Winter 2025</h3>
         <h3>Winte 2026</h3>
         <h3>Summer 2026</h3>
         <h3>Summer 2025</h3>
         <h3>Spring 2025</h3>
         <h3>Spring 2026</h3>
         <h3>Fall 2026</h3>
         <h3>Fall 2026</h3>







 





 

       
      </div>
    );
  };
  


 export default ClassByStartDate;
