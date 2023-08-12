import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dashboard from './Dashboard'

const SunscriberList = () => {
    const [sub,setSub] = useState([])

    const getSub = async()=>{
        const res = await axios.get('http://localhost:6969/api/news/subscriber/get-subscriber')
        setSub(res.data)
    }

    useEffect(()=>{
      getSub()
    },[])
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-5">
        <Dashboard/>
        </div>
        <div className="col-sm-7 mt-5 px-5">
          <h2>Total Subscriber ( {sub.length} )</h2>
        {
    sub.map((s)=>{
        return(
            <table className='border m-3 mx-2' style={{width:"70%"}}>
           <tr>
            <td className='p-1'><p style={{fontSize:"24px"}}>{s.email}</p></td>
           </tr>
            </table>
        )
    })
  }
        </div>
        
      </div>
 
    </div>
    </>
  )
}

export default SunscriberList