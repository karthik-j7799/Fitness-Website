
import React from "react";
import about from "../Assets/img/about.jpg";
function About() {
  return (
    <div style={{padding:"100px"}}>
       <div class="container">
          <div class="row">
            <div class="col-6">
              <div>
                <div class="detail-box">
                  <div class="heading_container">
                    <h2>About us</h2>
                  </div>
                  <h1 class="display-3 text-uppercase mb-5">
                    Welcome to Health Empire
                  </h1>
                </div>
                <h4 class="text-body mb-5">
                  At Health Empire, we believe that fitness is more than just a
                  hobby - it's a way of life.
                </h4>
                <p class="text-dark mb-0">
                  Our mission is to help people of all ages and fitness levels
                  achieve their health and fitness goals by providing
                  high-quality resources and support.
                  <hr />
                </p>
                <p class="text-dark mb-0">
                  We offers a wide range of resources, including workout
                  plans,expert tips and tricks from doctors and psychiatrists,
                  to help you stay motivated and on track.
                  <hr />
                  We also offer a supportive community of like-minded
                  individuals who are all working towards their fitness goals.
                  At Health Empire, we believe in promoting a healthy, balanced
                  lifestyle that incorporates both physical fitness and mental
                  well-being.
                  <hr />
                  We're passionate about helping people lead happier, healthier
                  lives, and we hope to inspire you to join us on this journey.
                </p>
              </div>
           
            </div>
            <div class="col-6" > 
              <div class="img-box">
              
                <img src={about} alt="" width="100%" />
              </div>
            </div>
          </div>
          <br/> <br/>
          <div className="row">
            
          <div>
            <h1> Why Choose us?</h1>
                <ul>
                  <li>
                    <p>
                      Experienced Fitness Professionals: Our team of experienced
                      fitness professionals has years of experience working with
                      clients of all ages and fitness levels. We're committed to
                      helping you achieve your goals, whatever they may be.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Comprehensive Resources: Our website offers a wide range
                      of resources, including workout plans, nutrition advice,
                      and expert tips and tricks. We've got everything you need
                      to succeed on your fitness journey.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Supportive Community: Join our supportive community of
                      like-minded individuals who are all working towards their
                      fitness goals. Our members are here to support and
                      encourage you every step of the way.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Personalized Approach: We understand that everyone's
                      fitness journey is unique. That's why we offer a
                      personalized approach to fitness, tailored to your
                      individual needs and goals.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Accessibility: Our website is accessible from anywhere in
                      the world, at any time. Whether you're working out at
                      home, at the gym, or on the go, you can access our
                      resources and support whenever you need it.
                    </p>
                  </li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  );
}

export default About;
