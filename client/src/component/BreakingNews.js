import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import {toast } from 'react-toastify'


const BreakingNews = () => {
    const [breaking,setBreaking] = useState([])
    const reverse = breaking.reverse();
    const breakNews = async() =>{
        try {
            const res = await axios.get('http://localhost:6969/api/news/breaking-news')
            setBreaking(res.data);
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        breakNews();
    },[])
  return (
    <>
   
      {
        reverse.filter((f,index)=>index<1).map(({photo,title,subdesc,_id})=>{
            return(
                <div className='mt-3 bn' key={_id}>
                    <NavLink to={`/sin-news/${_id}`}>
                    <h3 className='text-danger text-center'>Breaking-news</h3>
                     <img src={`http://localhost:6969/images/${photo}`} alt="" className='img-fluid w-100'  />
                   <h4 style={{marginTop:"10px",fontWeight:"500"}}>{title}</h4> 
                   <p style={{fontWeight:"200"}}>{subdesc.substring(0,140)}...</p>
                   </NavLink>
                </div>
            )
        })
      }
   
    </>
  )
}

export default BreakingNews