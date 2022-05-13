import React, { useState } from 'react'
import '../styles/SchoolBoolForm.css'
import { Link } from 'react-router-dom'

function SchoolBoolForm() {
  const [schoolBool, setSchoolBool] = useState('')
      
  return (
    <div className='form-content'>
        <div className=''>Did you attend or are you attending a college/university?</div>
        <form>
            <Link to={"/school"}><button class="button"onClick={() => setSchoolBool("Y")}>Yes</button></Link>
            <Link to={"/petbool"}><button class="button"onClick={() => setSchoolBool("N")}>No</button>  </Link>
        </form>
    </div>
  )
}

export default SchoolBoolForm