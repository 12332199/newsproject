import React,{useState,useEffect} from 'react'
import './topnews.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const TopNews = () => {
    const [topnews,setTopNews]  = useState([])
      const reverse = topnews.reverse()
    const getTopNews = async() =>{
      try {
        const res = await axios.get('http://localhost:6969/api/news/top-news')
        setTopNews(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
        getTopNews()
    },[])
  return (
    <div className='topNews m-3 d-grid justify-content-center '>
        <h3 className='text-center text-danger'>Latest News</h3>
       
        <div className="card " style={{width:"24rem"}}>
            <div className="card-body">
               {
                reverse && reverse.filter((c,index)=>index<5).map(({title,photo,_id})=>{
                    return(
                        <NavLink to={`/sin-news/${_id}`} key={_id}>
                        <div className="d-flex p-1" >
                           
                        <img src={`http://localhost:6969/images/${photo}`} alt="top" className='img-fluid'/>
                        <p>{title.substring(0,100)}...</p>
                      
                        </div>
                        </NavLink>
                    )
                })
               }
                
                
               
               
            </div>
            
        </div>
        <NavLink to="/query?category=top-news"className='d-flex justify-content-end' style={{
              fontSize:"16px",
              color:"#000",
              fontWeight:"700"
            }}>और भी</NavLink>
       
    </div>
  )
}

export default TopNews