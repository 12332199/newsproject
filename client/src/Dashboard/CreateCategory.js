import React, { useState } from 'react'
import {toast } from 'react-toastify'
import axios from 'axios'
const CreateCategory = () => {
    const [category,setCategory]  = useState({name:""});
    const [error,setError] = useState(true)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            if(category.name===""){
                alert('Please Enter Category')
            }
            const res =  await axios.post('http://localhost:6969/api/news/category/add-category',category)
            toast.success(res.data.message)
            window.location.reload()
            
        } catch (error) {
         toast.error(error)
        }
    }

    const handleChange = (e) =>{
        if(category.name.length<3){
            setError("please enter atleast 3 word")
        }else{
            setError(false)
        }
        setCategory({...category,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="">
        <div className="row">
            <div className="col-sm-3">
               
            </div>
            <div className="col-sm-9">
            <div className="container">
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group d-flex mt-5">
                <input type="text" className="form-control" placeholder='Enter category name' name="name" onChange={handleChange} value={category.name || ""}/>
                <br /><p className='text-danger'>{error}</p>
                <button className="btn btn-primary mx-2 p-2">
                Create
         </button>
            </div>
        </form>
     </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateCategory