import React from 'react'
import MadlibForm from '../components/MadlibForm'
import TemplatePage from '../components/TemplatePage'


function Madlib() {
  return (
    <div>
      <TemplatePage 
        content={<MadlibForm />} 
        left={"/"} right={"/login"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")} 
      />
    </div>
  )
}

export default Madlib