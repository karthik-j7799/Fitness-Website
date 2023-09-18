import React, { useEffect, useState } from 'react'
import axiosInstance from '../../baseurl'
import { Link, useNavigate } from 'react-router-dom'

function CreateChatForTrainer() {
    const [Trainers, settrainers] = useState([])
    useEffect(()=>{
        axiosInstance.post(`/viewtrainers`)
        .then((res)=>{console.log(res)
        if(res.data.data!=undefined){
          settrainers(res.data.data)
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
              {Trainers.length?Trainers.map((a)=>{
                return (
                    <div className='col-4'>
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">{a.name}</h5>
                            <p class="card-text">Contact : {a.contact}</p>

                            <Link to={`/cusprofile/createChatWithTrainer/Chat/${a._id}`} class="btn btn-primary">Chat</Link>
                        </div>
                        </div>
                    </div>
                )
              }): <div className='col-12'>
              <div class="card">
                  
                  <div class="card-body">
                      <h5 class="card-title"> No Trainers available</h5>
                      
                  </div>
                  </div>
              </div>}
            </div>
        </div>
    </div>
  )
}

export default CreateChatForTrainer