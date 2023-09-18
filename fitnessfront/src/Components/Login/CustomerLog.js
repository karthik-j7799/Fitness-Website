import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseurl";
function CustomerLog() {


  const mainnavigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("CustomerLogId") != null) {
      mainnavigate("/home");
    }
  },[]);

  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const subfn = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/loginCustomer", data)
      .then((res) => {
        console.log(res, "res");
        
        if (res.data.status == 500) {
          alert(res.data.msg);
          alert("Please try again")
        }
        else{
          alert("Successfully Logged in")
          localStorage.setItem("CustomerLogId", res.data.user._id);
          window.location.reload(false);
        }
      
       
      })
      .catch((err) => {
        console.log(err, "err");
        alert("Something went wrong. Please try again");
        if (err.message == "Request failed with status code 500") {
          alert("Something went wrong. Please try again");
        }
      });
  };
 
  return (
    <div className="container-top-form" >
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h2 class="title">Customer Login Form</h2>
              <form onSubmit={subfn}>
                <div class="row row-space">
                  <div class="col-12">
                    <div class="input-group">
                      <label class="label"> Email</label>
                      <input
                        class="input--style-4"
                        type="email"
                        name="email"
                        onChange={changefn}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
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
                </div>
                <div class="p-t-15">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
                <hr/>
                <Link to='/Register/cusreg'> Don't have an account? Sign up now</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLog;
