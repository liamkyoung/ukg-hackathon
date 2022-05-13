import React, { useState } from 'react'
import '../styles/IDForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { addBasicInfo } from '../store/slices/userSlice.js'

function IDForm() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='form-content'>
        <form>
            <div>
                <span>
                    <div className='namearea'>
                        Name is a position on the team_name team. Contact them via platform at address!
                    </div>
                    <div className='college'>
                        College_Name
                    </div>
                    <div className='interestarea'>
                        Name's interests are
                        <div className='interestbox1'>
                            Interest 1
                        </div>
                        <div className='interestbox2'>
                            Interest 2
                        </div>
                        <div className='interestbox3'>
                            Interest 3
                        </div>
                        <div className='interestbox4'>
                            Interest 4
                        </div>
                        <div className='interestbox5'>
                            Pet
                        </div>
                    </div>
                    <div className='infobox'>
                        More about Name:<br></br>
                        Text
                    </div>
                </span>
            </div>
        </form>
    </div>
  )
}

export default IDForm