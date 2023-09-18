import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../baseurl";

function ViewTutorialFull() {
  const { id } = useParams(); // tutorial id
  const [videodata, setvdata] = useState({});
  const [test, settest] = useState("");

  useEffect(() => {
    console.log(id);
    axiosInstance
      .post(`/viewtutorialById/${id}`)
      .then((res) => {
        console.log(res, "video");
        if (res.data.data != undefined) {
          setvdata(res.data.data);
          settest("hello");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ padding: "100px 40px" }}>
      <Link
        className="btn btn-primary"
        to={`/Customer/CustomerViewTutorials/${videodata.pgmid}`}
      >
        {" "}
        Back to Tutorials
      </Link>
      <h1> {videodata.title}</h1>
      <p> Chapter : {videodata.chapterNo}</p>
      {test.length ? (
        <video width="100%" height="500" controls>
          <source src={`http://localhost:4002/${videodata.video.filename}`} />
        </video>
      ) : null}
    </div>
  );
}

export default ViewTutorialFull;
