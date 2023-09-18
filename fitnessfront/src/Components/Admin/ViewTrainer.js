import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { Link, useNavigate } from "react-router-dom";
import ViewTrainerPrograms from "./ViewTrainerPrograms";

function ViewTrainer() {
  const [trainerdata, setdata] = useState([
    { name: "trainer1", email: "testmail1", empid: 1, gender: "male" },
    { name: "trainer2", email: "testmail2", empid: 2, gender: "female" },
  ]);

  const [trainerapprovedata,settapprdata] = useState([
    { name: "trainer1appr", email: "testmail1", empid: 1, gender: "male" },
    { name: "trainer2appr", email: "testmail2", empid: 2, gender: "female" },
  ])

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);

  useEffect(() => {
    axiosInstance
      .post(`/viewtrainers`)
      .then((res) => {
        console.log(res, "trainer")
        if (res.data.msg == "No Data obtained ") {
            setdata([]);
        } else {
            setdata(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

      axiosInstance
      .post(`/viewtrainerRequests`)
      .then((res) => {
        console.log(res, "trainer request")
        if (res.data.msg == "No Data obtained ") {
            settapprdata([]);
        } else {
            settapprdata(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const apprfn = (id) => {
    axiosInstance
      .post(`/approveTrainer/${id}`)
      .then((res) => {
        console.log(res);
        alert("Approved");
        window.location.reload(false)
      })
      .catch((err) => {
        alert("Error");
      });
  };
  return (
    <div class="container-top">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              View Approved Trainers
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {/* trainerdata details mapped */}
                  {trainerdata.length ? (
                    trainerdata.map((a) => {
                      return (
                        <div className="col">

                          <div class="card card-body">

                            <div className="main" >
                              <div class="card" >
                              {a.certificate ? (
                                  <img
                                    src={`http://localhost:4002/${a.certificate.filename}`}
                                    height={200}
                                    class="card-img-top"
                                    alt="..."
                                  />
                                ) : <p>No image found</p>}
                                <div class="card-body">
                                  <h5 class="card-title">{a.name}</h5>
                                  <p class="card-text">Email : {a.email}</p>
                                  <p class="card-text">Gender : {a.gender}</p>
                                  <Link className="btn btn-primary" to={`/Admin/ViewTrainerPrograms/${a._id}`}>View Trainer Programs</Link>
                                </div>
                              </div>
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
              {/* trainerdata details mapped */}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Trainers to be approved
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {/* trainerdata details mapped */}
                  {trainerapprovedata.length ? (
                    trainerapprovedata.map((a) => {
                      return (
                        <div className="col">
                          <div class="card card-body">
                            <div className="main" >
                              <div class="card" style={{height:"170px"}}>
                              {a.certificate ? (
                                  <img
                                    src={`http://localhost:4002/${a.certificate.filename}`}
                                    height={200}
                                    class="card-img-top"
                                    alt="..."
                                  />
                                ) : <p>No image found</p>}
                                <div class="card-body">
                                  <h5 class="card-title">Trainer Name : {a.name}</h5>
                                  <p class="card-text">Email : {a.email}</p>
                                  <p class="card-text">Gender : {a.gender}</p>
                                  <button
                                    onClick={() => {
                                    apprfn(a._id);
                                    }}
                                    class="btn btn-primary"
                                >
                                    Approve
                                </button>
                                </div>
                              </div>
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
              {/* trainerdata details mapped */}
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
}

export default ViewTrainer;
