import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../baseurl";

function CustomerViewTutorials() {
  const { id } = useParams(); // pgm id
  const [viewtutorial, setviewtutorial] = useState({});

  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);
  useEffect(() => {
    axiosInstance
      .post(`/viewtutorialByPgmId/${id}`)
      .then((res) => {
        console.log(res, "view tutorials by pgm id");
        if (res.data.data != undefined) {
          setviewtutorial(res.data.data);
        } else {
          setviewtutorial([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-top">
      <div style={{ padding: "20px" }}>
        <div class="accordion" id="accordionExample">
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
                View All Videos
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
                    {viewtutorial.length ? (
                      viewtutorial.map((a) => {
                        return (
                          <div className="col-4">
                            <Link to={`/Customer/ViewTutorial/${a._id}`}>
                              <div class="card" >
                                <div class="card-body">
                                  <h5 class="card-title">{a.title}</h5>
                                  <p class="card-text">
                                    Category:{a.category}
                                   
                                    Description:{a.description}
                                  </p>

                                  <video height={200} width={200}>
                                    <source
                                      src={`http://localhost:4002/${a.video.originalname}`}
                                    />
                                  </video>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div class="col-12">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">
                              No Tutorials available at the moment
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
    </div>
  );
}

export default CustomerViewTutorials;
