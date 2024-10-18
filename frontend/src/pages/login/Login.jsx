import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-blue-600'>Login
          <span className='text-blue-600'> ChatApp</span>
        </h1>

        <form>

          <div className='w-full'>
            <label className="label p-2">
              <span className="text-base label-text">Username    </span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
          </div>


          <div className='w-full mt-4'>
            <label className="label">
              <span className="text-base label-text"> Password    </span>
            </label>

            <input type="text" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
          </div>

          <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>

          <div>
             <button className='btn btn-sm w-full mt-2 bg-gray-200 items-center justify-center  hover:bg-green-500'>Login</button>
          </div>



        </form>
      </div>
    </div>
  )
}

export default Login