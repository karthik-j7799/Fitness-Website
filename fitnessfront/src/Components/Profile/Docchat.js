import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { Link, useNavigate } from "react-router-dom";
import ViewDocChat from "./ViewDocChat";

function Docchat() {
  const [allcustomersfordoc, setallcustomersfordoc] = useState([]);
  const [unique,setunique] = useState({})
  const [setid, setsetid] = useState("");
  
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`Doctorlogid`) == null) {
      Navigate(`/home`);
    }
  },[])


  useEffect(() => {
    axiosInstance
      .post(`/ViewPatientstoChat/${localStorage.getItem("Doctorlogid")}`)
      .then((res) => {
        console.log(res, "View Customers for doc");
        if (res.data.data != undefined) {
          setallcustomersfordoc(res.data.data)
          const uniqueNames = new Set(res.data.data.map((item) => item.cid.name));
          setunique(uniqueNames)
        }
      })
      .catch((err) => {
        console.log(err);
      });
 
  }, []);

  return (
    <div className="container-top">
  
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1> Customers</h1>
            <hr />
            {Array.from(unique).length
              ? Array.from(unique).map((a) => {
                const matchingObject = allcustomersfordoc.find((item) => item.cid.name === a)
                  return (
                    <div>
                      <button
                        onClick={() => {
                          setsetid(matchingObject.cid._id);
                        }}
                        className="btn btn-primary"
                        style={{ margin: "10px" }}
                      >
                        {matchingObject.cid.name}
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="col-9">
            <ViewDocChat chatid={setid} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docchat;
