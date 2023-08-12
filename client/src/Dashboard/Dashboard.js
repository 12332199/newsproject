import React from 'react'

import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    
    
      <div className="dashboard">
       
        {/* <div className="container">
        
          <div className="d-flex justify-content-between">
            <div>
            <h3>Dashboard</h3>
            </div>
          <div>
          <NavLink to='/category' >Create Category</NavLink>
         <NavLink to='/create-news'> Create News</NavLink>
         <NavLink to='/all-news'> News list</NavLink>
          </div>
          </div>
        </div> */} 
    <div className="container">
      <div className="row">
      <div classname="col-sm-3">
  <ul className="list-group">
    <li className="list-group-item "><NavLink to='/dashboard' >Dashboard</NavLink></li>
    <li className="list-group-item "><NavLink to='/category' >Create Category</NavLink></li>
    <li className="list-group-item "> <NavLink to='/create-news'> Create News</NavLink></li>
    <li className="list-group-item "><NavLink to='/all-news'> News list</NavLink></li>
    <li className="list-group-item "><NavLink to='/subscriber-list'> Subscribers list</NavLink></li>
    
  
  </ul>
</div>


</div>

      </div>
    </div>
       
     
    </>
  )
}

export default Dashboard