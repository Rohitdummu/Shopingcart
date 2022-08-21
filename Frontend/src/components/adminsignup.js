import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate, Link } from 'react-router-dom'
const bgim = require('../images/background.jpeg')

function AdSignup() {
    const styl = { width: '22rem', margin: 'left', display: 'block' }
    const [data,setdata] = useState({
        email:'',password:'',repassword:'',address:'',name:''
    })
    const navigate = useNavigate()
    const handlechange=(e)=>{
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
const handlesubmit = async (e)=>{
    e.preventDefault()
    if(data){
        try{
            const resp = await axios.post("http://localhost:3007/fill",data)
            alert(resp.data.msg)
            navigate("/signin")
        }
        catch(err){
            console.log(err)
            alert(err)
        }
    }
    else{
        alert("enter details")
    }
}
  return (
    <div>
    <div style={{ width: '31rem', height: '32rem' }} className="position-absolute top-50 start-50 translate-middle shadow-lg container rounded  my-5 mb-2 bg-dark bg-gradient text-white" >
    <h2 className='text-center'>Admin Registration</h2>
        <div className='row'>
            <div className='col p-5'>
            <form onSubmit={(e)=>handlesubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Name<span className='text-danger'>*</span></label>
                    <input className="form-control" style={styl} placeholder=' Enter Name' type="text-field" name="name" onChange={(e)=>handlechange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">E-Mail<span className='text-danger'>*</span></label>
                    <input className="form-control" placeholder=' Enter E-Mail' style={styl} type="email" name="email" onChange={(e)=>handlechange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password<span className='text-danger'>*</span></label>
                    <input className="form-control" placeholder=' Enter Password' style={styl} type="password" name="password" onChange={(e)=>handlechange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-Enter Password<span className='text-danger'>*</span></label>
                    <input className="form-control" style={styl} placeholder='Re Enter Password' type="password" name="repassword" onChange={(e)=>handlechange(e)}/>
                </div>
                
                <input type="submit" className="btn btn-primary" value="Submit" style={{margin:'auto',display:'block'}}/>
                </form>
                <center>SignUp As ?<Link style={{textDecoration:'none'}} to="/signup"> User</Link></center>
            </div>
        </div>
    </div>
    </div>
    
    
  )
}

export default AdSignup