import React, { useEffect, useState } from 'react'
import './news.css'
import { NavLink } from 'react-router-dom';
const AllNews = ({news,categories}) => {
  
  return (
    <>
             
    <div className="newss">
       <div className="container">
        <div className="row">
       {
        categories !== []
        ? categories.filter((f,index)=> index<5).map((cat)=>{
           return(
            <div className='row' key={cat._id}>
            <div className="fs-3 m-3" style={{borderBottom:"1px solid #000"}} >
               {cat.name} 
               
            </div>
          
           
            {
              news !== []?
              news.filter((news,index)=> news.category === cat.name  && index<20)
              .map(({_id,photo,title})=>{
                return(
                 
               <div className=" col-6 col-md-6 col-lg-3" key={_id}>
                
              
  
    
           <div className="Nborder">
           <NavLink to={`/sin-news/${_id}`}>
           <img className="card-img-top" style={{height:"20vh",width:"100%"}} src={`http://localhost:6969/images/${photo}`} alt="Card image cap" />
          
           <h6 className="card-title" >{title.substring(0,100)}...</h6>
           </NavLink>
           </div>
          
             </div>
                
                )
              }):""
            }
         
        </div>
       
           )
        }):<div>No Such Data</div>
       }
    </div>
    </div>
    </div>
    </>
  )
}

export default AllNews