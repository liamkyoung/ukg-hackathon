import React from 'react'
import UniversityForm from '../components/UniversityForm'
import TemplatePage from '../components/TemplatePage'


function University() {
  return (
    <div>
      <TemplatePage 
        title="Getting to Know U"
        content={<UniversityForm />} 
        left={"/schoolbool"} right={"/petbool"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")} 
      />
    </div>
  )
}

export default University