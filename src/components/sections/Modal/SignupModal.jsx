import React from 'react'
import Close from '../../icons/Close'
import Checkmark from '../../icons/Checkmark'
import { useState } from 'react'
import { useModalContext } from '../../../contexts/ModalContext';

const initialState = {
  email: "",
  password: ""
};


function SignupModal() {
  const [inputs, setInputs] = useState(initialState)
  const [checked, setChecked]=useState(false)
  const {setActiveModal}=useModalContext();

  function handleInputs(e){
  setInputs((prevInputs)=>{
    return {
      ...prevInputs,
      [e.target.name]:e.target.value
    }
  })
}

function handleSubmit(e){
  e.preventDefault();
  if(checked){
    console.log(inputs)
    setInputs(initialState)

    //close modal
    setActiveModal("")

    //submit this data to a database, etc..
  }
}


  return (
    <section className='max-w-3xl grid grid-cols-2'>
      <div className="flex flex-col justify-center items-center bg-primary-1300 gap-y-4 bg-[url('../src/assests/Noise.webp')] bg-repear p-10 text-center">
          <h4 className='text-primary-50 text-4xl/12 font-bold tracking-tight'>Lets Get You Signed Up</h4>
          <p className='text-primary-100 text-lg/8'>No charges, no fees. Get note taking in minutes!</p>
      </div>
      <div className='bg-primary-1500 flex flex-col p-10 gap-y-24 justify-between'>
         <button className='border-2 border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl p-3'
          onClick={()=>setActiveModal("")}>
            <Close 
              className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties"
              width={2}/>
         </button>
         <div className='flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight text-primary-50'>
            <label>
              Email
              <input
                placeholder='someone@gmail.com'
                value={inputs.email}
                onChange={(e)=>handleInputs(e)}
                type="email"
                name="email"
                className='bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20'
              />
            </label>
            <label>
              Password
              <input
               placeholder='**************'
                value={inputs.password}
                onChange={(e)=>handleInputs(e)}
                type="password"
                name="password"
                className='bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20'/>
            </label>
         </div>
         <div>
            <div
              onClick={()=>setChecked((currVal)=>!currVal)}
            className='m-auto mb-4 w-fit cursor-pointer gap-x-2'>
                <button
                     className={`border-primary-100 transition-properties mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border-2 ${checked && "bg-primary-100"}`}
                  >
                  <Checkmark
                  className="stroke-primary-1500"  />
                </button>
                <p className="text-primary-100 inline cursor-pointer text-sm">I agree to all terms</p>
            </div>
            <button
              className="bg-primary-500 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8"
            onClick={handleSubmit}>Get Started</button>
         </div>
      </div>    
    </section>
  )
}

export default SignupModal
