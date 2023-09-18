import React, { useEffect, useState } from "react";
import axiosInstance from "../baseurl";
import { Link, useNavigate } from "react-router-dom";

function ViewAllTrainers() {
  const [trainerdata, setdata] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);

  useEffect(() => {
    axiosInstance
      .post(`/viewtrainers`)
      .then((res) => {
        console.log(res, "trainers");
        if(res.data.data!=undefined){
          setdata(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
             View all Trainers
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
                    {/* trainerdata details mapped */}
                    {trainerdata.length ? (
                      trainerdata.map((a) => {
                        return (
                          <div className="col-4">
                            <div class="card">
                                  <div class="card-body">
                                    <h5 class="card-title">{a.name}</h5>
                                    <p class="card-text">Age : {a.age}</p>
                                    <p class="card-text">Gender : {a.gender}</p>
                                    <p class="card-text">Contact : {a.contact}</p>
                                    <p class="card-text">Email : {a.email}</p>
                                    <Link to={`/cusprofile/createChatWithTrainer/Chat/${a._id}`} class="btn btn-primary">Chat</Link>
                                  
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
  );
}

export default ViewAllTrainers;
