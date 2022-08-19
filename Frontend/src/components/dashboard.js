import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Update from './modal';
import {Store} from './App'

function Dash() {
    const [data,setdata] = useState(null)
    const [flg,setflg] = useState(false)
    const {setlogin} = useContext(Store)
    const {setDashname} = useContext(Store)

    const [fname, setfname] = useState()
    const [cfile, setcfile] = useState()

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
            localStorage.setItem("name",result.data.response.name)
        }).catch((err)=>console.log(err))
    },[])
    const lg = (e)=>{
        alert("logout successful ⚠️")
        localStorage.removeItem("token")
        setlogin(false)
        localStorage.removeItem("login")
        localStorage.removeItem("name")
        navigate("/signin")
    }

    const send = e => {
        e.preventDefault()
        const data = new FormData();
        data.append("name", fname);
        data.append("file", cfile);
    
        axios.post("http://localhost:3007/uploadcsv", data)
          .then(res => alert(res.data.message))
          .catch(err => alert(err));
    //console.log(data)
    }
 
  return (
    <div style={{ width: '50rem',height:'35rem'}} className="shadow-lg  container rounded text-center my-5 mb-2 bg-dark bg-gradient text-white">
    <h1>Dash Board</h1>
    {
        flg?
        <div className='row'>
            <h2>Hello! {data.name} 🙌</h2>
            <div className='row align-items-center'>
            <div className='col-6 d-flex justify-content-center '>
                <div className="card bg-dark bg-gradient align-items-center" style={{width:"24rem",height:'20rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Your profile</h5>
                        <h5 className="card-title"><span className='text-danger'>E-Mail: </span>{data.email}</h5>
                       <Update/>
                       <button  className="mx-2 btn btn-danger" type="button" onClick={(e)=>{e.preventDefault();navigate("/crudusers")}}>Manage Users</button>
                       <button  className="btn btn-danger" type="button" onClick={(e)=>{e.preventDefault();navigate("/crudusers")}}>Manage Products</button>
                    </div>
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center'>
            <div className="card bg-dark bg-gradient align-items-center" style={{width:"24rem",height:'20rem'}}>
                <h2> Bulk Upload</h2>
                <form onSubmit={send}>
                    <label >Upload Your File</label>
                    <input type='file' accept='.csv' id='file' onChange={e =>{ const file = e.target.files[0]; setfname(e.target.files[0].name); setcfile(file)}} />
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
            </div>
            </div>
            <button className="btn btn-primary my-3" style={{width:'20rem',margin: 'auto', display: 'block' }} onClick={(e)=>lg(e)}>Logout</button>
        </div>
        :<h2>⚠️Error💥 Not Getting Data</h2>
    }
    </div>
  )
}

export default Dash;