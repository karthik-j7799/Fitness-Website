import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseurl";
function GymReg() {
  const loginpage = useNavigate()
  const [data, setdata] = useState({
    name: "",
    city: "",
    district: "",
    contact: "",
    email: "",
    password: "", 
    regno: "",
  });
  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const subfn = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/registerGym", data)
      .then((res) => {
        console.log(res, "res");
        if (res.data.status == 200) {
          alert("Registered Successfully");
          loginpage('/login/gymlog')
        } else if (res.data.status == 500) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  return (
    <div>
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h2 class="title"> GYM Registration Form</h2>
              <form onSubmit={subfn}>
                <div class="row row-space">
                  <div class="col-12">
                    <div class="input-group">
                      <label class="label"> Name</label>
                      <input
                        class="input--style-4"
                        type="text"
                        name="name"
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
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="input-group">
                      <label class="label">RegNo.</label>
                      <input
                        class="input--style-4"
                        type="number"
                        name="regno"
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                  <button className="btn btn-warning" style={{width:"100%", margin:"10px"}}> Register</button>
                </div>
                
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymReg;
