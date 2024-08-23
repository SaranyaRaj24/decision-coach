import React from 'react'
import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Link = () => {
    const navigate = useNavigate();
    const cab = () => {
      navigate("/Total");
    };
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    maxWidth: "750px", 
    margin: "1rem auto", 
    textAlign: "center",
    border: "1px solid #ddd",
    marginTop:"3rem"
  };

  const sectionTitleStyle = {
    margin: "1rem 0",
    color: "#333",
    fontWeight: "bold",
  };

  const titleStyle = {
    margin: "0",
    color: "#333",
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginleft:"15rem"
  };

  const contentStyle = {
    margin: "0",
    color: "#666",
    fontSize: "1rem",
  };

  const profiles = [
    "Attitude",
    "Strength",
    "Weakness",
    "Opportunity",
    "Threat",
  ];

  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "100vw",
          height: "37rem",
          position: "relative",
          padding: "2rem", 
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={cardStyle}>
          <h5 style={sectionTitleStyle}>Skills:</h5>
          <div style={{ ...cardStyle, maxWidth: "300px", margin: "1rem auto" }}>
            <h5 style={titleStyle}>Time Management</h5>
            <p style={contentStyle}>test</p>
          </div>
          <h5 style={sectionTitleStyle}>Profiles:</h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              width: "100%",
              maxWidth: "1200px", 
            }}
          >
            <div style={cardStyle}>
              <h5 style={titleStyle}>Attitude</h5>
            </div>
            <div style={cardStyle}>
              <h5 style={titleStyle}>Strength</h5>
            </div>
            <div style={cardStyle}>
              <h5 style={titleStyle}>Weakness</h5>
            </div>
            <div style={cardStyle}>
              <h5 style={titleStyle}>Opportunity</h5>
            </div>
            <div style={cardStyle}>
              <h5 style={titleStyle}>Threat</h5>
            </div>
          </div>
        </div>
        <Button onClick={cab}
          style={{
            backgroundColor: "#24305E",
            border: "none",
            color: "#fff",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            position: "absolute",
            bottom: "3rem",
            marginright: "10rem",
          }}
        >
          Go Back Add Decisions
        </Button>
      </div>
    </>
  );
};

export default Link;