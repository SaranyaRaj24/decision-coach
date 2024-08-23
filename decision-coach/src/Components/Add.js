import React from 'react'
import "../Components/Add.css";
import Nav from "./Nav";
import Button from "react-bootstrap/Button";


const Add = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "4rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            padding: "2rem",
          }}
        >
          <h4
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Profile Details
          </h4>

          <Section title="Attitude" />
          <Section title="Strength" />
          <Section title="Weakness" />
          <Section title="Opportunity" />
          <Section title="Threat" />

          <Button
            style={{
              backgroundColor: "#25274D",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

const Section = ({ title }) => (
  <>
    <h6 style={{ marginTop: "2rem" }}>{title}</h6>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <input
        type="text"
        placeholder={title}
        style={{ flexGrow: 1, padding: "0.5rem", marginRight: "1rem" }}
      />
      <Button style={{ backgroundColor: "#25274D" }}>Remove</Button>
    </div>
    <Button
      style={{
        backgroundColor: "#25274D",
        width: "100%",
        marginBottom: "1rem",
      }}
    >
      Add
    </Button>
  </>
);

export default Add;