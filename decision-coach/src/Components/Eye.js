import React from 'react'
import Nav from "./Nav";
import "../Components/Eye.css";
import { useNavigate } from "react-router-dom";

const Eye = () => {
    const navigate = useNavigate();
    const fix = () => {
      navigate("/Total");
    };
  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        style={{ backgroundColor: "#AAABB8", width: "80rem", height: "40rem", position:"absolute"}}
      >
        <div className="card-container">
          <div className="carde">
            <div className="card-body">
              <p>
                <span className="label">Decision Name:</span> Check
              </p>
              <p>
                <span className="label">Decision Details:</span> gggg
              </p>
              <p>
                <span className="label">Decision Reasons:</span> kkkk
              </p>
              <p>
                <span className="label">Decision Due Date:</span> 2024-07-14
              </p>
              <p>
                <span className="label">Decision Taken Date:</span> 2024-07-11
              </p>
              <p>
                <span className="label">Selected Tags:</span> Career
              </p>
              <button onClick={fix} className="card-button" style={{ width: "10rem" }}>
                Go Back
              </button>
              <br></br>
              <button className="card-button">
                Share The Above Decision in Inner Circle
              </button>
              <br></br>
              <h5>Comments</h5>
              <h6>No comments shared yet</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eye;
