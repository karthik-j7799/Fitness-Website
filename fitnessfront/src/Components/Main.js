import React from "react";
import carousal1 from "../Assets/img/carousel-1.jpg";
import carousal2 from "../Assets/img/carousel-2.jpg";
import carousal3 from "../Assets/img/carousal-3.jpg";
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
import Usermain from "./Usermain";
import { Link } from "react-router-dom";
function Main({auth}) {
  if(auth==0){
    return (
      <div className="main">
        <section class="result_section">
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
                  <Link to='/register/cusreg'>Get started</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about_section layout_padding">
          <div class="container">
            <div class="heading_container">
              <h2>About Health Empire</h2>
            </div>
            <div class="box">
              <div class="img-box">
                <img src={about} alt="" />
              </div>
              <div class="detail-box">
                <p>
                At health Empire, we are passionate about empowering individuals to live their best lives through valuable information, guidance, and motivation. Our platform is designed to provide you with a wide array of topics, spanning health, fitness, nutrition, mental well-being, lifestyle, and more.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </section>
        <section class="us_section layout_padding">
          <div class="container">
            <div class="heading_container">
              <h2>Why Choose Us</h2>
            </div>
            <div class="container">
             
             <div className="row">
             <div class="col">
                <div class="img-box">
                  <img src={u2} alt="" />
                </div>
                <div class="detail-box">
                  <h5>HEALTHY NUTRITION PLAN</h5>
                  <p>
                  Our nutrition plan is a comprehensive guide designed to help you achieve optimal health and well-being through balanced and nutritious eating. It emphasizes the importance of whole, natural foods while considering your individual goals and lifestyle. 
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="img-box">
                  <img src={u3} alt="" />
                </div>
                <div class="detail-box">
                  <h5>Best Trainers</h5>
                  <p>
                  At Health Empire, we take immense pride in curating a team of the best trainers and doctors who are dedicated to helping you achieve your health and fitness goals. Our commitment to excellence is evident in every aspect of our services, ensuring that you receive the highest level of care and expertise.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="img-box">
                  <img src={u4} alt="" />
                </div>
                <div class="detail-box">
                  <h5>Quality Courses</h5>
                  <p>
                  At Health Empire, we are committed to providing you with the best courses and trainer videos that are designed to empower and enrich your knowledge and skills. Our platform is carefully curated to offer a diverse range of top-notch courses and training videos across various fields, ensuring that you have access to the highest quality content.
                  </p>
                </div>
              </div>
             </div>
            </div>
          </div>
        </section>
      
        
      </div>
    );
  }
  else{
    return <Usermain/>
  }
  
}

export default Main;
