import React, { useState } from 'react'
import '../styles/TextForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { addBasicInfo } from '../store/slices/userSlice.js'

function UniversityForm() {
  const [bodyText, setBodyText] = useState('')
  const basicInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='textform-content'>
        <div className=''>Please write a brief message telling us more about you</div>
        <form>
            <div>
                <span>
                    <textarea
                        type="text"
                        value={bodyText}
                        placeholder="I have a dog named..."
                        onChange={(event) => setBodyText(event.target.value)}
                    >
                    </textarea>
                </span>
            </div>
        </form>
    </div>
  )
}

export default UniversityForm