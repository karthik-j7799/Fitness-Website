import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
function Navnolog() {
  return (
    <header class="header_section"  style={{zIndex:"3000"}}>
    <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/home">
          <img src={logo} alt="" />
          <span>Health Empire</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="custom_nav2">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 "></ul>
            <form class="d-flex" role="search">
              <ul style={{marginRight:"100px", position:"relative",top:"7px"}}>
                <li class="nav-item dropdown">
                  <a
                    class="btn btn-primary"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    
                  >
                  <span style={{color:"white"}}>Login</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/Login/cuslog">
                        Customer
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Login/trainerlog">
                        Trainer
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Login/doclog">
                        Doctor
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Login/gymlog">
                        Gym
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </header>
  );
}

export default Navnolog;
