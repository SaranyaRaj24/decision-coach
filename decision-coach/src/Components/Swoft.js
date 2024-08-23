import React from "react";
import "../Components/Swoft.css";
import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";



const Swoft = () => {
  const navigate = useNavigate();

  const screen = () => {
    navigate("/Link");
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#AAABB8",
          padding: "2rem",
        }}
      >
        <div style={styles.card}>
          <div style={styles.cardContent}>
            <div style={styles.analysisContainer}>
              <Button style={styles.button}>SWOT Analysis</Button>
              <div style={styles.checkboxContainer}>
                {[
                  "Attitude",
                  "Strength",
                  "Weakness",
                  "Opportunity",
                  "Threat",
                ].map((item) => (
                  <label key={item} style={styles.label}>
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
                <br></br>
                <Button style={styles.button}>Save SWOT Link</Button>
              </div>
              <br></br>
              <Button onClick={screen} style={styles.linkButton}>
                Get Link Page
              </Button>
            </div>
            <div style={styles.analysisContainer}>
              <Button style={styles.button}>Soft-Skills Analysis</Button>
              <div style={styles.checkboxContainer}>
                {[
                  "Verbal Communication",
                  "Written Communication",
                  "Time Management",
                ].map((item) => (
                  <label key={item} style={styles.label}>
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button style={styles.button}>Save Soft-Skill Link</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    width: "40rem",
    height: "auto", 
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    padding: "2rem",
    boxSizing: "border-box",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  analysisContainer: {
    flex: 1,
    margin: "0 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "#24305E",
    border: "none",
    color: "#fff",
    marginBottom: "1rem",
    padding: "10px 20px",
    cursor: "pointer",
  },
  linkButton: {
    backgroundColor: "#24305E",
    border: "none",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    marginLeft: "10rem", 
    width:"10rem"

  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    marginBottom: "0.5rem",
  },
};

export default Swoft;
