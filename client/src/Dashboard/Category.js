import React, { useEffect, useState } from 'react'
import CreateCategory from './CreateCategory'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Dashboard from './Dashboard'
import { toast } from 'react-toastify'





const Category = () => {
  const [category,setCategory] = useState([])
 
  
 
 
  const getAllCategory = async() =>{
    try {
        const res = await axios.get('http://localhost:6969/api/news/category/all-category')
        setCategory(res.data)
       
    } catch (error) {
      alert(error)
    } 
  }
  useEffect(()=>{
    getAllCategory()
  },[])

 const {id} = useParams()
    const deleteCat = (id) =>{
       try {
     axios.delete(`http://localhost:6969/api/news/category/delete-category/${id}`)
     toast.success("Category Deleted Successfully")
     window.location.reload()
       } catch (error) {
        alert(error)
       }
    }

  return (
    <>
   
  <div className="container">
    <div className="row">
      <div className="col-sm-3">
        <Dashboard/>
      </div>
      <div className="col-sm-9">
      <div className="container">
      <CreateCategory/>
       <table class="table border mt-5 text-center">
  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
   {
    category.map(c=>{
  return(
    <tr key={c._id}>
      
    <td>{c.name}</td>
    <td>
    <button className="btn btn-danger mx-1"  
                              >Edit</button>
      <button className="btn btn-danger mx-1" onClick={()=>deleteCat(c._id)}>Delete</button>
    </td>
      
  </tr>
  )
    })
   }
    
    
  </tbody>
</table>


   </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Category