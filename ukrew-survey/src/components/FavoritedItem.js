import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'
import InterestItem from './InterestItem'
import '../styles/FavoriteItem.css'

function FavoritedItem({ item }) {
  return (
    <div className='fav-item'>
        <div>
            <HeartIcon className='heart'/>
        </div>
        <div className='fav-item'>
            <InterestItem item={item} />
        </div>
    </div>
  )
}

export default FavoritedItem