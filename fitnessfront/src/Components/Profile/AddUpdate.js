import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../baseurl";

function AddUpdate() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);


  const [data, setdata] = useState({
    img: null,
    comment: "",
  });

  const changefn = (e) => {
    if (e.target.name == "img") {
      setdata({ ...data, img: e.target.files[0] });
    } else {
      setdata({ ...data, [e.target.name]: e.target.value });
    }
  };
  const subfn = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/addCustUpdate/${localStorage.getItem(`CustomerLogId`)}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Added a new update");
          Navigate("/cusprofile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container-top container-top">
        <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
          <div class="wrapper wrapper--w680">
            <div class="card card-4">
              <div class="card-body">
                <h2 class="title">Add a new Update</h2>
                <form onSubmit={subfn}>
                  <div class="row row-space">
                    <div class="mb-3">
                      <input
                        class="form-control"
                        type="file"
                        name="img"
                        onChange={changefn}
                        id="formFile"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Comments
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="comment"
                        onChange={changefn}
                      ></textarea>
                    </div>
                  </div>
                  <div class="p-t-15">
                    <button class="btn btn-warning" type="submit">
                      Submit
                    </button>
                  </div>
                  <hr />
                  <Link to="/Register/cusreg">
                    {" "}
                    Don't have an account? Sign up now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUpdate;
