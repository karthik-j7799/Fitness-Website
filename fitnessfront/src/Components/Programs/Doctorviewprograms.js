import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";

function Doctorviewprograms() {
  const [allprograms, setallprograms] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewPgms`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ minHeight: "400px", margin: "50px" }}>
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
              View All Programs
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {allprograms.length ? (
                    allprograms.map((a) => {
                      return (
                        <div class="col">
                          <div class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#" class="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            No Programs available at the moment
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
  );
}

export default Doctorviewprograms;
