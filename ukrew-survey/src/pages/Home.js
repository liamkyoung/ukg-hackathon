import React from 'react'
import UKGLogo from '../components/UKGLogo'
import '../styles/HomePage.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-background'>
        <div className='main-container-home'>
            <div className='title-home'>
                <h1>UKrew Mingle</h1>
            </div>
            <div className='phrase'>
                <h2>Where the U Meets the Krew</h2>
            </div>
            <Link to="/madlib">
            <button class="begin"> Begin! </button>
            </Link>
            <div>
        <img class="team" alt='team vector image' src={process.env.PUBLIC_URL+"/assets/team.png"} />
    </div>
        </div>
        <div className='logo'>
            <UKGLogo />
        </div>
    </div>
  )
}

export default Home