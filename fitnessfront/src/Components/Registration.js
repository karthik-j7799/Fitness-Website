import React from "react";
import { Link } from "react-router-dom";
import regcus from '../Assets/img/regcus.jpeg'
import regdoc from '../Assets/img/regdoc.jpg'
import regtrainer from '../Assets/img/regtrainer.jpg'

function Registration() {
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
                <Link to="/Register/cusreg" class="btn btn-warning">
                  Customer Registration
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
                <Link to="/Register/docreg" class="btn btn-warning">
                  Doctor Registration
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
                <Link to="/Register/trainerreg" class="btn btn-warning">
                  Trainer Registration
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
                <Link to="/Register/gymreg" class="btn btn-warning">
                  Gym Registration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
