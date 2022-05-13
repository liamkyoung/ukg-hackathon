import React from 'react'
import InterestContent from '../components/InterestContent'
import TemplatePage from '../components/TemplatePage'

function Interests() {
  return (
    <TemplatePage
      title="Getting to Know U"
      content={<InterestContent />}
      left={"/pets"} right={"/refInterests"}
      leftAction={() => console.log("left")} 
      rightAction={() => console.log("right")} 
    />
  )
}

export default Interests