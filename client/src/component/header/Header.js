import React, {  useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
import { FaSearch } from "react-icons/fa";

import {toast} from 'react-toastify'
const Header = () => {

 
   const [search,setSearch] = useState(false)
 const navigate = useNavigate()
  
 const [auth,setAuth] = useAuth();
 const handleLogout = () =>{
  setAuth({...auth,
    user:null,
    token:''
    })
    localStorage.removeItem('auth')
    navigate('/')
    toast.success("Logout SuccessFully")
 }
 
 
 
  
  return (
    <>
     <header className="header">
     <div className=" container heading">
     
     <div className="d-flex justify-content-between align-items-center">
      <h5 className='mt-4'>
        {
          search === true ? <Search setSearch={setSearch}/> : <p style={{cursor:"pointer"}} onClick={()=> setSearch(true)}><FaSearch/></p>
        }
      </h5>
      <h3 className='newsTitle'>NEWS72</h3>
     <div className="login mt-3">
       {
        !auth.user ? 
        <NavLink to='/login' className="mx-1">Login</NavLink>
        :
        <NavLink to='/login' className="mx-1" onClick={handleLogout}>Logout</NavLink>
       }
      </div>
     </div>
        
     </div>
  
    
    </header>
    </>
  )
}

export default Header