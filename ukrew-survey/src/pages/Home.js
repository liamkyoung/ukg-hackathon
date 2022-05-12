import React from 'react'
import TemplatePage from '../components/TemplatePage'

function Home() {
  return (
    <TemplatePage content={<div>Hi</div>} left={""} right={"/madlib"} leftAction={() => console.log("left")} rightAction={() => console.log("right")} />
  )
}

export default Home