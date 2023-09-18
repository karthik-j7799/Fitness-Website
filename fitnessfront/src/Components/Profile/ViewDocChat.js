import React, { useEffect, useState } from "react";
import axiosInstance from "../../baseurl";
import { Link, useNavigate } from "react-router-dom";

function ViewDocChat({ chatid }) {
  const [chat, setchat] = useState([]);
  const [msg, setmsg] = useState("");
  const [updatestate, setupstate] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(`Doctorlogid`) == null) {
      navigate("/home");
    }
  },[]);

  useEffect(() => {
    axiosInstance
      .post(`/viewChatForDrwithCust`, {
        cid: chatid,
        drid: localStorage.getItem("Doctorlogid"),
      })
      .then((res) => {
        console.log(res, "all chat with customer by id");
        if (res.data.data != undefined) {
          setchat(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updatestate, chatid]);

  const submitfn = (e) => {
    setupstate((prevState) => !prevState);
    e.preventDefault();
    axiosInstance
      .post(`/createChat`, {
        cid: chatid,
        drid: localStorage.getItem("Doctorlogid"),
        msg: msg,
        from: "Doctor",
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
          padding: "50px",
          width: "100%",
          margin: "auto",
        
        }}
      >
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
            <p>No chat</p>
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

export default ViewDocChat;
