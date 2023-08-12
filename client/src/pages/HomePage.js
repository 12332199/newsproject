import React, { useEffect, useState } from 'react'


import axios from 'axios';
import AllNews from '../component/news/AllNews'
import BreakingNews from '../component/BreakingNews'
import TopNews from '../component/topnews/TopNews'
import {toast } from 'react-toastify'
const HomePage = () => {
  const [categories,setCategories] = useState([])
  const [news,setNews] = useState([]);
  const getAllCategory = async() =>{
    try {
        const res = await axios.get('http://localhost:6969/api/news/category/all-category')
        setCategories(res.data)
       
       
    } catch (error) {
      alert(error)
    } 
  }
  useEffect(()=>{
    getAllCategory()
  },[])

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

  return (

    <div className='home'>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
      <BreakingNews/>
          </div>
          <div className="col-sm-6 ">
            <TopNews/>
            </div>
        </div>
      </div>
      
       <AllNews  categories={categories} news={news} />
      
    </div>
  )
}

export default HomePage