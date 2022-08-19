import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import {Store} from './App'

function Micro() {
    const[data,setdata] = useState([])
    const {searchd} = useContext(Store)
    useEffect(()=>{
        axios.get("http://localhost:3007/getproducts").then((res)=>setdata(res.data.response)).catch((err)=>console.log(err))
    },[])
  const test = (e,id)=>{
    console.log(id)
  }
  return (
    <div className='container'>
    <div className='row md-3'>
    {
      data.filter(item => item.title.toLowerCase().includes(searchd)).map((item)=>(
        <div className='col mt-4' key={item._id}>
          <div className="card shadow-lg border-dark" style={{width: "15rem", height: "30rem" }}>
              <img className="img-fluid rounded" style={{width: "300px", height: "300px"}} src={item.productimage} alt="Cardcap"/>
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <h4 className="card-text">₹ {item.price}</h4>
                    {
                      item.instock ? <h4><span className='text-success'>InStock</span></h4>:<h4><span className='text-danger'>Out of Stock</span></h4>
                    }
                    
                  {  item.instock ?
                    <button className="btn btn-primary" onClick={(e=>test(e,item._id))}>Add to cart</button>:
                    <button className="btn btn-warning disabled" onClick={(e=>test(e,item._id))}>Add to cart</button> 
                  }
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