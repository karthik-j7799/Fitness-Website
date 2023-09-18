import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../baseurl";

function ViewProgramTutorials() {
  const { id } = useParams();

  const [approvelist, setapprlist] = useState([]);
  const [approvedlist, setapprovedlist] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);

  
  useEffect(() => {
    axiosInstance
      .post(`/viewTutorialRequestsByPgmId/${id}`)
      .then((res) => {
        console.log(res, " Tutorial request list");
        if (res.data.data != undefined) {
          setapprlist(res.data.data);
        } else {
          setapprlist([]);
        }
      })
      .catch((err) => {
        console.log(err, "error tutorial req list");
      });

    axiosInstance
      .post(`/viewtutorialByPgmId/${id}`)
      .then((res) => {
        console.log(res, "approved tutorials");
        if (res.data.data != undefined) {
          setapprovedlist(res.data.data);
        } else {
          setapprovedlist([]);
        }
      })
      .catch((err) => {
        console.log(err, "approved tutorial error");
      });
  }, []);

  const approvefn = (id) => {
    axiosInstance
      .post(`/approvetutorial/${id}`)
      .then((res) => {
        console.log("approve result", res);
        if (res.data.status == 200) {
          alert("Approved Tutorial");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err, "err");
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
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              View Approved Tutorials
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container text-center">
                <div className="row">
                  {approvedlist.length ? (
                    approvedlist.map((a) => {
                      return (
                        <div className="col-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">{a.title}</h5>
                              <p class="card-text">
                                Category:{a.category}
                                <hr />
                                Description:{a.description}
                              </p>
                              <video height={300} width={400} controls>
                                <source
                                  src={`http://localhost:4002/${a.video.filename}`}
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">No Data</h5>
                        </div>
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
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Approve Tutorials
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container text-center">
                <div className="row">
                  {approvelist.length ? (
                    approvelist.map((a) => {
                      return (
                        <div className="col-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">{a.title}</h5>
                              <p class="card-text">
                                {a.category}, {a.description}
                              </p>
                              <video height={300} width={400} controls>
                                <source
                                  src={`http://localhost:4002/${a.video.filename}`}
                                />
                              </video>
                              <br />
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  approvefn(a._id);
                                }}
                              >
                                Approve tutorial
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">No Data</h5>
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

export default ViewProgramTutorials;
