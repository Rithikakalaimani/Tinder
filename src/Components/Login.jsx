import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async ()=>{

  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='card bg-neutral text-neutral-content w-96'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Login</h2>
          <div className='card-actions justify-center'>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text my-1'>Email ID</span>
              </div>
              <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
              />
            </label>
            <label className='form-control w-full max-w-xs '>
              <div className='label'>
                <span className='label-text my-1'>Password</span>
              </div>
              <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
              />
            </label>
              <button className='btn btn-primary m-5'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
