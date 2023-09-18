import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseurl";

function Adminpage() {
  const [doc, setdoc] = useState([]);
  const [trainer, settrainer] = useState([]);
  const [cust, setcust] = useState([]);
  const [gym, setgym] = useState([]);



  const [divstyle, setdivstyle] = useState("col-2");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);

  useEffect(() => {
    axiosInstance
      .post(`/viewCustomers`)
      .then((res) => {
        console.log(res, " all cust");
        if (res.data.data != undefined) {
          setcust(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewAllDoctors`)
      .then((res) => {
        console.log(res, " all Docs");
        if (res.data.data != undefined) {
          setdoc(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewGyms`)
      .then((res) => {
        console.log(res, " all Gyms");
        if (res.data.data != undefined) {
          setgym(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewtrainers`)
      .then((res) => {
        console.log(res, " all Trainers");
        if (res.data.data != undefined) {
          settrainer(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, []);



  if (localStorage.getItem("adminlog") == 1) {
    return (
      <div class="container-top" style={{ minHeight: "400px" }}>
        <h1> Hi Admin. Welcome to your admin panel</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className={`${divstyle}`}>
              <Link class="btn btn-primary" to={"/admin/feedback"}>
                Feedbacks
              </Link>
            </div>
            <div className="col">
              <div class="alert alert-primary" role="alert">
                <h1>
                  <span class="badge bg-secondary">{doc.length}</span>{" "}
                  {doc.length == 1 ? (
                    <span>Doctor </span>
                  ) : (
                    <span>Doctors </span>
                  )}
                  available
                </h1>
              </div>
              <div class="alert alert-primary" role="alert">
                <h1>
                  {" "}
                  <span class="badge bg-secondary">{trainer.length}</span>{" "}
                  {trainer.length == 1 ? (
                    <span>Trainer </span>
                  ) : (
                    <span>Trainers </span>
                  )}
                  available
                </h1>
              </div>
              <div class="alert alert-primary" role="alert">
                <h1>
                  <span class="badge bg-secondary">{gym.length}</span>{" "}
                  {gym.length == 1 ? <span>Gym </span> : <span>Gyms </span>}
                  available
                </h1>
              </div>
              <div class="alert alert-primary" role="alert">
                <h1>
                  {" "}
                  <span class="badge bg-secondary">{cust.length}</span>{" "}
                  {cust.length == 1 ? (
                    <span>Customer </span>
                  ) : (
                    <span>Customers </span>
                  )}
                  Registered
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ minHeight: "400px", padding: "100px" }}
        class="container-top"
      >
        <h1 style={{ textAlign: "center", position: "relative" }}>
          Please{" "}
          <Link style={{ fontSize: "50px" }} to="/Admin">
            log in{" "}
          </Link>
          to see admin panel{" "}
        </h1>
      </div>
    );
  }
}

export default Adminpage;
