import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../baseurl";

function ViewTrainerPrograms() {
  const { id } = useParams();
  const [approvedpg, setapprovedpgm] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);

  
  useEffect(() => {
    console.log(id);
    axiosInstance
      .post(`/viewPgmByTrainerId/${id}`)
      .then((res) => {
        console.log(res, " programs");
        if (res.data.data != undefined) {
          setapprovedpgm(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Approvepgm = (id)=>{
    axiosInstance.post(`/Approvepgm/${id}`)
    .then((res)=>{console.log(res, ' approved pgm')
    alert('Program Approved')
    window.location.reload(false)
  })
    .catch((err)=>{console.log(err);})
  }

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
              View Programs
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
                  {approvedpg.length
                    ? approvedpg.map((a) => {
                        return (
                          <div className="col-4">
                            <div class="card" >
                              <div class="card-body">
                                <h5 class="card-title">{a.title}</h5>
                                <p class="card-text">
                                  Category:{a.category}
                                  <hr />
                                  Description:{a.description}
                                </p>
                                {a.isactive ? (
                                  <Link
                                    className="btn btn-primary"
                                    to={`/Admin/ViewProgramTutorials/${a._id}`}
                                  >
                                    View Program
                                  </Link>
                                ) : (
                                  <button
                                    className="btn btn-primary"
                                    onClick={()=>{Approvepgm(a._id)}}
                                  >
                                    Approve Program
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTrainerPrograms;
