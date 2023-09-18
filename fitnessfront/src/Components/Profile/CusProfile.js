import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axiosInstance from "../../baseurl";

function CusProfile() {

  const [profile, setprofile] = useState({
    name: "",
    age: "",
    city: "",
    pincode: "",
    district: "",
    contact: "",
    email: "",
    height:"",
    weight:"",
  });

  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);

  useEffect(() => {
    axiosInstance
      .post(`/viewCustomerById/${localStorage.getItem("CustomerLogId")}`)
      .then((res) => {
        console.log(res, "result");
        setprofile(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const changefn = (e) => {
    setprofile({ ...profile, [e.target.name]: e.target.value });
    console.log(profile);
  };

  const deletefn = () => {
    let x = prompt("Are you sure you want to delete? (Yes/No) ");
    if (x.toLowerCase() == "yes") {
      axiosInstance
        .post(`/deleteCustomerById/${localStorage.getItem("CustomerLogId")}`)
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

  const subfn = (e) => {
    console.log(profile);
    e.preventDefault();
    axiosInstance
      .post(`/editCustomerById/${localStorage.getItem("CustomerLogId")}`, profile)
      .then((res) => {
        if (res.data.status == 500) {
          console.log(res);
          alert(res.data.msg);
        } else {
          console.log("Submitted", res);
          alert("Edited")
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="productdiv1" style={{padding:"100px 30px"}}>
      <div >
        <h2 style={{ textAlign: "center" }}>
          {" "}
          Hi {profile.name}. Welcome to your profile
        </h2>
        <hr/>
      </div>
     
      <div className="container text-center" >
        <div className="row">
          <div className="col-8">
            <div className="row">
              {/* <div className="col-4">
              <img src="https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg"/>
              </div> */}
              <div className="col-12">
              <div class="card">
            
              <div class="card-body">
                <h5 class="card-title">Name : {profile.name}</h5>
                <p class="card-text">Email : {profile.email} </p>
                <p class="card-text">Contact : {profile.contact} </p>
                <p class="card-text">City : {profile.city} </p>
                <p class="card-text">District : {profile.district} </p>
                <p class="card-text">Pincode : {profile.pincode} </p>

                <button
                  class="btn btn-primary"
                  style={{ margin: "0px 20px" }}
                  onClick={deletefn}
                >
                  Delete Profile
                </button>

                <Link className="btn btn-success" to={`/cusprofile/AddUpdate`} style={{ margin: "0px 20px" }}> Add a new Update</Link>
                <Link className="btn btn-success" to={`/cusprofile/ViewUpdate`} style={{ margin: "0px 20px" }}> View My Updates</Link>
              </div>
            </div>
              </div>

            </div>
          </div>
          <div className="col-4">
            <div class="card" >
              <div class="card-body">
                <h5 class="card-title">Gender : {profile.gender}</h5>
                <p class="card-text">age : {profile.age} </p>
                <p class="card-text">height : {profile.height}cm </p>
                <p class="card-text">weight : {profile.weight}kg </p>
                <h1>
                  {" "}
                  BMI :{" "}
                  {   (profile.weight / ((profile.height / 100) ** 2)).toFixed(2)}
                </h1>
                <Link to="/cusprofile/Nutrition/"
                  class="btn btn-primary"
                  style={{ margin: "11px 20px" }}
                 
                >
                  View My Nutrition Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr/>
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
            Edit your Profile
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div class="wrapper wrapper--w680">
                  <div class="card card-4">
                    <div class="card-body">
                      <h2 class="title"> Edit your Profile</h2>
                      <form onSubmit={subfn}>
                        <div class="row row-space">
                          <div class="col-8">
                            <div class="input-group">
                              <label class="label"> Name</label>
                              <input
                                class="input--style-4"
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="input-group">
                              <label class="label">Age</label>
                              <input
                                class="input--style-4"
                                type="number"
                                name="age"
                                value={profile.age}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group">
                              <label class="label">City</label>
                              <input
                                class="input--style-4"
                                type="text"
                                name="city"
                                value={profile.city}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group">
                              <label class="label">Pincode</label>
                              <input
                                class="input--style-4"
                                type="tel"
                                minLength="6"
                                maxLength="6"
                                name="pincode"
                                value={profile.pincode}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-5">
                            <div class="input-group">
                              <label class="label">District</label>
                              <input
                                class="input--style-4"
                                type="text"
                                name="district"
                                value={profile.district}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-7">
                            <div class="input-group">
                              <label class="label">Contact</label>
                              <input
                                class="input--style-4"
                                type="tel"
                                minLength="10"
                                maxLength="10"
                                name="contact"
                                value={profile.contact}
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
                                value={profile.email}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group">
                              <label class="label">Password</label>
                              <input
                                class="input--style-4"
                                type="password"
                                name="password"
                                value={profile.password}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group">
                              <label class="label">Height (in cm)</label>
                              <input
                                class="input--style-4"
                                type="number"
                                min="1"
                                max="270"
                                name="height"
                                value={profile.height}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group">
                              <label class="label">Weight (kg)</label>
                              <input
                                class="input--style-4"
                                type="number"
                                min="1"
                                max="300"
                                name="weight"
                                value={profile.weight}
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <br />
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            required
                            name="gender"
                            onChange={changefn}
                            value={profile.gender}
                          >
                            <option>Select a Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div class="p-t-15">
                          <button class="btn btn-warning" type="submit">
                            Submit
                          </button>
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

    </div>
  );
}

export default CusProfile;
