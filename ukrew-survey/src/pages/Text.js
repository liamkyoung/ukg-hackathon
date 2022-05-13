import React from 'react'
import TextForm from '../components/TextForm'
import TemplatePage from '../components/TemplatePage'


function Text() {
  return (
    <div>
      <TemplatePage 
        content={<TextForm />} 
        left={"/schoolbool"} right={"/petbool"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")}
      />
    </div>
  )
}
 
export default Text