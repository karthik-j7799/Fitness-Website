import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import Plan from "./Plan";
import { Link, useNavigate } from "react-router-dom";
function Nutrition() {
  const [profile, setprofile] = useState({});
  const [BMI, setBMI] = useState("");
  const Navigate = useNavigate()
  useEffect(()=>{
    
    if(localStorage.getItem(`CustomerLogId`)==null){
      Navigate(`/home`)
    }
  },[])

  useEffect(() => {
    axiosInstance
      .post(`/viewCustomerById/${localStorage.getItem("CustomerLogId")}`)
      .then((res) => {
        console.log(res, "result");
        setprofile(res.data.data);
        setBMI(
          (res.data.data.weight / ( (res.data.data.height / 100)) ** 2).toFixed(2)
        );
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  let x;
  let y;
  if (BMI < 18.5) {
    x = "red";
    y = "Underweight";
  } else if (BMI > 18.5 && BMI < 24.9) {
    x = "green";
    y = "Normal";
  } else if (BMI > 25 && BMI < 29.9) {
    x = "red";
    y = "Overweight";
  } else if (BMI > 30) {
    x = "red";
    y = "Obese";
  }

  return (
    <div>
      <div className="container container-top" >
        <div className="row">
          <div className="col-4">
            <div class="card">
              {/* <img src={profilepic} class="card-img-top" alt="alt" height={"200px"} width={"100px"}/> */}
              <div class="card-body">
                <h5 class="card-title">
                  {" "}
                  {profile.name} <hr />
                  {profile.gender}, {profile.age} years old
                </h5>
                <p class="card-text"> </p>
                <p class="card-text">height : {profile.height}cm </p>
                <p class="card-text">weight : {profile.weight}kg </p>
                <h1>
                  BMI :<span style={{ color: x }}>{BMI}</span>
                </h1>
                <h2> {y}</h2>
                <div class="alert alert-primary" role="alert">
                  The required BMI level is between 18.5 - 24.9
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  {" "}
                  Need more assistance? Chat with Experts
                </h5>
                <Link to="/cusprofile/createChatDoctor" className="btn btn-primary" style={{margin:"5px"}}>
                  {" "}
                  Start Chatting With Doctor
                </Link>
                <Link to="/cusprofile/createChatTrainer" className="btn btn-primary" style={{margin:"5px"}}>
                  {" "}
                  Start Chatting with Trainer
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <h1> Based on your BMI, you are {y}</h1>
            <hr />
            <h4> Here are some nutrition plans you might like</h4>
            <Plan BMI={BMI} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
