import React from 'react'


const edudata = [
    {
      class: "Matriculation",
      school: "School from Karachi public",
      grade: "Completed Matriculation with a focus on foundational subjects, developing a strong base in sciences and mathematics.",
      year: "Completed in 2015", 
      icon : "graduation-cap-solid.svg"
    },
    {
     
      class: "Intermediate", 
      school: "BSSE in Computer Science",
      grade: " Pursued Intermediate studies with a major in Computer science, building advanced knowledge in algorithms, data structures, and software development",
      year: "Completed in 2017",  
      icon : "graduation-cap-solid.svg"
    },
    {
      class: "BSSE in Computer Science",
      school: "University of Virtual",
      grade: "Currently pursuing a Bachelor’s in Software Engineering, focusing on core computer science principles, including programming, algorithms, and artificial intelligence.",
      year: "Completed in 2015",  
      icon : "laptop.svg"
    }
  ];
function Education() {
  return (
    <>
<div className="education p-6 bg-gray-100" id='Qualification'>
  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-left mt-10 font-poppins text-center uppercase">
    Education & Qualification
  </h1>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {edudata.map((element, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-start">
        <img src={element.icon} alt="Matriculation" className="w-12 h-12 mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{element.class}</h2>
          <p className="text-sm text-gray-500 mb-2">{element.school}</p>
          <p className="text-gray-600 mb-4">{element.grade}</p>
          <p className="text-gray-600 mb-4">{element.year}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Education
