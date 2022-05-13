import React, { useState } from 'react'
import '../styles/PetBoolForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { addBasicInfo } from '../store/slices/userSlice.js'

function PetBoolForm() {
  const [petBool, setPetBool] = useState('')
  const basicInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='petform-content'>
        <div className=''>Do you have pet(s)?</div>
        <form>
            <button class="petButton"onClick={() => setPetBool("Y")}>Yes</button>
            <button class="petButton"onClick={() => setPetBool("N")}>No</button>  
        </form>
    </div>
  )
}

export default PetBoolForm