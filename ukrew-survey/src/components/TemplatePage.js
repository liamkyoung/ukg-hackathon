import React from 'react'
import UKGLogo from './UKGLogo'
import '../styles/TemplatePage.css'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function TemplatePage({ content, left, right, leftAction, rightAction }) {
  return (
    <div className='background'>
        <div className='main-container'>
            <div className='title'>
                <h1>Getting to Know U</h1>
            </div>
            {content}
            <div className='arrow-container'>
                    <button onClick={rightAction}>
                        <Link to={left}>
                            <ArrowNarrowLeftIcon className='arrow'/>
                        </Link>
                    </button>
                
                    <button onClick={leftAction}>
                        <Link to={right}>
                            <ArrowNarrowRightIcon className='arrow'/>
                        </Link>
                    </button>
            </div>
        </div>
        <div className='logo'>
            <UKGLogo />
        </div>
    </div>
  )
}

export default TemplatePage