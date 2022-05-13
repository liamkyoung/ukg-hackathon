import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkUserAlreadyExists } from '../firebase/firebase-db'
import { updateEmail } from '../store/slices/userSlice'
import { Navigate } from 'react-router-dom'


function LoginScreen() {
  const [email, setEmail] = useState('')
  const [emailInDB, setInDB] = useState(false)
  const [buttonPress, setPressed] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const link = '/rankings/' + user.email

  const inDatabase = async () => {
    checkUserAlreadyExists(document.getElementById("email-input").value)
      .then((resp) => {
        console.log(resp)
        setInDB(resp)
        setPressed(true)
      })
      .catch((err) => {
        setInDB(false)
      })
    
    
  }

  if (emailInDB) {
    return <Navigate to={link} />
  } else if (!emailInDB && buttonPress) {
    return <Navigate to={'/madlib'} />
  }
    
  return (
    <div className='form-content'>
      <div className=''>What is your UKG Email?</div>
      <form>
        <input
          type="text"
          value={email}
          placeholder="email@ukg.com"
          id='email-input'
          onChange={(event) => {
            setEmail(event.target.value)
            dispatch(updateEmail(event.target.value))
          }}
        >
        </input>
        <button 
          className='submit-btn'
          onClick={(e) => {
            inDatabase()
            e.preventDefault()
          }}
        >
          Submit
        </button>
      </form>
  </div>
  )
}

export default LoginScreen