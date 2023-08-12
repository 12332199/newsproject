import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import {toast } from 'react-toastify'

const News = () => {
    const [news,setNews] = useState([]);
    const reverse = news.reverse()
    const getNews = async() =>{
       try {
        const {data} =await axios.get('http://localhost:6969/api/news/all-news')
        setNews(data.news)
       } catch (error) {
         toast.error("Something wrong")
       }
    }
   useEffect(()=>{
     getNews()
   },[])

   const {id} = useParams()
  const  deleteNews =(id)=>{
      try {
       
        
        axios.delete(`http://localhost:6969/api/news/delete-news/${id}`)
        toast.success('News Deleted Successfully')
        window.location.reload()
      } catch (error) {
        toast.error(error)
      }
  }
  return (
    <>
    <div className="news">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Dashboard/>
            </div>
           
            <div className="col-sm-9">
            <div className="container">
            <h1 className='mt-1 text-center'>Total news ({news.length})</h1>
             <div className="row">
              
                
          {
            reverse.map(({photo,title,category,_id})=>{
                return(

                      
               <div className=" col-6 col-md-6 col-lg-4" key={_id}>
                
              
  
    
               <div className="Nborder">
               <NavLink to={`/sin-news/${_id}`}>
               <img className="card-img-top" style={{height:"20vh",width:"100%"}} src={`http://localhost:6969/images/${photo}`} alt="Card image cap" />
              <p>{category}</p>
               <h6 className="card-title" >{title.substring(0,100)}...</h6>
               </NavLink>
               <div className="d-flex justify-content-end">
            <button className="btn btn-secondary mx-1 " ><NavLink className="text-white" style={{textDecoration:"none"}} to={`/update-news/${_id}`}>Update</NavLink></button>
            <button className="btn btn-danger" onClick={()=>deleteNews(_id)}>Delete</button>
            </div>
               </div>
              
                 </div>
                  
        
                )
            })
          }
                </div>
            
        </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default News