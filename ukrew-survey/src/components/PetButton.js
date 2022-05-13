import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../styles/PetButton.css'

function PetButton({ type, image, handler }) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  
  return (
    <button className={!selected ? "pet-button" : "pet-button-true"} onClick={() => {
        console.log(selected)
        setSelected(!selected)
        dispatch(handler(selected))
    }}>
        <div>
            <div className='pet-image'>
                <img alt={type} src={image} />
            </div>
            <div className='pet-name'>
                {type}
            </div>
        </div>
    </button>
  )
}

export default PetButton