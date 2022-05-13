import React from 'react'
import TemplatePage from '../components/TemplatePage'
import LoginScreen from '../components/LoginScreen'
import { useSelector } from 'react-redux'

function Login() {
  return (
    <TemplatePage
      title={"Getting to Know U"}
      content={<LoginScreen />} 
      left={"/"} 
      right={"/madlib"}
    />
  )
}

export default Login