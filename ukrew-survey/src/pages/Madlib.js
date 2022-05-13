import React from 'react'
import MadlibForm from '../components/MadlibForm'
import TemplatePage from '../components/TemplatePage'
import { checkUserAlreadyExists } from '../firebase/firebase-db'
import { useSelector } from 'react-redux'

function Madlib() {
  const user = useSelector(state => state.user)
  return (
    <div>
      <TemplatePage 
        title={"Getting to Know U"}
        content={<MadlibForm />} 
        left={"/login"} right={"/schoolbool"} 
        leftAction={() => console.log("left")} 
        rightAction={() => console.log("right")}
      />
    </div>
  )
}

export default Madlib