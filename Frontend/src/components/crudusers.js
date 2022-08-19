import {React, useEffect,useState} from 'react'
import axios from 'axios';
const bgim = require('../images/background.jpeg')

function Crud() {
    const [id , setid] = useState()
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/admin/getusers",{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        }).then((res)=>setdata(res))
    })
    const handledelete = (e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3005/admin/removeuser/${id}`,{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        })
        alert("deleted successfully")
    }
  return (
    <div style={{ 
        backgroundImage: `url(${bgim})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
      }}>
        <div className="container">
            <h2 className='text-center'>User Details</h2>
            <div className="row">
                <div className='col-4 my-2'>
                    <div className="card bg-info align-items-center" style={{width:"15rem",height:'13rem'}}>
                        <div className="card-body">
                                <h5 className="card-title">Your profile</h5>
                                <h5 className="card-title"><span className='text-danger'>E-Mail: </span>mkekfkef</h5>
                                <h5 className="card-title"><span className='text-danger'>name: </span>mkekfkef</h5>
                                <button className="mx-2 btn btn-danger" type="button" onClick={(e)=>handledelete(e)}>delete</button>
                                <button className="btn btn-warning" type="button" >update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crud