import React from 'react'
import Template from '../templates/template'
import Logo from '../assets/login.png'

const  Login = ({SetLoggedin})=> {
  return (
     <Template
     title="welcomde Back"
     desc1="Build skills for today, tommorow, and beyound"
     desc2="Education to future-proof your career"
     image={Logo}
     Formtype="login"
     SetLoggedin={SetLoggedin}
     ></Template>
  )
}

export default Login