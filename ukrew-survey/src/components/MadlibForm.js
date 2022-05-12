import React, { useState } from 'react'
import '../styles/MadlibForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { addBasicInfo } from '../store/slices/userSlice.js'

function MadlibForm() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [team, setTeam] = useState('')
  const [platform, setPlatform] = useState('')
  const [handle, setHandle] = useState('')
  const basicInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
      
  return (
    <div className='form-content'>
        <div className=''>Tell us a little bit about yourself...</div>
        <form>
            <div className='row'>
                <span>
                    <input
                        type="text"
                        value={name}
                        placeholder="name"
                        onChange={(event) => setName(event.target.value)}
                    >
                    </input>
                </span>
                <div>is a</div><br />
                <span>
                    <input
                        type="text"
                        value={role}
                        placeholder="role"
                        onChange={(event) => setRole(event.target.value)}
                    >
                    </input>
                </span>
            </div>
            <div className='row'>
                    <div>on the</div>
                    <span>
                        <input
                            type="text"
                            placeholder="team name"
                            value={team}
                            onChange={(event) => setTeam(event.target.value)}
                        >
                        </input>
                    </span>
                    <div>team.</div>
                </div>
            <div className='row'>
                <div>Contact them via</div>
                <span>
                    <input
                        type="text"
                        placeholder="platform"
                        value={platform}
                        onChange={(event) => setPlatform(event.target.value)}
                    >
                    </input>
                </span>
                <div>@</div>
                <span className='last'>
                    <input
                        type="text"
                        value={handle}
                        placeholder="handle"
                        onChange={(event) => setHandle(event.target.value)}
                    >
                    </input>
                </span>
                <div>.</div>
            </div>
        </form>
    </div>
  )
}

export default MadlibForm