import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";

function ViewProgramRequests() {
    const [programreq, setpreq] = useState([])


    useEffect(()=>{
        axiosInstance.post(`/viewPgmRequests/${localStorage.getItem("Trainerlogid")}`)
        .then((res)=>{
            console.log(res, "view program requests");
        })
        .catch((err)=>{
            console.log(err, 'program req error');
        })
    },[])

    const approvefn = (id)=>{
        axiosInstance.post(`/Approvepgm/${id}`)
        .then((res)=>{console.log(res, 'approved program');})
        .catch((err)=>{console.log(err, 'appove program error');})
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
              View Program Requests
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
              <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {programreq.length ? (
                    programreq.map((a) => {
                      return (
                        <div class="col">
                          <div class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <button onClick={()=>{approvefn(a._id)}} class="btn btn-primary">
                                Approve
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            No Programs available at the moment
                          </h5>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProgramRequests;
