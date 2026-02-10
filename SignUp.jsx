import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as randomId } from 'uuid'
const SignUp = () => {
 let navigate =  useNavigate()
    let [formData , setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        id:randomId(),
        role:'user'
    })
    let {username , password , email , confirmPassword} = formData;

    let handleChange = (e)=>{
        let name = e.target.name
        setFormData({...formData , [name]:e.target.value})
    }

    let handleSubmit = async(e)=>{
        e.preventDefault();
     let alreadyExist = await axios.get(`http://localhost:3000/users?email=${email}`)
     console.log(alreadyExist?.data);
     if(alreadyExist?.data.length>0){
      toast.error('User already exists')
      return;
     }
      if(confirmPassword != password){
        toast.error('Password does not match ')
        return;
      }
      else{
        if(username.trim() && password.trim().length>8 && email.trim().includes('@gmail.com') && confirmPassword.trim()){
            console.log(formData);
           let result =await axios.post('http://localhost:3000/users' , formData)
           console.log(result);
           if(result.status == 201){
             toast.success('SignUp successfull')
              navigate('/login')
           }
        }

        setFormData({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        id:randomId()
    })
    }
  }



  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Create Account
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            name='username'
            placeholder="Enter username"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name='email'
            onChange={handleChange}
            value={email}
            placeholder="Enter email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
          name='password'
            type="password"
            value={password}
            onChange={handleChange}

            placeholder="Enter password"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
          name='confirmPassword'
            type="password"
            value={confirmPassword}
            onChange={handleChange}

            placeholder="Confirm password"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Sign Up
        </button>

        {/* Footer text */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <span className="cursor-pointer font-medium text-blue-600 hover:underline">
            Login
          </span>
        </p>

      </form>

    </div>
  )
}

export default SignUp
