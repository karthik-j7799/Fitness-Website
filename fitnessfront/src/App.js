import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/styles/Footer.css";
import "./Assets/styles/Register.css";
import "./Assets/styles/Style.css";
import "./Assets/styles/Style2.css";
import "./Assets/styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CustomerReg from "./Components/Registration/CustomerReg";
import DocReg from "./Components/Registration/DocReg";
import Trainerreg from "./Components/Registration/Trainerreg";
import GymReg from "./Components/Registration/GymReg";
import CustomerLog from "./Components/Login/CustomerLog";
import DoctorLog from "./Components/Login/DocLog";
import TrainerLog from "./Components/Login/TrainerLog";
import GymLog from "./Components/Login/GymLog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main";
import Registration from "./Components/Registration";
import About from "./Components/About";
import Login from "./Components/Login";
import AdminLog from "./Components/Admin/Admin";
import Adminpage from "./Components//Admin/Adminpage";
import ViewDoctor from "./Components/Admin/ViewDoctor";
import ViewCustomer from "./Components/Admin/ViewCustomer";
import ViewGym from "./Components/Admin/ViewGym";
import ViewTrainer from "./Components/Admin/ViewTrainer";
import CusProfile from "./Components/Profile/CusProfile";
import DocProfile from "./Components/Profile/DocProfile";
import GymProfile from "./Components/Profile/GymProfile";
import TrainerProfle from "./Components/Profile/TrainerProfle";
import AddProgram from "./Components/Programs/AddProgram";
import ViewPrograms from "./Components/Programs/ViewPrograms";
import Customerviewprograms from "./Components/Programs/Customerviewprograms";
import ViewAllTrainers from "./Components/ViewAllTrainers";
import ViewAllGyms from "./Components/ViewAllGyms";
import ViewGymByID from "./Components/ViewGymByID";
import Doctorviewprograms from "./Components/Programs/Doctorviewprograms";
import ViewProgramRequests from "./Components/Programs/ViewProgramRequests";
import ViewTrainerPrograms from "./Components/Admin/ViewTrainerPrograms";
import ViewProgramTutorials from "./Components/Admin/ViewProgramTutorials";
import CustomerViewTutorials from "./Components/Programs/CustomerViewTutorials";
import ViewTutorialFull from "./Components/Programs/ViewTutorialFull";
import Nutrition from "./Components/Profile/Nutrition";
import CreateChat from "./Components/Profile/CreateChat";
import Chat from "./Components/Profile/Chat";
import GymRequests from "./Components/Gym/GymRequests";
import Docchat from "./Components/Profile/Docchat";
import ViewDocChat from "./Components/Profile/ViewDocChat";
import AddUpdate from "./Components/Profile/AddUpdate";
import ChatWithTrainer from "./Components/Profile/ChatWithTrainer";
import CreateChatForTrainer from "./Components/Profile/CreateChatforTrainer";
import TrainerChat from "./Components/Profile/TrainerChat";
import Feedback from "./Components/Admin/Feedback";
import ViewUpdate from "./Components/Profile/ViewUpdate";

