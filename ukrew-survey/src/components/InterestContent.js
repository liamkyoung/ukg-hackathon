import React from 'react'
import InterestItem from './InterestItem'
import '../styles/InterestContent.css'

const interests = ["Video Games", "Soccer", "Movies", "Travel", "TV Shows", "Shopping", "Chess", "Photography", "Hiking", "Basketball", "Football",
    "Baseball", "Outdoor Activities", "Coding", "Piano", "Tabletop Games", "Dance", "Anime", "Music", "Other Sports"]

function InterestContent () {
  return (
    <div>
        <h1>Please select 4 topics of interest</h1>
        <div className='grid-container'>
            {interests.map((item, i) => {return <InterestItem item={item} index={i} flag='non-fav' />})}
        </div>
    </div>
  )
}

export default InterestContent