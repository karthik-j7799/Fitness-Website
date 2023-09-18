import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { useNavigate } from "react-router-dom";

function GymRequests() {
  const [gymreq, setgymreq] = useState([]);
  const [gymmembers, setgymmembers] = useState([]);

  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`Gymlogid`)==null){
      navigate("/home")
    }
  })


  useEffect(() => {
    axiosInstance
      .post(`/viewGymReqsById/${localStorage.getItem("Gymlogid")}`)
      .then((res) => {
        console.log(res, "view gym reqs");
        if (res.data.data != undefined) {
          setgymreq(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/ViewGymMembers/${localStorage.getItem("Gymlogid")}`)
      .then((res) => {
        console.log(res, "gym members");
        if (res.data.data != undefined) {
          setgymmembers(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const apprfn = (id) => {
    axiosInstance
      .post(`/acceptGymReqsById/${id}`)
      .then((res) => {
        console.log(res, "approved gym req");
        alert("Approved")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletefn = (id) => {
    axiosInstance
      .post(`/deleteGymMembersById/${id}`)
      .then((res) => {
        console.log(res, "gym req deleted successfully ");
        alert("Deleted")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-top" style={{ minHeight: "400px" }}>
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
              View Gym Requests
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container">
                <div className="row">
                  {gymreq.length ? (
                    gymreq.map((a) => {
                      return (
                        <div className="col-4">
                          <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                              <h5 class="card-title">{a.cid.name}</h5>
                              <p> Contact number : {a.cid.contact}</p>
                              <p class="card-text">
                                City : {a.cid.city}, {a.cid.district} district
                              </p>
                              <h6> Gender: {a.cid.gender}</h6>
                              <h4> Height: {a.cid.height}cm</h4>
                              <h4> Weight: {a.cid.weight}kg</h4>
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
                      );
                    })
                  ) : (
                    <div class="card">
                      {/* <img src="..." class="card-img-top" alt="..."/> */}
                      <div class="card-body">
                        <h5 class="card-title">No Requests</h5>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              View Gym Members
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container">
                <div className="row">
                  {gymmembers.length ? (
                    gymmembers.map((a) => {
                      return (
                        <div className="col-4">
                          <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                              <h5 class="card-title">{a.cid.name}</h5>
                              <p> Contact number : {a.cid.contact}</p>
                              <p class="card-text">
                                City : {a.cid.city}, {a.cid.district} district
                              </p>
                              <h6> Gender: {a.cid.gender}</h6>
                              <h4> Height: {a.cid.height}cm</h4>
                              <h4> Weight: {a.cid.weight}kg</h4>

                              <button
                                onClick={() => {
                                  deletefn(a._id);
                                }}
                                class="btn btn-primary"
                              >
                                Delete
                              </button>
                              
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div class="card">
                      {/* <img src="..." class="card-img-top" alt="..."/> */}
                      <div class="card-body">
                        <h5 class="card-title">No Members available</h5>
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

export default GymRequests;
