import React from 'react'
import SchoolBoolForm from '../components/SchoolBoolForm'
import TemplatePage from '../components/TemplatePage'


function SchoolBool() {
  return (
    <div>
      <TemplatePage 
        content={<SchoolBoolForm />} 
        left={"/madlib"} right={"/school"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")} 
      />
    </div>
  )
}

export default SchoolBool