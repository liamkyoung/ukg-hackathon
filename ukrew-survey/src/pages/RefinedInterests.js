import React from 'react'
import TemplatePage from '../components/TemplatePage'
import RefInterestScreen from '../components/RefInterestScreen'
import '../styles/RefinedInterests.css'

function RefinedInterests() {
  return (
    <TemplatePage
      title="Getting to Know U"
      content={<RefInterestScreen />}
      left={"/interests"}
      right={"/text"}
      leftAction={() => console.log("left")}
      rightAction={() => console.log("right")}
    />
  )
}

export default RefinedInterests