import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../baseurl";
import { useNavigate } from "react-router-dom";
function Trainerreg() {
  const Navigate = useNavigate()
  const [data, setdata] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    aadhar: "",
    gender: "",
    age: "",
    certificate: null,
  });
  const changefn = (e) => {
    console.log(e.target.files);
   if(e.target.name=="certificate"){
    const file = e.target.files[0];
    setdata({ ...data, certificate: file });
   }
   else{
    setdata({ ...data, [e.target.name]: e.target.value });
   }
  };
  const subfn = (e) => {
    e.preventDefault();
    console.log(data);
    axiosInstance
      .post("/registerTrainer", data, {headers: {
        'Content-Type': 'multipart/form-data',
      }})
      .then((res) => {
        console.log(res, "res");
        if (res.data.status == 200) {
          alert("Registered Successfully");
          Navigate("/login/trainerlog")
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
              <h2 class="title">Trainer Registration Form</h2>
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
                  <div class="col-12">
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
                  <div class="col-12">
                    <div class="input-group">
                      <label class="label">Aadhar Number</label>
                      <input
                        class="input--style-4"
                        type="tel"
                        name="aadhar"
                        minLength='12'
                        maxLength='12'
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                  <br />
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    required
                    name="gender"
                    onChange={changefn}
                  >
                    <option>Select a Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  <br/>
                </div>
                  <div class="col-6">
                    <div class="input-group">
                      <label class="label">Age</label>
                      <input
                        class="input--style-4"
                        type="number"
                        name="age"
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                 
                 
                  <div class="col-6">
                    <div class="input-group">
                      <label class="label">Certificate</label>
                      <input
                      style={{height:"50px", borderRadius:"5px"}}
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
                  <button class="btn btn-primary" type="submit">
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

export default Trainerreg;