function App() {
  const [auth, setauth] = useState(0);
  useEffect(() => {
    if(localStorage.getItem("adminlog")!=null){
      setauth(5)
    } else if (localStorage.getItem("CustomerLogId") != null) {
      setauth(1);
    } else if (localStorage.getItem("Doctorlogid") != null) {
      setauth(2);
    } else if (localStorage.getItem("Trainerlogid") != null) {
      setauth(3);
    } else if (localStorage.getItem("Gymlogid") != null) {
      setauth(4);
    } else {
      setauth(0);
    }
  });

  return (
    <BrowserRouter basename="projects/health_empire">
      {/* <button onClick={()=>{setauth(0)}}> nolog</button>
      <button onClick={()=>{setauth(1)}}> Customer</button>
      <button onClick={()=>{setauth(2)}}> Doctor</button>
      <button onClick={()=>{setauth(3)}}> Trainer</button>
      <button onClick={()=>{setauth(4)}}> Gym</button> */}
      <div className="App">
        <Navbar auth={auth} />

        <Routes>
          <Route exact path="/" element={<Main auth={auth} />} />
          <Route path="/Admin" element={<AdminLog />} />
          <Route path="/Admin/Adminpage" element={<Adminpage />} />
          <Route path="/Admin/ViewDoctor" element={<ViewDoctor />} />
          <Route path="/Admin/ViewCustomer" element={<ViewCustomer />} />
          <Route path="/Admin/ViewGym" element={<ViewGym />} />
          <Route path="/Admin/ViewTrainer" element={<ViewTrainer/>}/>
          <Route path="/Admin/ViewTrainerPrograms/:id" element={<ViewTrainerPrograms/>}/>
          <Route path="/Admin/ViewProgramTutorials/:id" element={<ViewProgramTutorials/>}/>
          <Route path="/admin/feedback" element={<Feedback/>}/>


          <Route path="/Home" element={<Main auth={auth} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register/cusreg" element={<CustomerReg />} />
          <Route path="/Register/docreg" element={<DocReg />} />
          <Route path="/Register/trainerreg" element={<Trainerreg />} />
          <Route path="/Register/gymreg" element={<GymReg />} />
          <Route path="/Login/cuslog" element={<CustomerLog />} />
          <Route path="/Login/doclog" element={<DoctorLog />} />
          <Route path="/Login/trainerlog" element={<TrainerLog />} />
          <Route path="/Login/gymlog" element={<GymLog />} />
          

          
          <Route path="/DocChat" element={<Docchat/>}/>
          <Route path="/TrainerChat" element={<TrainerChat/>}/>

      
          
          <Route path="/cusprofile/createChat/Chat/:id" element={<Chat/>}/>
          <Route path="/cusprofile/createChatWithTrainer/Chat/:id" element={<ChatWithTrainer/>}/>

          
          <Route path="/cusprofile/createChatDoctor" element={<CreateChat/>}/>
          <Route path="/cusprofile/createChatTrainer" element={<CreateChatForTrainer/>}/>

          <Route path="/cusprofile/Nutrition" element={<Nutrition/>}/>
          <Route path="/cusprofile/AddUpdate" element={<AddUpdate/>}/>
          <Route path="/cusprofile/ViewUpdate" element={<ViewUpdate/>}/>
          


          <Route path="/cusprofile" element={<CusProfile/>}/>
          <Route path="/docprofile" element={<DocProfile/>}/>
          <Route path="/gymprofile" element={<GymProfile/>}/>
          <Route path="/trainerprofile" element={<TrainerProfle/>}/>

          <Route path="/trainer/addprogram" element={<AddProgram/>}/>
          <Route path="/trainer/viewProgram/:id" element={<ViewPrograms/>}/>
          <Route path="/trainer/ViewProgramRequests" element={<ViewProgramRequests/>}/>

          <Route path="/Customer/Customerviewprograms" element={<Customerviewprograms/>}/>
          <Route path="/Customer/CustomerViewTutorials/:id" element={<CustomerViewTutorials/>}/>
          <Route path="/Customer/ViewTutorial/:id" element={<ViewTutorialFull/>}/>
          
          <Route path="/Doctor/Doctorviewprograms" element={<Doctorviewprograms/>}/>

          <Route path="/Customer/ViewAllTrainers" element={<ViewAllTrainers/>}/>
          <Route path="/Customer/ViewAllGyms" element={<ViewAllGyms/>}/>
          <Route path="/Customer/ViewGym/:id" element={<ViewGymByID/>} />
          <Route path="/Gym/GymReq" element={<GymRequests/>}/>
          <Route path="/*" element={<img width={'100%'} height={700} src="https://miro.medium.com/v2/resize:fit:750/0*QOZm9X5er1Y0r5-t"/>}/>

        </Routes>

        <Footer auth={auth} />
      </div>
    </BrowserRouter>
  );
}

export default App;
