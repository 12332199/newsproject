import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import {toast } from 'react-toastify'

const CatF = () =>{
  const [find,setFind] = useState([])


  const getQuery = async()=>{
     try {
        const res = await axios.get(`http://localhost:6969/api/news/query${window.location.search}`)
        setFind(res.data)
      
       
       
     } catch (error) {
      toast.error(error)
     }
  }

useEffect(()=>{
  getQuery();
},[])
  return(
    <>
    <div className="searchList mt-5">
      <div className="container">
        <div className="row">
        {
      find.map(({photo,title,category,_id})=>{
        return(
         
          <div className=" col-6 col-md-6 col-lg-3" key={_id}>
                
              
               
    
          <div className="Nborder">
          <NavLink to={`/sin-news/${_id}`}>
          <img className="card-img-top" style={{height:"20vh",width:"100%"}} src={`http://localhost:6969/images/${photo}`} alt="Card image cap" />
         <br /> <span className='p-2'>Category: {category}</span>
          <h6 className="card-title mb-3" >{title.substring(0,100)}...</h6>
          </NavLink>
          </div>
         
            </div>
        )
      })
     }
          
        </div>
      </div>
    </div>
   
    </>
  )
}

export default CatF