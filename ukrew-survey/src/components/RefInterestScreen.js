import React from 'react'
import '../styles/RefInterestScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import InterestItem from './InterestItem'

function RefInterestScreen() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <div>
        <h1>Please your favorite interest</h1>
        <div className='ref-container'>
            {user.interests.map((item, i) => {return <InterestItem item={item} index={i} flag={"favorite"}/>})}
        </div>
    </div>
  )
}

export default RefInterestScreen