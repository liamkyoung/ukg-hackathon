import React from 'react'
import PetBoolForm from '../components/PetBoolForm'
import TemplatePage from '../components/TemplatePage'


function PetBool() {
  return (
    <div>
      <TemplatePage 
        title="Getting to Know U"
        content={<PetBoolForm />} 
        left={"/school"} right={"/pets"}
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")} 
      />
    </div>
  )
}

export default PetBool