import React from 'react'
import IDForm from '../components/IDForm'
import TemplatePage from '../components/TemplatePage'


function ID() {
  return (
    <div>
      <TemplatePage 
        content={<IDForm />} 
        left={"/Text"} right={"/ID"}
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")} 
      />
    </div>
  )
}

export default ID