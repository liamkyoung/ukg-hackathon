import React from 'react'
import '../styles/RefInterestScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import InterestItem from './InterestItem'
import FavoritedItem from './FavoritedItem'

function RefInterestScreen() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <div>
        <h1>Please select your favorite interest</h1>
        <div className='ref-container'>
            {user.interests.map((item, i) => {
                if (item === user.favorite_interest) {
                    return <FavoritedItem item={item} index={i} />
                }
                return <InterestItem item={item} index={i} flag={"favorite"} />
            })}
        </div>
    </div>
  )
}

export default RefInterestScreen