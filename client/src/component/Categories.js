import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Affix } from 'rsuite';
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import './header/header.css'

const Categories = () => {
  const [categories,setCategories] = useState([])
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
     //eslint-disable-next-line
  },[])
 
  const Reload = () =>{
    setTimeout(()=>{
      window.location.reload()
    },200)
  }




  return (
    <Affix>
     <Navbar expand="lg" className="color" style={{borderBottom:"1px solid #000"}} >
      <Container className='ct'>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><FaBarsStaggered/></Navbar.Toggle >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink href="#home" className='text' to="/"  onClick={Reload}>होम</NavLink>
            {
              categories && categories.filter((f,index)=>index<6).map(c=>{
                return (
             
                <NavLink href="#home" to={`/query?category=${c.name}`}  onClick={Reload} className='text' key={c._id}>{c.name}</NavLink>

                
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
       <Link to='/' className='link'> <h6 className=' xx '>NEWS72</h6></Link>
      </Container>
     
    </Navbar>
    </Affix>
  )
}

export default Categories