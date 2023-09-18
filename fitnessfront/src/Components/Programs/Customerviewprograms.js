import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Customerviewprograms() {
  const [allprograms, setallprograms] = useState([]);
  const [subscribed, setsubscribed] = useState([]);

  const Navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
    
  },[pathname]);

  useEffect(() => {
    axiosInstance
      .post(`/viewPgms`)
      .then((res) => {
        console.log(res, "all unsubscribed pgm data ");
        if (res.data.data != undefined) {
          setallprograms(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewSubscriptionsByCId/${localStorage.getItem("CustomerLogId")}`)
      .then((res) => {
        console.log(res, "subscribed data ");
        if (res.data.data != undefined) {
          setsubscribed(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const subscribe = (id) => {
    axiosInstance
      .post(`/subscribePgm`, {
        pid: id,
        cid: localStorage.getItem("CustomerLogId"),
      })
      .then((res) => {
        console.log(res, "subscribed");
        alert("Subscribed");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err, "sub error");
      });
  };

  const unsubscribe = (id) => {
    axiosInstance
      .post(`/unsubscribePgmByCId/${localStorage.getItem("CustomerLogId")}`, {
        pid: id,
      })
      .then((res) => {
        console.log(res)
        alert("UnSubscribed");
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-top">
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
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {allprograms.length ? (
                    allprograms.map((a) => {

                      const b = []
                      for(let i of subscribed){
                        b.push(i.pid._id)
                      }

                      if(b.includes(a._id)){
                        return null
                      }
                      else{
                        return (
                          <div class="col-4" key={a._id}>
                            <div class="card">
                              <div class="card-body">
                                <h2 class="card-title">{a.title}</h2>
                                <h6>{a.category}</h6>
                                <p class="card-text">{a.description}</p>
                                <button
                                  onClick={() => {
                                    subscribe(a._id);
                                  }}
                                  class="btn btn-primary"
                                >
                                  Subscribe
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    
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
              My SubScriptions
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse \"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {subscribed.length ? (
                    subscribed.map((a) => {
                      return (
                        <div class="col-4" key={a._id}>
                          <div class="card">
                            <div class="card-body">
                              <h2 class="card-title">{a.pid.title}</h2>
                              <h6>{a.category}</h6>
                              <p class="card-text">{a.pid.description}</p>
                              <Link
                                className="btn btn-primary"
                                style={{ margin: "20px" }}
                                to={`/Customer/CustomerViewTutorials/${a.pid._id}`}
                              >
                                {" "}
                                View Program
                              </Link>
                              <button
                                onClick={() => {
                                  unsubscribe(a.pid._id);
                                }}
                                class="btn btn-primary"
                              >
                                UnSubScribe
                              </button>
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

export default Customerviewprograms;
