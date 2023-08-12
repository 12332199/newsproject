import React from 'react'
import { useSearch } from '../context/search'
import { NavLink } from 'react-router-dom'

const SearchList = () => {
    const [values,setValues] = useSearch()
  return (
    <>
     <div className="serchlist mt-5">
        <div className="container">
            <h3 className="text-center">
            {values?.results.length < 1
              ? "No News Found"
              : `Found ( ${values?.results.length} ) News`}
            </h3>
            <div className="row">
            {
                values?.results.map(({photo,title,category,_id})=>{
                    return(
                        <div className=" col-6 col-md-6 col-lg-3" key={_id}>
                
              
  
    
                        <div className="Nborder">
                        <NavLink to={`/sin-news/${_id}`}>
                        <img className="card-img-top" style={{height:"20vh",width:"100%"}} src={`http://localhost:6969/images/${photo}`} alt="Card image cap" />
                       <br /> <span className='p-2'>Category: {category}</span>
                        <h6 className="card-title mb-3" >{title.substring(0,100)}...</h6>
                        </NavLink>
                        </div>
                       
                          </div>
                    )
                })
             }
            </div>
        </div>
     </div>
    </>
  )
}

export default SearchList