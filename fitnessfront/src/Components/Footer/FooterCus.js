import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../baseurl";

function FooterCus() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const subfn = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/contactAdmin`, data)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Feedback submitted");
          window.location.reload(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="footerdiv">
      <footer class="footer-59391">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-4">
              <div class="site-logo">
                <a href="#">Health Empire</a>
              </div>
            </div>
          </div>

          <div class="copyright"></div>

          <div class="row">
            <div class="col-6">
              <h1 style={{ color: "white" }}> Contact with us</h1>
              <p style={{ color: "white" }}>
                {" "}
                Use the contact form below to get in touch with us. We are here
                to asnwer any questions you may have and provide you with the
                best service possible
              </p>
            </div>

            <div className="col-6">
              <form onSubmit={subfn}>
                <div className="row">
                  <div className="col-6">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={changefn}
                        placeholder="Enter your Name"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={changefn}
                        placeholder="Enter your email id"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div class="mb-3">
                      <textarea
                        name="msg"
                        onChange={changefn}
                        class="form-control"
                        placeholder="Comments"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <p style={{ textAlign: "right" }}>
                  {" "}
                  <button
                    style={{ margin: "20px" }}
                    className="btn btn-primary"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </p>
              </form>
            </div>
          </div>
          <div class="copyright"></div>
          <div class="row mb-5">
            <div class="col-md-6 ">
              <ul class="nav-links list-unstyled nav-left">
                <li>
                  <Link to="#">Privacy</Link>
                </li>
                <li>
                  <Link to="#">Policy</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="nav-links list-unstyled nav-right">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Customer/Customerviewprograms">View Programs</Link>
                </li>
                <li>
                  <Link to="/Customer/ViewAllTrainers">Trainers</Link>
                </li>
                <li>
                  <Link to="/Customer/ViewAllGyms">Gym</Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col ">
              <div class="copyright">
                <p>
                  <small>
                    Copyright 2023 Health Empire. All Rights Reserved.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterCus;
