import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";

function Feedback() {
  const [contact, setcontact] = useState([]);
  const [search,setsearch] = useState('')
  useEffect(() => {
    axiosInstance
      .post(`/viewContacts`)
      .then((res) => {
        console.log(res, " view contacts");
        if (res.data.data != undefined) {
          setcontact(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="container-top">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              // data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              View all Feedbacks
              <input class="form-control me-2" onChange={(e)=>{setsearch(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
      
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                {/* cusdata details mapped */}
                {contact.length ? (
                 <>
                  <div class="row">
                    <div class="col"><h3> Name </h3></div>
                   
                    <div class="col"><h3> Email  </h3></div>
                   
                    <div class="col-8"><h3> Feedback  </h3></div>
                  </div>
                  <hr/>
                  </>
                ) : null}
                {contact.length ? (
                  contact.map((a) => {
                  
                    if(a.name.toLowerCase().includes(search.toLowerCase())){
                      return (
                        <><div class="row">
                        <div class="col">{a.name}</div>
                       
                        <div class="col">{a.email}</div>
                        
                        <div class="col-8">{a.msg}</div>
                      </div>
                      <hr/></>
                      );
                    }
                    
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
              {/* cusdata details mapped */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
