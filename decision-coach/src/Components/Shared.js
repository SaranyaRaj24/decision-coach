import React from 'react'
import Nav from "./Nav";
import "../Components/Shared.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";



const Shared = () => {
    const navigate = useNavigate();
    const knot = () => {
      navigate("/Show");
    };
  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
        <Nav />
      </div>
      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "80rem",
          height: "40rem",
          margin: "0 auto", 
          padding: "2rem", 
          boxSizing: "border-box", 
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
            justifyContent: "center", 
            marginTop:"5rem",
            marginLeft:"37rem"
          }}
        >
          <Button
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
          >
            Show Pending Decisions
          </Button>
          <Button onClick={knot}
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
          >
            Show All Decisions
          </Button>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <h5
            style={{
              backgroundColor: "white",
              textAlign: "center",
              margin: 0,
              padding: "0.5rem 1rem",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            No Pending Decisions
          </h5>
        </div>
      </div>
    </>
  );
};

export default Shared;
