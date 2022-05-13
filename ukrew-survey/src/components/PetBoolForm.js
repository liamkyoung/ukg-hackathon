import React, { useState } from 'react'
import '../styles/PetBoolForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function PetBoolForm() {
  const [petBool, setPetBool] = useState('')
  const basicInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='form-content'>
        <div className=''>Do you have pet(s)?</div>
        <form>
        <Link to={"/pets"}><button class="button"onClick={() => setPetBool("Y")}>Yes</button></Link>
        <Link to={"/interests"}><button class="button"onClick={() => setPetBool("N")}>No</button>  </Link>
        </form>
    </div>
  )
}

export default PetBoolForm