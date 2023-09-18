import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import ApproveDoc from "./ApproveDoc";
import { useNavigate } from "react-router-dom";

function ViewDoctor() {
  const [docdata, setddata] = useState([
    { name: "doc1", email: "testmail1", empid: 1, gender: "male" },
    { name: "doc2", email: "testmail2", empid: 2, gender: "female" },
  ]);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllDoctors`)
      .then((res) => {
        console.log(res, "doc");
        if (res.data.msg == "No Data obtained ") {
          setddata([]);
        } else {
          setddata(res.data.data);
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
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Approve Doctors
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ApproveDoc />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              View all Doctors
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container">
                <div className="row">
                  {docdata.length ? (
                    docdata.map((a) => {
                      return (
                        <div class="col-4">
                          <div class="card">
                          {a.certificate ? (
                                  <img
                                    src={`http://localhost:4002/${a.certificate}`}
                                    height={200}
                                    class="card-img-top"
                                    alt="..."
                                  />
                                ) : <p>No image found</p>}
                            <div class="card-body">

                              <h5 class="card-title">Doctor name : {a.name}</h5>
                              <h6 class="card-title">
                                Specialization : {a.specialization}
                              </h6>
                              <p class="card-text">Email : {a.email}</p>
                              <p class="card-text">Contact : {a.contact}</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDoctor;
