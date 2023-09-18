import React, { useEffect, useState } from "react";
import about from "../Assets/img/about-img.png";
import s1 from "../Assets/img/s-1.jpg";
import s2 from "../Assets/img/s-2.jpg";
import s3 from "../Assets/img/s-3.jpg";
import s4 from "../Assets/img/s-4.jpg";
import s5 from "../Assets/img/s-5.jpg";
import s6 from "../Assets/img/s-6.jpg";
import link from "../Assets/img/link.png";
import u1 from "../Assets/img/u-1.png";
import u2 from "../Assets/img/u-2.png";
import u3 from "../Assets/img/u-3.png";
import u4 from "../Assets/img/u-4.png";
import result from "../Assets/img/result-img.jpg";
import { Link } from "react-router-dom";
import axiosInstance from "../baseurl";

function Usermain() {
  const [clients, setclients] = useState([{ name: "" }]);
  const [progress, setprogress] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewCustomers`)
      .then((res) => {
        console.log(res);
        if (res.data.data != undefined) {
          setclients(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axiosInstance
      .post(`/viewCustomerProgressforHome`)
      .then((res) => {
        console.log(res, "all cust progress");
        if (res.data.data != undefined) {
          setprogress(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section class="result_section" style={{ position: "fixed" }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="img-box">
                <img src={result} alt="" />
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <div class="detail-box">
                <h2>
                  BUILT TO BRING <br />
                  BEST RESULTS
                </h2>
                <p>
                  Achieve your health and wellness goals with our comprehensive
                  fitness programs and expert guidance. Whether you're a
                  seasoned fitness enthusiast or just starting your fitness
                  journey, we're here to support and inspire you every step of
                  the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ minHeight: "650px" }}></div>
      <div
        style={{
          position: "relative",
          background: "white",
        }}
      >
        {/* our services */}
        <section class="service_section layout_padding" style={{ zIndex: "2" }}>
          <div class="container">
            <div class="heading_container">
              <h2>Our Services</h2>
            </div>
            <div class="service_container">
              <div class="box">
                <img src={s1} alt="" />
                <h6 class="visible_heading">CROSSFIT TRAINING</h6>
                <div class="link_box">
                <a href ="/projects/health_empire/Customer/Customerviewprograms" target="_self">
                    <img src={link} alt="" />
                  </a>
                  <h6>CROSSFIT TRAINING</h6>
                </div>
              </div>
              <div class="box">
                <img src={s2} alt="" />
                <h6 class="visible_heading">FITNESS</h6>
                <div class="link_box">
                <a href ="/projects/health_empire/Customer/Customerviewprograms" target="_self">
                    <img src={link} alt="" />
                  </a>
                  <h6>FITNESS</h6>
                </div>
              </div>
              <div class="box">
                <img src={s3} alt="" />
                <h6 class="visible_heading">DYNAMIC STRENGTH TRAINING</h6>
                <div class="link_box">
                <a href ="/projects/health_empire/Customer/Customerviewprograms" target="_self">
                    <img src={link} alt="" />
                  </a>
                  <h6>DYNAMIC STRENGTH TRAINING</h6>
                </div>
              </div>
              <div class="box">
                <img src={s4} alt="" />
                <h6 class="visible_heading">HEALTH</h6>
                <div class="link_box">
                <a href ="/projects/health_empire/Customer/Customerviewprograms" target="_self">
                    <img src={link} alt="" />
                  </a>
                  <h6>HEALTH</h6>
                </div>
              </div>
              <div class="box">
                <img src={s5} alt="" />
                <h6 class="visible_heading">WORKOUT</h6>
                <div class="link_box">
                <a href ="/projects/health_empire/Customer/Customerviewprograms" target="_self">
                    <img src={link} alt="" />
                  </a>
                  <h6>WORKOUT</h6>
                </div>
              </div>
              <div class="box">
                <img src={s6} alt="" />
                <h6 class="visible_heading">STRATEGIES</h6>
                <div class="link_box">
                <a href ="/projects/health_empire/Customer/Customerviewprograms" target="_self">
                    <img src={link} alt="" />
                  </a>
                  <h6>STRATEGIES</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/569/77/desktop-wallpaper-gym-quotes-gym.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/851/869/desktop-wallpaper-best-bodybuilding-quotes-for-motivating-you-in-the-gym-gym-quotes.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://quotesbook.com/images/quotes/preview/fitness-quote-work-hard-stay-humble-3256.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* cust news feed */}
        <div className="container" style={{ zIndex: "2", margin: "50px auto" }}>
          <div className="row">
            {progress.length ? <h1> What our customers have to say</h1> : null}
            {progress.length
              ? progress.map((a) => {
                  return (
                    <div className="col-4">
                      <div class="card">
                        <img
                          src={`http://localhost:4002/${a.img.originalname}`}
                          class="card-img-top"
                          alt="..."
                          height={400}
                        />
                        <div class="card-body">
                          <p class="card-text">{a.cid?<b>{a.cid.name}</b>:<b>Annonymous</b>}:  {a.comment}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <hr />
        {/* iframe news */}
        <div className="container" style={{ zIndex: "2" }}>
          <div class="row">
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
                    News
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div
                      className="col"
                      style={{
                        height: "500px",
                        overflowY: "scroll",
                        zIndex: "2",
                      }}
                    >
                      <iframe
                        height={800}
                        width={`100%`}
                        src="https://www.news18.com/lifestyle/health-and-fitness/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Usermain;
