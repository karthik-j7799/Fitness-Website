import React from "react";
import { Link } from "react-router-dom";

function FooterDoc() {
  return (
    <div className="footerdiv" >
      <footer class="footer-59391">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-4">
              <div class="site-logo">
                <a href="#">Health Empire</a>
              </div>
            </div>
           
          </div>
          <div class="row mb-5">
            <div class="col-md-6 ">
              <ul class="nav-links list-unstyled nav-left">
                <li>
                  <Link to="#">Privacy</Link>
                </li>
                <li>
                  <Link to="#">Policy</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="nav-links list-unstyled nav-right">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/DocChat">Chat</Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col ">
              <div class="copyright">
                <p>
                  <small>Copyright 2023 Health Empire. All Rights Reserved.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterDoc;
