import React from 'react'
import SchoolBoolForm from '../components/SchoolBoolForm'
import TemplatePage from '../components/TemplatePage'

function SchoolBool() {
  return (
    <div>
      <TemplatePage 
        title="Getting to Know U"
        content={<SchoolBoolForm />} 
        left={"/madlib"} right={"/school"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")} 
      />
    </div>
  )
}

export default SchoolBool