import React from 'react'
import TemplatePage from '../components/TemplatePage'
import LoginScreen from '../components/LoginScreen'

function Login() {
  return (
    <TemplatePage content={<LoginScreen />} left={"/"} right={"/madlib"}/>
  )
}

export default Login