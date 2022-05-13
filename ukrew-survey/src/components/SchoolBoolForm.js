import React, { useState } from 'react'
import '../styles/SchoolBoolForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { addBasicInfo } from '../store/slices/userSlice.js'

function SchoolBoolForm() {
  const [schoolBool, setSchoolBool] = useState('')
  const basicInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='form-content'>
        <div className=''>Did you attend or are you attending a college/university?</div>
        <form>
            <button class="button"onClick={() => setSchoolBool("Y")}>Yes</button>
            <button class="button"onClick={() => setSchoolBool("N")}>No</button>  
        </form>
    </div>
  )
}

export default SchoolBoolForm