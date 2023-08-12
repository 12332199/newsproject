import React from 'react'
import './footer.css'
import { FaFacebook,FaSquareTwitter,FaGoogle,FaInstagram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className="container my-5">
   <footer className="text-center text-lg-start  bh" >

  <div className="container p-4 pb-0">
   
    <section className>

      <div className="row">
      
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">
           About us
          </h6>
          <p>
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </div>
      
        <hr className="w-100 clearfix d-md-none" />
    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
          <p>
            <NavLink className="text-dark">About Us</NavLink>
          </p>
          <p>
            <NavLink className="text-dark">Contact Us</NavLink>
          </p>
          <p>
            <NavLink className="text-dark">Our Staff</NavLink>
          </p>
          <p>
            <NavLink className="text-dark">Advertise</NavLink>
          </p>
        </div>
  
        <hr className="w-100 clearfix d-md-none" />
     
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">
            Legal
          </h6>
          <p>
            <NavLink className="text-dark">Privacy Plolicy</NavLink>
          </p>
          <p>
            <NavLink className="text-dark">Term & Services</NavLink>
          </p>
          <p>
            <NavLink className="text-dark">Extral Crunch Terms</NavLink>
          </p>
          <p>
            <NavLink className="text-dark">Code of Conduct</NavLink>
          </p>
        </div>
       
        <hr className="w-100 clearfix d-md-none" />
      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i className="fas fa-home mr-3" />Lucknow 220060, India</p>
          <p><i className="fas fa-envelope mr-3" /> news@gmail.com</p>
          <p><i className="fas fa-phone mr-3" /> + 91 9785783666</p>
          <p><i className="fas fa-print mr-3" /> + 91 9784563666</p>
        </div>
      
      </div>
  
    </section>
   
    <hr className="my-3" />
   
    <section className="p-3 pt-0">
      <div className="row d-flex align-items-center">
       
        <div className="col-md-7 col-lg-8 text-center text-md-start">
    
          <div className="p-3">
            © 2020 Copyright:
           
          </div>
         
        </div>
      
        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
        
          <NavLink className="btn btn-outline-light btn-floating m-1" role="button"><FaFacebook /></NavLink>
       
          <NavLink className="btn btn-outline-light btn-floating m-1" role="button"><FaSquareTwitter/></NavLink>
      
          <NavLink className="btn btn-outline-light btn-floating m-1" role="button"><FaGoogle/></NavLink>
      
          <NavLink className="btn btn-outline-light btn-floating m-1" role="button"><FaInstagram /></NavLink>
        </div>
        
      </div>
    </section>
   
  </div>
 
</footer>

    </div>
    </>
  )
}

export default Footer