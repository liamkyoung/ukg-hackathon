import React, { useState } from 'react'
import '../styles/PetScreen.css'
import PetButton from './PetButton'
import { addBirds, addCats, addDogs, addSnakes, addFish, addRabbits, addHamsters, addOther } from '../store/slices/userSlice.js'

// process.env.PUBLIC_URL+"/assets/

function PetScreen() {
  const url = process.env.PUBLIC_URL + "/assets/"
  return (
    <div>
        <h1>Please select your pets</h1>
        <div className='container'>
            <PetButton type={"Dogs"} image={url+'dogs.png'} handler={addDogs}/>
            <PetButton type={"Cats"} image={url+'cats.png'} handler={addCats}/>
            <PetButton type={"Birds"} image={url+'birds.png'} handler={addBirds}/>
            <PetButton type={"Snakes"} image={url+'snakes.png'} handler={addSnakes}/>
            <PetButton type={"Fish"} image={url+'fish.png'} handler={addFish} />
            <PetButton type={"Rabbits"} image={url+'rabbits.png'} handler={addRabbits}/>
            <PetButton type={"Hamsters"} image={url+'hamster.png'} handler={addHamsters}/>
            <PetButton type={"Other Pets"} image={url+'dinosaur.png'} handler={addOther}/>
        </div>
    </div>
  )
}

export default PetScreen