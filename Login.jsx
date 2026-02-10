import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as randomId } from 'uuid'
import { Auth } from '../context/AuthContext';
const Login = () => {
  let {login , logout} = useContext(Auth)
 let navigate =  useNavigate()
    let [formData , setFormData] = useState({
        email:'',
        password:'',
        role:''
    })
    let { password , email ,role} = formData;

    let handleChange = (e)=>{
        let name = e.target.name
        setFormData({...formData , [name]:e.target.value})
    }
    let handleSubmit = async(e)=>{
        e.preventDefault();
       let result = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}&role=${role}`)
       console.log(result.data);
       
       if(result.data[0]){
        login(result.data[0])
        toast.success('Login Successfull')
        navigate('/')
       }
       setFormData({
        email:'',
        password:'',
        role:''
    })
       
  }
 return (
  <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-100 via-blue-200 to-blue-300 px-4">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      {/* Heading */}
      <h2 className="mb-2 text-center text-3xl font-extrabold text-gray-800">
        Welcome Back
      </h2>
      <p className="mb-6 text-center text-sm text-gray-500">
        Please login to your account
      </p>

      {/* Email */}
      <div className="mb-5">
        <label className="mb-1 block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Password */}
      <div className="mb-5">
        <label className="mb-1 block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>

      {/* Role */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-600">
          Select Role
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="user"
              onChange={handleChange}
              className="h-4 w-4 accent-blue-600"
            />
            <span className="text-sm text-gray-700">User</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="admin"
              onChange={handleChange}
              className="h-4 w-4 accent-blue-600"
            />
            <span className="text-sm text-gray-700">Admin</span>
          </label>
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-[1.01] active:scale-95"
      >
        Login
      </button>

      {/* Footer */}
      <p className="mt-5 text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <span className="cursor-pointer font-medium text-blue-600 hover:underline">
          Sign up
        </span>
      </p>
    </form>
  </div>
);

}

export default Login

