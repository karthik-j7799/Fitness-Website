import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../baseurl";
import { useNavigate } from "react-router-dom";
function DocReg() {
  const Navigate = useNavigate()
  const [data, setdata] = useState({
    name: "",
    aadhar: "",
    specialization:"",
    contact: "",
    email: "",
    password: "", 
    certificate: null,   
  });
  const changefn = (e) => {
    if(e.target.name=='certificate'){
      setdata({...data, certificate : e.target.files[0]})
    }
    else{
    setdata({ ...data, [e.target.name]: e.target.value });
    } 
  };
  const subfn = (e) => {
    e.preventDefault();
    console.log(data);
    axiosInstance
      .post("/registerDoctor", data, { headers: {
        'Content-Type': 'multipart/form-data', 
      },})
      .then((res) => {
        console.log(res, "res");
        if (res.data.status == 200) {
          alert("Registered Successfully");
          Navigate("/login/doclog")
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
              <h2 class="title">Doctor Registration Form</h2>
              <form onSubmit={subfn}>
                <div class="row row-space">
                  <div class="col-8">
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
                  <div class="col-12">
                    <div class="input-group">
                      <label class="label">Aadhar Number</label>
                      <input
                        class="input--style-4"
                        type="tel"
                        minLength={12}
                        maxLength={12}
                        name="aadhar"
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                
                  <div class="col-6">
                    <div class="input-group">
                      <label class="label">Specialization</label>
                      <input
                        class="input--style-4"
                        type="text"
                        name="specialization"
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
                      <label class="label">Certificate</label>
                      <input
                        class="input--style-4"
                        type="file"
                        name="certificate"
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                 
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
  );
}

export default DocReg;
