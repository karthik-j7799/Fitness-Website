import React, { useEffect, useState } from 'react'
import axiosInstance from '../../baseurl'
import { Link, useNavigate } from 'react-router-dom'

function CreateChat() {
    const [Doctors, setdocs] = useState([])
    useEffect(()=>{
        axiosInstance.post(`/viewAllDoctors`)
        .then((res)=>{console.log(res)
        if(res.data.data!=undefined){
          setdocs(res.data.data)
        }})
        .catch((err)=>{console.log(err);})
    },[])
    
    const Navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem(`CustomerLogId`) == null) {
        Navigate(`/home`);
      }
    },[]);
  
  return (
    <div className="container container-top" >
        <div className='container text-center'>
            <div className='row'>
              {Doctors.length?Doctors.map((a)=>{
                return (
                    <div className='col-4'>
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">{a.name}</h5>
                            <p class="card-text">specialization : {a.specialization}</p>
                            <p class="card-text">Contact : {a.contact}</p>

                            <Link to={`/cusprofile/createChat/Chat/${a._id}`} class="btn btn-primary">Chat</Link>
                        </div>
                        </div>
                    </div>
                )
              }): <div className='col-12'>
              <div class="card">
                  
                  <div class="card-body">
                      <h5 class="card-title"> No Doctors available</h5>
                      
                  </div>
                  </div>
              </div>}
            </div>
        </div>
    </div>
  )
}

export default CreateChat