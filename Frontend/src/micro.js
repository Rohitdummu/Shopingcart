import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Micro() {
    const[data,setdata] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/products").then((res)=>setdata(res.data.response)).catch((err)=>console.log(err))
    },[])
  const test = (e,id)=>{
    console.log(id)
  }
  return (
    <div className='container'>
    <div className='row md-3'>
    {
      data.map((item)=>(
        <div className='col mt-4' key={item._id}>
          <div className="card shadow-lg border-dark" style={{width: "18rem", height: "34rem" }}>
              <img className="img-fluid rounded" style={{width: "300px", height: "350px"}} src={item.productimage} alt="Cardcap"/>
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <h4 className="card-text">₹ {item.price}</h4>
                    {
                      item.instock ? <h4><span className='text-success'>InStock</span></h4>:<h4><span className='text-danger'>Out of Stock</span></h4>
                    }
                    <button  className="btn btn-primary" onClick={(e=>test(e,item._id))}>Add to cart</button>
                </div>
            </div>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default Micro