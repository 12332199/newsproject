import React from 'react'
import { useSearch } from '../context/search'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {toast } from 'react-toastify'

const Search = ({setSearch}) => {

    const [values,setValues] = useSearch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.get(`http://localhost:6969/api/news/search/${values.keyword}`
          );
          setValues({ ...values, results: data });
         
          navigate("/search");
          setSearch(false)
        } catch (error) {
          toast.error(error);
        }
      };
  return (
    <>
   <div className="container">
   <form action="" onSubmit={handleSubmit}>
   <div className="form-group d-flex">
        <input type="search" name="search" className='form-control' value={values.keyword} placeholder='Search' onChange={(e) => setValues({ ...values, keyword: e.target.value })} />
        <button className='button' >Search</button>
    </div>
   </form>
   </div>
 
    </>
  )
}

export default Search