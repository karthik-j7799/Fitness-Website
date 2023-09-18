import React from "react";
import { Link } from "react-router-dom";
import regcus from '../Assets/img/regcus.jpeg'
import regdoc from '../Assets/img/regdoc.jpg'
import regtrainer from '../Assets/img/regtrainer.jpg'

function Login() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src={regcus}
                class="card-img-top"
                alt="Customer Picture"
              />
              <div class="card-body">
                <Link to="/login/cuslog" class="btn btn-warning">
                  Customer Login
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src={regdoc}
                class="card-img-top"
                alt="Doctor Picture"
              />
              <div class="card-body">
                <Link to="/login/doclog" class="btn btn-warning">
                  Doctor Login
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src={regtrainer}
                class="card-img-top"
                alt="Doctor Picture"
              />
              <div class="card-body">
                <Link to="/login/trainerlog" class="btn btn-warning">
                  Trainer Login
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src={regtrainer}
                class="card-img-top"
                alt="Doctor Picture"
              />
              <div class="card-body">
                <Link to="/login/gymlog" class="btn btn-warning">
                  Gym Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
