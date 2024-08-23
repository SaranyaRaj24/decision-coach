import React from "react";
import "../Components/Skill.css";
import Nav from "./Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Skill = () => {
  const navigate = useNavigate();

  const que = () => {
    navigate("/Soft");
  };

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
          marginTop:"2rem"
        }}
      >
        <div
          style={{
            maxWidth: "800px", 
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            padding: "2rem",
            marginTop:"3rem"
          }}
        >
          <h4
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          >
            Soft Skills - Self Assessment
          </h4>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "2rem",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#f4f4f4",
                  borderBottom: "2px solid #ddd",
                }}
              >
                <th style={{ padding: "0.5rem", textAlign: "left" }}>SI.No</th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>
                  Skill Name
                </th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>
                  Rating (1-10)
                </th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>
                  Confidence Level
                </th>
                <th style={{ padding: "0.5rem", textAlign: "left" }}>
                  Assessment Notes and Action Plan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  1
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  Verbal Communication
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  />
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  />
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  <textarea
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  2
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  Written Communication
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  />
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  />
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #ddd" }}
                >
                  <textarea
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      boxSizing: "border-box",
                    }}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <Button
            onClick={que}
            style={{
              backgroundColor: "#25305E",
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
            }}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
};

export default Skill;