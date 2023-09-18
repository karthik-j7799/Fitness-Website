import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { Link, useNavigate } from "react-router-dom";

function AddProgram() {
  const [data, setdata] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [programlist, setprogramlist] = useState([])

  const changefn = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const Navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem(`Trainerlogid`)==null){
      Navigate(`/home`)
    }
  },[])

 useEffect(()=>{
    axiosInstance.post(`/viewPgmByTrainerId/${localStorage.getItem(`Trainerlogid`)}`)
    .then((res)=>{console.log(res);
      if(res.data.data!=undefined){
        setprogramlist(res.data.data)}
      else{
        setprogramlist([])
      }
      }
    )
    .catch((err)=>{console.log(err);})
  },[])

  const subfn = (e) => {
    console.log(data);
    e.preventDefault();
    axiosInstance
      .post(`/addPgm/${localStorage.getItem(`Trainerlogid`)}`,data)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
          alert("Added new Program")
          window.location.reload(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="productdiv1" style={{position:"relative", top:"0px", minHeight:"00px", padding:"150px 40px", zIndex:1}}>
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
              Add Program
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div class="wrapper wrapper--w680">
                  <div class="card card-4">
                    <div class="card-body">
                      <h2 class="title">Add a Program</h2>
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
                              <option>Select a Program Category</option>
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
              View All Programs
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container text-center">
                <div class="row">
                  {programlist.length?
                  programlist.map((a) => {
                    return (
                      <div class="col-4">
                        <div class="card" >
                          
                          <div class="card-body">
                            <h5 class="card-title">{a.title}</h5>
                            <p class="card-text">
                              {a.description}
                            </p>
                            <Link to={`/trainer/viewProgram/${a._id}`} class="btn btn-primary">
                              View Program
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }):
                 
                      <div class="col-12">
                        <div class="card" >
                          
                          <div class="card-body">
                            <h5 class="card-title">No Programs to display</h5>
                            
                          </div>
                        </div>
                      </div>
                  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProgram;
