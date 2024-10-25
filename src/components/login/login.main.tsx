import React from 'react'
import Form from '../signin/SigninForm'
import Login_conversation from './Login.conversation'

const Login_main = () => {
  return (
    <div className='grid border   grid-cols-2'>
      <Form />
      <Login_conversation/>
    </div>
  )
}

export default Login_main
 