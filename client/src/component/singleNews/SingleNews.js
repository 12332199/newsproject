import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './singlenews.css'
import {toast } from 'react-toastify'
import TopNews from '../topnews/TopNews';

const SingleNews = () => {
   
    const [SinNews,setSinNews] = useState({})

  const {id} = useParams();

  const getSinNews = async() =>{
    try {
        const res = await axios.get(`http://localhost:6969/api/news/sin-news/${id}`)
        setSinNews(res.data);
    } catch (error) {
         toast.error(error)
    }
  }
  useEffect(()=>{
    getSinNews()
     // eslint-disable-next-line
  },[])

  return (
    <>
    
    <div className="sinnews mt-5">
        
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <h2 className=''>{SinNews.title}</h2>
                <span><strong>Publish Date:</strong>{SinNews.createdAt
}</span>
  <p>{SinNews.subdesc}</p>
   <img src={`http://localhost:6969/images/${SinNews.photo}`} alt="" className='img-fluid w-100'  />
   <p>{SinNews.description}</p>
                </div>
                <div className="col-sm-4">
                
                </div>
            </div>
        </div>
       
         
    </div>
    </>
  )
}

export default SingleNews