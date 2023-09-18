import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import profilepic from "../Assets/img/customerprofile.jpeg"
import axiosInstance from "../../baseurl";

function DocProfile() {


  const [colwidth, setcolwidth] = useState("col-12");
  const [colwidth2, setcolwidth2] = useState("col-3");

  const [profile, setprofile] = useState({});
  const [data, setdata] = useState({
    name: "",
    aadhar: "",
    contact: "",
    specialization: "",
    email: "",
  });

  
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`Doctorlogid`) == null) {
      Navigate(`/home`);
    }
  },[])

  
  useEffect(() => {
    axiosInstance
      .post(`/viewDoctorById/${localStorage.getItem("Doctorlogid")}`)
      .then((res) => {
        console.log(res, "result");
        setprofile(res.data.data);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const deletefn = () => {
    let x = prompt("Are you sure you want to delete? (Yes/No) ");
    if (x.toLowerCase() == "yes") {
      axiosInstance
        .post(`/deleteDrById/${localStorage.getItem("Doctorlogid")}`)
        .then((res) => {
          console.log(res);
          localStorage.clear();
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("did not delete");
    }
  };

  const submitfn = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/editDoctorById/${localStorage.getItem("Doctorlogid")}`, data)
      .then((res) => {
        if (res.data.status == 500) {
          console.log(res);
          alert(res.data.msg);
        } else {
          console.log("Submitted", res);
          alert(res.data.msg);
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const widthfn = () => {
    if (colwidth == "col-12") {
      setcolwidth("col-4");
      setcolwidth2("col-12");
    } else {
      setcolwidth("col-12");
      setcolwidth2("col-3");
    }
  };

  return (
    <div
      className="productdiv1"
      style={{ minHeight: "500px", padding: "100px 50px" }}
    >
      <div style={{ position: "relative", top: "90px" }}>
        <h2 style={{ textAlign: "center" }}>
          {" "}
          Hi {profile.name}. Welcome to your profile.
        </h2>

        <div className="container">
          <div className="row">
            <div className={`${colwidth}`}>
              <div class="card card-body">
                <div className="main">
                  <div className="row">
                    {/* <div className={`${colwidth2}`}>
                      <img src="https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg" />
                    </div> */}
                    <div className="col">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Name : {profile.name}</h5>

                          <p class="card-text">
                            Specialization : {profile.specialization}{" "}
                          </p>
                          <p class="card-text">
                            Aadhar Number : {profile.aadhar}{" "}
                          </p>

                          <p class="card-text">Email : {profile.email} </p>
                          <p class="card-text">Contact : {profile.contact} </p>

                          <button
                            class="btn btn-primary"
                            style={{ margin: "5px 20px" }}
                            onClick={deletefn}
                          >
                            Delete Profile
                          </button>
                          <button
                            class="btn btn-primary"
                            style={{ margin: "0px 20px" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample1"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample2"
                            onClick={() => {
                              widthfn();
                            }}
                          >
                            Edit Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-8`}>
              <div
                class="collapse multi-collapse"
                id="multiCollapseExample1"
                style={{
                  position: "relative",

                  margin: "0px 0px 100px",
                }}
              >
                <div class="card card-body">
                  <div className="main">
                    <form onSubmit={submitfn}>
                      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                        <div class="wrapper wrapper--w680">
                          <div class="card card-4">
                            <div class="card-body">
                              <h2 class="title"> Profile Edit Form</h2>
                              <div class="row row-space">
                                <div class="col-12">
                                  <div class="input-group">
                                    <label class="label"> Name</label>
                                    <input
                                      class="input--style-4"
                                      type="text"
                                      name="name"
                                      value={data.name}
                                      onChange={changefn}
                                      required
                                    />
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="input-group">
                                    <label class="label">Aadhar</label>
                                    <input
                                      class="input--style-4"
                                      type="tel"
                                      name="aadhar"
                                      value={data.aadhar}
                                      minLength={12}
                                      maxLength={12}
                                      onChange={changefn}
                                      required
                                    />
                                  </div>
                                </div>

                                <div class="col-6">
                                  <div class="input-group">
                                    <label class="label">Contact</label>
                                    <input
                                      class="input--style-4"
                                      type="tel"
                                      minLength="10"
                                      maxLength="10"
                                      name="contact"
                                      value={data.contact}
                                      onChange={changefn}
                                      required
                                    />
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="input-group">
                                    <label class="label">Email</label>
                                    <input
                                      class="input--style-4"
                                      type="email"
                                      name="email"
                                      value={data.email}
                                      onChange={changefn}
                                      required
                                    />
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="input-group">
                                    <label class="label">Specialization</label>
                                    <input
                                      class="input--style-4"
                                      type="text"
                                      name="specialization"
                                      value={data.specialization}
                                      onChange={changefn}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="p-t-15">
                                <button class="btn btn-primary" type="submit">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default DocProfile;
