import React from 'react'
import Signup from '../components/Signup'
import frameImage from '../assets/frame.png'
import LoginForm from '../templates/loginfrom'
import Signupform from '../templates/Signupform';
import {FcGoogle} from "react-icons/fc";

const template = ({title, desc1, desc2, image, Formtype,SetLoggedin })=> {
  return (
    <div className="flex justify-between w-11/12 min-h-screen max-w-[1160px] py-12 mx-auto gap-12 gap-y-0 ">
        <div className='w-11/12 max-w-[450px]' >
            <h1 className='text-richblack-5 font-semibold text-[1.85rem] laeding-[2.375rem] '>{title}</h1>

            <p className='text=[1.125rem leading-[1.525rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br></br>
                <span className='text-blue-100'>{desc2}</span>
            </p>

            {Formtype === 'signup'? (<Signupform SetLoggedin={SetLoggedin}></Signupform>):(<LoginForm  SetLoggedin={SetLoggedin} ></LoginForm>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375]'>OR</p>
                <div className='w-full  h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle></FcGoogle>
                <p> Sign Up With Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage}  alt='frameimage' width={558} height={504} loading='lazy' />
            <img  className='absolute -top-4 right-4' src={image}  alt='frameimage' width={558} height={490} loading='lazy' />
        </div>
    </div>
  )
}

export default template