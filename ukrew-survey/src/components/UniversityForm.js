import React, { useState } from 'react'
import '../styles/UniversityForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { addBasicInfo } from '../store/slices/userSlice.js'

function UniversityForm() {
  const [school, setSchool] = useState('')
  const basicInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='form-content'>
        <div className=''>Please type the full name of your college or university</div>
        <form>
            <div className='row'>
                <span>
                    <input
                        type="text"
                        value={school}
                        placeholder="Name of University"
                        onChange={(event) => setSchool(event.target.value)}
                    >
                    </input>
                </span>
            </div>
        </form>
    </div>
  )
}

export default UniversityForm