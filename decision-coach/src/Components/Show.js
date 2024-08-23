import React from 'react'
import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import "../Components/Show.css";

const Show = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        style={{ backgroundColor: "#AAABB8", width: "80rem", height: "40rem", position:"fixed" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "5rem",
            marginLeft: "37rem",
            position:"relative",
          }}
        >
          <Button className="button">Show Pending Decisions</Button>
          <Button className="button">Show All Decisions</Button>
          <input
            type="text"
            placeholder="Sort by name"
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div className="carddd">
          <h5>Decision: KKK</h5>
          <h6>Dhanusha R | dhanushravi904@gmail.com</h6>
          <h6>Reasons: jjj</h6>
          <h6>Due Date: 08/01/2024</h6>
          <h6>Taken Date: 07/16/2024</h6>
          <br />
          <h5>Comments:</h5>
          <input type="text" placeholder="Add a Comment" />
          <br />
          <br />
          <div className="button-group">
            <Button className="button">Save</Button>
            <Button className="button">Save and Email</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;

