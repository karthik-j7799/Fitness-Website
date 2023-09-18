import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { useNavigate } from "react-router-dom";

function ApproveDoc() {
  const [docapprdata, setapprddata] = useState([
    { name: "doc1", email: "testmail1", empid: 1, gender: "male" },
    { name: "doc2", email: "testmail2", empid: 2, gender: "female" },
  ]);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminlog") == null) {
      navigate("/Admin/Adminpage");
    }
  }, []);
 
  useEffect(() => {
    axiosInstance
      .post(`/showrequestsDoctor`)
      .then((res) => {
        console.log(res, "doc req");
        if (res.data.msg == "No Data obtained ") {
          setapprddata([]);
        } else {
          setapprddata(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const apprfn = (id) => {
    axiosInstance
      .post(`/approveDoctor/${id}`)
      .then((res) => {
        alert("Approved");
        window.location.reload(false)
      })
      .catch((err) => {
        alert("Error");
      });
  };
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          {docapprdata.length ? (
            docapprdata.map((a) => {
              return (
                <div class="col-4">
                  <div class="card" >
                  {a.certificate ? (
                                  <img
                                    src={`http://localhost:4002/${a.certificate}`}
                                    height={200}
                                    class="card-img-top"
                                    alt="..."
                                  />
                                ) : <p>No image found</p>}
                    <div class="card-body">
                      <h5 class="card-title">
                        Doctor name: {a.name} {a.specialization}
                      </h5>
                      <p class="card-text">Number: {a.contact}</p>
                      <p class="card-text">Email: {a.email}</p>
                      <button
                        onClick={() => {
                          apprfn(a._id);
                        }}
                        class="btn btn-primary"
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div class="card card-body">
              <div className="main">
                <div class="card" style={{ width: "18rem;" }}>
                  <div class="card-body">
                    <h5 class="card-title">No Doctors to Approve at the moment</h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApproveDoc;
