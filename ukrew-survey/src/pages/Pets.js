import React from 'react'
import PetScreen from '../components/PetScreen'
import TemplatePage from '../components/TemplatePage'

function Pets() {
  return (
    <TemplatePage 
        title="Getting to Know U"
        content={<PetScreen />}
        left={"/"}
        right={"/"}
        leftAction={() => console.log("left")}
        rightAction={() => console.log("right")}
    />
  )
}

export default Pets