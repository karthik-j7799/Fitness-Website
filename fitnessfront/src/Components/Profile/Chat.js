import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../baseurl";

function Chat() {
  const { id } = useParams();
  const [msg, setmsg] = useState("");
  const [chat, setchat] = useState([]);
  const [updatestate, setupstate] = useState(false);
  
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(`CustomerLogId`) == null) {
      Navigate(`/home`);
    }
  },[]);

  useEffect(() => {
    axiosInstance
      .post(`/viewChatForDrwithCust`, {
        cid: localStorage.getItem("CustomerLogId"),
        drid: id,
      })
      .then((res) => {
        console.log(res, "view chat");

        if (res.data.data != undefined) {
          setchat(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updatestate]);

  const submitfn = (e) => {
    setupstate((prevState) => !prevState);
    e.preventDefault();
    axiosInstance
      .post(`/createChat`, {
        cid: localStorage.getItem("CustomerLogId"),
        drid: id,
        tid:null,
        msg: msg,
        from: "customer",
      })
      .then((res) => {
        console.log(res);
        setmsg("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="chatdiv"
        style={{
          minHeight: "400px",
          padding: "150px",
          width: "100%",
          margin: "auto",
         
        }}
      >
        <Link className="btn btn-primary" to={`/cusprofile/createChatDoctor`}>
          {" "}
          Back
        </Link>

        <div
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            // minHeight: "300px",
            padding: "50px",
            margin: "10px",
            height: "300px",
            overflowY: "scroll",
           
          }}
        >
          {chat.length ? (
            chat.map((a) => {
              let x;
              if (a.from == "customer") {
                x = a.cid.name;
              } else {
                x = a.drid.name;
              }
              return (
                <div>
                  <p>
                    {" "}
                    <b> {x}: </b> {a.msg}
                  </p>
                </div>
              );
            })
          ) : (
            <p>Doctor: Hi. How can i help you?</p>
          )}
        </div>
        <form onSubmit={submitfn}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-describedby="basic-addon2"
              value={msg}
              onChange={(e) => {
                setmsg(e.target.value);
              }}
            />
            <span class="input-group-text" id="basic-addon2">
              <button> Send</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
