import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";

function NavAdmin() {
  return (
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <Link class="navbar-brand" to="/Admin/Adminpage">
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
                        <Link class="nav-link" to="/Admin/AdminPage">
                          Home{" "}
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/Admin/ViewCustomer" class="nav-link">
                          View Customers
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/Admin/ViewDoctor" class="nav-link">
                          View Doctors
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/Admin/ViewTrainer" class="nav-link">
                          View Trainers
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/Admin/ViewGym" class="nav-link">
                          View Gyms
                        </Link>
                      </li>

                      <li class="nav-item">
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
  );
}

export default NavAdmin;
