import React from 'react'
import Template from '../templates/template'
import Signupimg  from '../assets/signup.png';

function Signup({SetLoggedin}) {
  return (
    <Template
     title="welcomde Back"
    //  desc1="Build skills for today, tommorow, and beyound"
    //  desc2="Education to future-proof your career"
     image={Signupimg}
     Formtype="signup"
     SetLoggedin={SetLoggedin}
     ></Template>
  )
}

export default Signup