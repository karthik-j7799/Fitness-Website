import React, { useEffect, useState } from 'react'
import axiosInstance from '../../baseurl';

function ViewUpdate() {

    const [progress,setProgress]= useState([]);

    useEffect(() =>{
        axiosInstance
        .post(`/viewCustomerProgressByCustId/${localStorage.getItem('CustomerLogId')}`)
        .then((res) => {
            console.log(res)
            if(res.data.data !== undefined){
                setProgress(res.data.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const deletefn = (id) => {
        axiosInstance.post(`deleteCustomerProgressById/${id}`)
        .then((res) => {
            console.log(res)
            alert("Deleted Successfully")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div style={{minHeight:"400px", padding:"150px 40px"}}>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               View My Updates
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div className="container">
                  <div class="container text-center">
                    <div class="row">
                      {/* customer data details mapped */}
                      {progress.length ? (
                        progress.map((a) => {
                          return (
                            <div className="col-4">
                      <div class="card">
                        <img
                          src={`http://localhost:4002/${a.img.originalname}`}
                          class="card-img-top"
                          alt="..."
                          height={400}
                        />
                        <div class="card-body">
                          <p class="card-text">{a.cid?<b>{a.cid.name}</b>:<b>Annonymous</b>}:  {a.comment}</p>
                          <button className="btn btn-danger" onClick={()=>{deletefn(a._id)}} >Delete </button>
                        </div>
                      </div>
                    </div>
                          );
                        })
                      ) : (
                        <div class="card card-body">
                          <div className="main">
                            <div class="card" style={{ width: "18rem;" }}>
                              <div class="card-body">
                                <h5 class="card-title">No data</h5>

                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ViewUpdate