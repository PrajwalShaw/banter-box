import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

     const [inputs,setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
     })
     
     //thi is how we use this custom hook
      const {loading,signup} = useSignup();

     const handleCheckboxChange = (gender)=>{
        setInputs({...inputs,gender});
     }

     const handleSubmit = async (e) =>{
        e.preventDefault();//to prevent the data from going away when we click on login/refresh 
        //console.log(inputs);
        await signup(inputs);//this signup function to handle form data is coming from that custom hook(line no.17)
     }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-blue-600'>
                    Sign Up <span className='text-blue-600'>Banter Box</span>
                </h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter fullname" className="input input-bordered w-full max-w-xs" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName: e.target.value})}/>

                    </div>

                    <div className='w-full mt-4'>
                        <label className="label">
                            <span className="text-base label-text"> Username    </span>
                        </label>
                        <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" value={inputs.username} onChange={(e)=>setInputs({...inputs,username: e.target.value})}  />
                    </div>

                    <div className='w-full mt-4'>
                        <label className="label">
                            <span className="text-base label-text"> Password    </span>
                        </label>
                        <input type="text" placeholder="Enter password" className="input input-bordered w-full max-w-xs" value={inputs.password} onChange={(e)=>setInputs({...inputs,password: e.target.value})} />
                    </div>

                    <div className='w-full mt-4'>
                        <label className="label">
                            <span className="text-base label-text"> Confirm Password  </span>
                        </label>
                        <input type="text" placeholder="Confirm ur password" className="input input-bordered w-full max-w-xs" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword: e.target.value})}/>
                    </div> 

                      <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

                    <Link to={"/login"} className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-sm w-full mt-2 bg-gray-200 items-center justify-center hover:bg-green-500' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>{/**agar loading ho raha hoga toh sign up wala button disabled ho jayega. Agar loading ho raha hoga
                         * toh loading wala spinner dikhaya jaye ya phir display kar dijiye sign up ho gaya 
                         */}
                    </div>


                </form>
            </div>

        </div>
    )
}

export default SignUp