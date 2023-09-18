import React, { useEffect, useState } from "react";
import axiosInstance from "../baseurl";
import { useNavigate, useParams } from "react-router-dom";

function ViewGymByID() {
  const { id } = useParams();
  const [profile, setprofile] = useState({ img: [{ originalname: "" }] });
  const [msg, setmsg] = useState("");

  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);


  useEffect(() => {
    axiosInstance
      .post(`/viewGymById/${id}`)
      .then((res) => {
        console.log(res, "result");
        setprofile(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);
  const bookGym = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/bookGym`, {
        cid: localStorage.getItem(`CustomerLogId`),
        gymid: profile._id,
        message: msg,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Booked this gym");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="productdiv1 container-top" style={{ minHeight: "700px" }}>
      <div>
        <h2 style={{ textAlign: "center" }}>Welcome to {profile.name}.</h2>
        <div class="card card-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div class="card">
                  <div class="card-body" style={{ textAlign: "center" }}>
                    <h3 class="card-text">Email : {profile.email} </h3>
                    <h3 class="card-text">Contact : {profile.contact} </h3>
                  </div>
                </div>
              </div>
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  {profile.img.map((a) => {
                    if (a.filename != undefined) {
                      return (
                        <div class="carousel-item active">
                          <img
                            src={`http://localhost:4002/${a.originalname}`}
                            class="d-block w-100"
                            alt="..."
                            height={700}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="input-group mb-3">
          <form style={{width:"100%"}} onSubmit={bookGym}>
            <div class="input-group mb-3" >
              <input
                type="text"
                class="form-control"
                placeholder="Send a message"
                required
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={(e) => {
                  setmsg(e.target.value);
                }}
              />
              <button
                class="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Book Gym
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewGymByID;
