import React, { useState,useEffect } from 'react'
import Dashboard from './Dashboard'
import { useParams ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-toastify'


const EditNews = () => {
  const navigate = useNavigate()
   const [categories,setCategories]= useState([])
   const [photo,setPhoto] = useState('')
   const [category,setCategory] = useState('')
   const [title,setTitle] = useState('')
   const [subdesc,setSubDesc] = useState('')
   const [description,setDescription] = useState('')
    
  

  const {id} = useParams();

  const getSinNews = async() =>{
      const {data} = await axios.get(`http://localhost:6969/api/news/sin-news/${id}`)
      setCategory(data.category);
      setTitle(data.title);
      setSubDesc(data.subdesc);
      setDescription(data.description);
     }
  useEffect(()=>{
    getSinNews()
  },[])

  const getAllCategory = async () => {
    try {
        const res = await axios.get('http://localhost:6969/api/news/category/all-category')
        setCategories(res.data)
  
    } catch (error) {
        alert(error)
    }
}
useEffect(() => {
    getAllCategory()
}, [])


  const handleUpdate = async(e) =>{
    e.preventDefault();
  try {
        const fromdata = new FormData()

        fromdata.append("photo",photo);
        fromdata.append("title",title);
        fromdata.append("subdesc",subdesc);
        fromdata.append("description",description);
        fromdata.append("category",category);
     await axios.patch(`http://localhost:6969/api/news/update-news/${id}`,fromdata)
     toast.success("Updated SuccessFully")
     navigate('/all-news')

  } catch (error) {
    toast.error(error)
  }
  }
  return (
   <>
 
       
        <div className="createnews">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
             <Dashboard/>
                </div>
                <div className="col-sm-9">
                <div className="container">
                <h1 className="text-center">
                    Create News
                </h1>

                <form action="" onSubmit={handleUpdate}>
              <select class="form-select" aria-label="Default select example" name="category" value={category}  onChange={(e)=>setCategory(e.target.value)}>
             <option > Select Category</option>
             {categories?.map((c) => (
                
                  <option name key={c._id} >
                    {c.name}
                  </option>
                ))}
           </select>
                    <div className="form-group">
                    <label className="btn btn-outline-secondary col-md-12 mt-2">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                   
                </label>
                <div className="mt-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="efjis"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" name='title' value={title } onChange={(e)=>setTitle(e.target.value)} required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">Sub description</label>
                        <input type="text" className="form-control" name='subdesc' value={subdesc}  onChange={(e)=>setSubDesc(e.target.value)} required/>
                    </div>
                    <div className="form-group mt-3 ">
                        <label htmlFor="">Description</label>
                        <input type="text" className="form-control p-3" name='description' value={description} onChange={(e)=>setDescription(e.target.value)} required />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary">Create News</button>
                    </div>
                </form>
            </div>
                </div>
              </div>
            </div>
           </div>
   
   </>
  )
}

export default EditNews