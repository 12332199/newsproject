import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
import {toast } from 'react-toastify'
const Login = () => {
  const navigate = useNavigate()
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [auth,setAuth] = useAuth();

    const handleSubmit = async (e) =>{
      e.preventDefault()
     
      try {
        const res = await axios.post('http://localhost:6969/api/user/login',user)
        if(res && res.data.success){
         toast.success(res.data.message)
          setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token
          })
          localStorage.setItem('auth', JSON.stringify(res.data))
          navigate( '/dashboard')
        }else{
          toast.success(res.data.message)
         
          
        }
      } catch (error) {
         toast.error(error)
         alert('Something went wrong')
      }
    }
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div className='log'>


        <form  action="" onSubmit={handleSubmit}>
           <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
              <h1 className="text-center">SignIn</h1>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="email" className='form-control' name='email' value={user.email || ""} onChange={handleChange}  placeholder='Enter Name'/>
                <label htmlFor="">Password</label>
               <input type="password" className='form-control' name='password' value={user.password || ""} onChange={handleChange} placeholder='Enter Password' /> 
            <button className='button mt-2 '>SignIn</button>
              </div>
            </div>
           </div>
        </form>
    </div>
  )
}

export default Login