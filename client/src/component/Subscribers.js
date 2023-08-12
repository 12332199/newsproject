import axios from 'axios'
import React, { useState } from 'react'
import {toast} from 'react-toastify'

const Subscribers = () => {

const [email,setEmail] = useState('')
  const handleSubmit = async(e)=>{
     e.preventDefault()
    try {
        const res = await axios.post("http://localhost:6969/api/news/subscriber/add-subscriber",{email})
        toast.success(res.data.message)
        setEmail("")
    } catch (error) {
      toast.error('Opps some Error')
      console.log(error)
    }
  }
  return (
    <>
<section className="newsletter">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="content">
          <form action=""  onSubmit={handleSubmit}>
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className="input-group">
            <input type="email" className="form-control" name="email"  value={email} onChange={(e=>setEmail(e.target.value))} placeholder="Enter your email" />
            <span className="input-group-btn">
              <button className="btn" type="submit">Subscribe Now</button>
            </span>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Subscribers