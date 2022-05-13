import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInterests, deleteInterests, updateFavorite } from '../store/slices/userSlice'
import '../styles/InterestItem.css'

function InterestItem({ item, flag }) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  return (
    <button className={selected ? 'interest-item-true' : 'interest-item'}
            onClick={() => {
                if (flag === 'favorite') {
                  dispatch(updateFavorite(item))
                } else if (user.interests.length < 4 && !selected) {
                    dispatch(addInterests(item))
                    setSelected(!selected)
                } else if (selected) {
                    dispatch(deleteInterests(item))
                    setSelected(!selected)
                }
            }}>
        {item}
    </button>
  )
}

export default InterestItem