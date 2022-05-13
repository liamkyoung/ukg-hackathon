import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIcon } from '../store/slices/userSlice'
import '../styles/IconItem.css'

function IconItem({ type, image }) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  
  return (
    <button className={!selected ? "icon-button" : "icon-button-true"} onClick={() => {
        if (!selected && user.emoji === "") {
          setSelected(!selected)
          dispatch(addIcon(type))
        } else if (selected && user.emoji === type) {
          setSelected(!selected)
          dispatch(addIcon(""))
        }
    }}>
        <div>
            <div className='icon-image'>
                <img alt={type} src={image} width="120" height="120" />
            </div>
        </div>
    </button>
  )
}

export default IconItem