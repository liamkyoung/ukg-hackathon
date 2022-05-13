import React from 'react'
import { createUser } from '../firebase/firebase-db'
import { useSelector } from 'react-redux'

function SubmitResults() {
    const user = useSelector(state => state.user)
    const { basicInformation } = user
    const { college } = user
    const { pets } = user

    let petArr = []

    for (const property in pets) {
        if (pets.petTypes[property])
            petArr.push(property)
    }

    console.log("Basic Info", basicInformation)
    console.log("College", college)
    console.log("Pets", petArr)

    // email, name, job, team, platform, address, university, pets, favorite, other, message, emoji
    console.log("Create User",
        createUser(
            basicInformation.name, 
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
        ))
    return <div>XD</div>
}

export default SubmitResults