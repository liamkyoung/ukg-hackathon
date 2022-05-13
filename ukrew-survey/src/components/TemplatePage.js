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
            <div className='content'>
                {content}
            </div>
            <div className='arrow-container'>
                <Link to={left}>
                    <ArrowNarrowLeftIcon className='arrow'/>
                </Link>
                <Link to={right}>
                    <ArrowNarrowRightIcon className='arrow'/>
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