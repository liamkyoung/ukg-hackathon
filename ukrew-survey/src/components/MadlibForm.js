import React, { useState } from 'react'
import '../styles/MadlibForm.css'
import { addBasicInfo } from '../store/slices/userSlice.js'
import { useDispatch } from 'react-redux'

function MadlibForm() {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
      name: '',
      role: '',
      team: '',
      platform: '',
      handle: ''
  })
    
  return (
    <div className='form-content'>
        <div className=''>Tell us a little bit about yourself...</div>
        <form>
            <div className='row'>
                <span>
                    <input
                        type="text"
                        value={userInfo.name}
                        placeholder="name"
                        onChange={(event) => setUserInfo(info => ({...info, name: event.target.value}))}
                    >
                    </input>
                </span>
                <div>is a</div><br />
                <span>
                    <input
                        type="text"
                        value={userInfo.role}
                        placeholder="role"
                        onChange={(event) => setUserInfo(info => ({...info, role: event.target.value}))}
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
                            value={userInfo.team}
                            onChange={(event) => setUserInfo(info => ({...info, team: event.target.value}))}
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
                        value={userInfo.platform}
                        onChange={(event) => setUserInfo(info => ({...info, platform: event.target.value}))}
                    >
                    </input>
                </span>
                <div>@</div>
                <span className='last'>
                    <input
                        type="text"
                        value={userInfo.handle}
                        placeholder="handle"
                        onChange={(event) => setUserInfo(info => ({...info, handle: event.target.value}))}
                    >
                    </input>
                </span>
                <div>.</div>
                <button
                    type="submit"
                    onClick={(e) => {
                        console.log(userInfo)
                        dispatch(addBasicInfo(userInfo))
                        e.preventDefault()
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default MadlibForm