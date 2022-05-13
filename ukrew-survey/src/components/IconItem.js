import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIcon } from '../store/slices/userSlice'
import '../styles/IconItem.css'

function IconItem({ type, image }) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  
  return (
    <button className={selected ? "icon-button" : "icon-button-true"} onClick={() => {
        console.log(selected)
        setSelected(!selected)
        dispatch(addIcon(selected))
    }}>
        <div>
            <div className='icon-image'>
                <img alt={type} src={image} width="80" height="80" />
            </div>
        </div>
    </button>
  )
}

export default IconItem