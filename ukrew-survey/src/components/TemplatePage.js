import React from 'react'
import UKGLogo from './UKGLogo'
import '../styles/TemplatePage.css'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function TemplatePage({ title, content, left, right, leftAction, rightAction }) {
  return (
    <div className='background'>
        <div className='main-container'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            {content}
            <div className='arrow-container'>
                    <Link to={left}>
                        <button onClick={rightAction}>
                            <ArrowNarrowLeftIcon className='arrow'/>
                        </button>
                    </Link>
                    <Link to={right}>
                        <button onClick={leftAction}>
                            <ArrowNarrowRightIcon className='arrow'/>
                        </button>
                    </Link>
            </div>
        </div>
        <div className='logo'>
            <UKGLogo />
        </div>
    </div>
  )
}

export default TemplatePage