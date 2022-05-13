import React, { useState } from 'react'
import '../styles/Icons.css'
import IconItem from './IconItem'
import { addIcon } from '../store/slices/userSlice.js'
import { createUser } from '../firebase/firebase-db'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function IconsScreen() {
  const url = process.env.PUBLIC_URL + "/assets/"
  const user = useSelector(state => state.user)
  const rankingUrl = '/rankings/' + user.email
  const [button, setButton] = useState(false)

  const { basicInformation } = user
  const { college } = user
  const { pets } = user

  let petArr = []

  for (const property in pets.petTypes) {
      if (pets.petTypes[property])
          petArr.push(property)
  }

  console.log("Basic Info", basicInformation)
  console.log("College", college)
  console.log("Pets", petArr)
  console.log("Email", user.email)


  if (button)
    return <Navigate to={rankingUrl} />

  return (
    <div>
        <h1>Please select the icon that best represents you</h1>
        <button className='submit-btn' onClick={() => {
          createUser(
            user.email,
            basicInformation.name, 
            basicInformation.role,
            basicInformation.team,
            basicInformation.platform,
            basicInformation.handle,
            college.name,
            petArr,
            user.favorite_interest,
            user.interests,
            user.custom_message,
            user.emoji
          )

          setButton(true)
        }}>
          Submit Results!</button>
        
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