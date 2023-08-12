import React, { useEffect, useState } from 'react'
import {toast } from 'react-toastify'
import axios from 'axios'
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';
const { Option } = Select;

const CreateNews = () => {


  const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [photo,setPhoto] = useState('')
    const [news,setNews] = useState({
        title:"",
        subdesc:"",
        description:"",
        category:""
      
    })
     


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

const handleSubmit = async(e)=>{
    e.preventDefault()
   try {
      const newsData = new FormData();
      newsData.append('category',news.category)
      newsData.append('photo',photo)
      newsData.append('title',news.title)
      newsData.append('subdesc',news.subdesc)
      newsData.append('description',news.description)

      const {data} = await axios.post('http://localhost:6969/api/news/add-news',newsData)
      if (data?.success) {
        toast.error("error")
      
      }else{
        toast.success("News Created successFully")
        navigate('/all-news')
      }
   } catch (error) {
    toast.error(error)
   }
}
const handleChange =(e)=>{
   setNews({...news,[e.target.name]:e.target.value})
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

                <form action="" onSubmit={handleSubmit}>
              <select class="form-select" aria-label="Default select example" name="category" value={news.category || ''}  onChange={handleChange}>
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
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" name='title' value={news.title } onChange={handleChange} required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">Sub description</label>
                        <input type="text" className="form-control" name='subdesc' value={news.subdesc}  onChange={handleChange} required/>
                    </div>
                    <div className="form-group mt-3 ">
                        <label htmlFor="">Description</label>
                        <input type="text" className="form-control p-3" name='description' value={news.description} onChange={handleChange} required />
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

export default CreateNews