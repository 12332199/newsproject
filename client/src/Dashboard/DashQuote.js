import React from 'react'
import Dashboard from './Dashboard'

const DashQuote = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-3">
            <Dashboard/>
            </div>
            <div className="col-sm-9">
                <h1 className='text-center' style={{marginTop:"200px"}}>Welcome to Dashboard</h1>
            </div>
        </div>
    </div>
  )
}

export default DashQuote