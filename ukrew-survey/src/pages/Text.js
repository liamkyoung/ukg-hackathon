import React from 'react'
import TextForm from '../components/TextForm'
import TemplatePage from '../components/TemplatePage'


function Text() {
  return (
    <div>
      <TemplatePage
        title="Getting to Know U"
        content={<TextForm />} 
        left={"/refInterests"} 
        right={"/icons"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")}
      />
    </div>
  )
}
 
export default Text