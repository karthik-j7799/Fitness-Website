import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../baseurl";
import axios from "axios";

function ViewPrograms() {
  const { id } = useParams();
  const [viewtutorial, setviewtutorial] = useState({});
  const [tutorialdata, settutdata] = useState({
    title: "",
    category: "",
    video: null,
    pgmid: id,
    trainerid: localStorage.getItem("Trainerlogid"),
    description: "",
    chapterNo: "",
  });


  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`Trainerlogid`) == null) {
      Navigate(`/home`);
    }
  },[])

  const changefn = (e) => {
    if (e.target.name == "video") {
      settutdata({ ...tutorialdata, video: e.target.files[0] });
    } else {
      settutdata({ ...tutorialdata, [e.target.name]: e.target.value });
    }
  };


  useEffect(() => {
    axiosInstance
      .post(`/viewtutorialByPgmId/${id}`)
      .then((res) => {
        console.log(res, "view tutorials by pgm id");
        if (res.data.data != undefined) {
          setviewtutorial(res.data.data);
        } else {
          setviewtutorial([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const subfn = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/addtutorial`, tutorialdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert(res.data.msg);
          window.location.reload(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  return (
    <div className="productdiv1" style={{position:"relative", padding:"150px 40px", zIndex:1}}>
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
              Add a video
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
                      <h2 class="title">Add a Tutorial </h2>
                      <form onSubmit={subfn}>
                        <div class="row row-space">
                          <div class="col-12">
                            <div class="input-group">
                              <label class="label"> Title</label>
                              <input
                                class="input--style-4"
                                type="text"
                                name="title"
                                onChange={changefn}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              required
                              name="category"
                              onChange={changefn}
                            >
                              <option>Select a Tutorial Category</option>
                              <option value="Yoga">Yoga</option>
                              <option value="Workout">Workout</option>
                              <option value="Meditation">Meditation</option>
                            </select>
                          </div>
                        </div>
                        <br />
                        <div class="mb-3">
                          <label
                            for="exampleFormControlTextarea1"
                            class="form-label"
                          >
                            Description
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="description"
                            onChange={changefn}
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <div class="input-group">
                            <label class="label"> Chapter Number</label>
                            <input
                              class="input--style-4"
                              type="number"
                              name="chapterNo"
                              onChange={changefn}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="input-group">
                            <label class="label"> Upload a Tutorial</label>
                            <input
                              class="input--style-4"
                              type="file"
                              name="video"
                              onChange={changefn}
                              required
                            />
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
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              View All Videos
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="container text-center">
                <div className="row">
                  {viewtutorial.length ? (
                    viewtutorial.map((a) => {
                      return (
                        <div className="col-6">
                          <div class="card" >
                            <div class="card-body">
                              <h5 class="card-title">{a.title}</h5>
                              <p class="card-text">
                                Category:{a.category}
                                <hr />
                                Description:{a.description}
                              </p>
                              <video height={300} width={400} controls>
                                <source
                                  src={`http://localhost:4002/${a.video.filename}`}
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">
                            No Tutorials available at the moment
                          </h5>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPrograms;
