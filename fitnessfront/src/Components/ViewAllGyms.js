import React, { useEffect, useState } from "react";
import axiosInstance from "../baseurl";
import { Link, useNavigate } from "react-router-dom";

function ViewAllGyms() {
  const [search, setsearch] = useState("");
  const [gymdata, setdata] = useState([
    { name: "Gym1", email: "testmail1", empid: 1, gender: "male" },
    { name: "Gym2", email: "testmail2", empid: 2, gender: "female" },
  ]);

  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);

  useEffect(() => {
    axiosInstance
      .post(`/viewGyms`)
      .then((res) => {
        console.log(res, "Gym");
        if (res.data.msg == "No Data obtained ") {
          setdata([]);
        } else {
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
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              // data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              View Gyms
              <input
                class="form-control me-2"
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                {/* cusdata details mapped */}
                {gymdata.length ? (
                  <>
                    <div class="row">
                      {/* <div class="col-1"><h3> Reg No. </h3></div> */}
                      <div class="col-2">
                        <h4> Name </h4>
                      </div>
                      <div class="col-3">
                        <h4> Email </h4>
                      </div>
                      <div class="col-3">
                        <h4> Contact </h4>
                      </div>
                      <div class="col-2">
                        <h4> District </h4>
                      </div>
                      <div className="col-2"></div>
                    </div>
                    <hr />
                  </>
                ) : null}
                {gymdata.length ? (
                  gymdata.map((a) => {
                    if (a.name.toLowerCase().includes(search.toLowerCase())) {
                      return (
                        <>
                          <div class="row">
                            <div class="col-2">
                              <p> {a.name} </p>
                            </div>
                            <div class="col-3">
                              <p> {a.email} </p>
                            </div>
                            <div class="col-3">
                              <p> {a.contact} </p>
                            </div>
                            <div class="col-2">
                              <p> {a.district} </p>
                            </div>
                            <div className="col-2">
                              <Link className="btn btn-primary" to={`/Customer/ViewGym/${a._id}`}> Book now</Link>
                            </div>
                          </div>
                          <hr />
                        </>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllGyms;
