import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { useNavigate } from "react-router-dom";

function ViewCustomer() {
  const [cusdata, setcdata] = useState([
    { name: "cus1", email: "testmail1", empid: 1, gender: "male" },
    { name: "cus2", email: "testmail2", empid: 2, gender: "female" },
  ]);

  const [search,setsearch] = useState('')

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);

  useEffect(() => {
    axiosInstance
      .post(`/viewCustomers`)
      .then((res) => {
        console.log(res, "cus");
        if (res.data.msg == "No Data obtained ") {
          setcdata([]);
        } else {
          setcdata(res.data.data);
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
              View all Customer
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
                {cusdata.length ? (
                 <>
                  <div class="row">
                    <div class="col"><h3> Name </h3></div>
                    <div class="col"><h3> Gender </h3></div>
                    <div class="col"><h3> Email  </h3></div>
                    <div class="col"><h3> Contact </h3></div>
                    <div class="col"><h3> District </h3></div>
                    <div class="col"><h3> Pincode  </h3></div>
                  </div>
                  <hr/>
                  </>
                ) : null}
                {cusdata.length ? (
                  cusdata.map((a) => {
                  
                    if(a.name.toLowerCase().includes(search.toLowerCase())){
                      return (
                        <><div class="row">
                        <div class="col">{a.name}</div>
                        <div class="col"> {a.gender}</div>
                        <div class="col">{a.email}</div>
                        <div class="col"> {a.contact}</div>
                        <div class="col"> {a.district}</div>
                        <div class="col">{a.pincode}</div>
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

export default ViewCustomer;
