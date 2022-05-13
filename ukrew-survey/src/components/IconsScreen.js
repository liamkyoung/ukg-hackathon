import React, { useState } from 'react'
import '../styles/Icons.css'
import IconItem from './IconItem'
import { addIcon } from '../store/slices/userSlice.js'

function IconsScreen() {
  const url = process.env.PUBLIC_URL + "/assets/"
  return (
    <div>
        <h1>Please select the icon that best represents you</h1>
        <div className='ref-contain'>
            <IconItem type={"smile emoji"} image={url+'emoji1.png'}/>
            <IconItem type={"tongue out smile emoji"} image={url+'emoji2.png'}/>
            <IconItem type={"sunglasses emoji"} image={url+'emoji3.png'}/>
            <IconItem type={"crying laughing emoji"} image={url+'emoji4.png'}/>
            <IconItem type={"serious emoji"} image={url+'emoji5.png'}/>
            <IconItem type={"heart eyes emoji"} image={url+'emoji6.png'}/>
        </div>
    </div>
  )
}

export default IconsScreen