import React from 'react'
import TemplatePage from '../components/TemplatePage'
import IconsScreen from '../components/IconsScreen'

import '../styles/Icons.css'

function Icons() {

  return (
    <TemplatePage
      title="Getting to Know U"
      content={<IconsScreen />}
      left={"/text"}
      right={"/"}
      leftAction={() => console.log("left")}
      rightAction={() => console.log("right")}
    />
  )
}

export default Icons