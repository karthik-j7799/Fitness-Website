import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";

function NavTrainer() {
  return (
    <div>
      <header class="header_section"  style={{zIndex:"3000"}}>
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <Link class="navbar-brand" to="/home">
              <img src={logo} alt="" />
              <span>Health Empire</span>
            </Link>
            <div class="container" style={{ display: "block" }}>
                <div class="custom_nav2">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div class="d-flex  flex-column flex-lg-row align-items-center">
                      <ul class="navbar-nav  ">
                        <li class="nav-item">
                          <Link class="nav-link" to="/home">
                            Home{" "}
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/about">
                            About{" "}
                          </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/trainerprofile">
                          Profile
                        </Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/TrainerChat" class="nav-link">
                            Chat
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/trainer/addprogram" class="nav-link">
                            Add Programs
                          </Link>
                        </li>
                        
                        
                        
                        <li class="nav-item">
                          {" "}
                          <Link
                            class="nav-link"
                            onClick={() => {
                              localStorage.clear();
                              alert("Logged out");
                              window.location.reload(false);
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavTrainer;
