import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Update from './modal';
import Deact from './deac';
import {Store} from './App'

function Dash() {
    const [data,setdata] = useState(null)
    const [flg,setflg] = useState(false)
    const [login,setlogin] = useContext(Store)
    const [Dashname,setDashname] = useContext(Store)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3007/dash`,{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        }).then((result)=>{
            setdata(result.data.response)
            setflg(result.data.status)
            setDashname(result.data.response.name)
        }).catch((err)=>console.log(err))
    },[])
    const lg = (e)=>{
        alert("logout successful ⚠️")
        localStorage.removeItem("token")
        setlogin(false)
        navigate("/signin")
    }
  return (
    <div style={{ width: '50rem',height:'35rem'}} className="shadow-lg  container rounded text-center my-5 mb-2 bg-dark bg-gradient text-white">
    <h1>Dash Board</h1>
    {
        flg?
        <div className='row'><h2>Hello! {data.name} 🙌</h2>
            <div className='row align-items-center'>
            <div className='col-6 d-flex justify-content-center '>
                <div className="card bg-dark bg-gradient align-items-center" style={{width:"25rem",height:'auto'}}>
                    <div className="card-body">
                        <h5 className="card-title">Your profile</h5>
                        <h5 className="card-title"><span className='text-danger'>E-Mail: </span>{data.email}</h5>
                        <h5 className="card-text"><span className='text-danger'>Address: </span>{data.address}</h5>
                        <Deact/><Update/>
                    </div>
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center'>
            <div className="card bg-dark bg-gradient align-items-center" style={{width:"20rem",height:'auto'}}>
                <img src="https://www.clipartkey.com/mpngs/m/208-2089363_user-profile-image-png.png" className="card-img-top" alt="profile"/>
                <form>
                    <label>Upload Your Image</label>
                    <input type='file'/>
                </form>
            </div>
            </div>
            </div>
            <button className="btn btn-primary my-3" style={{width:'20rem',margin: 'auto', display: 'block' }} onClick={(e)=>lg(e)}>Logout</button>
        </div>
        :<h2>⚠️Error💥 Please Login or Register</h2>
    }
    
    </div>
  )
}

export default Dash;