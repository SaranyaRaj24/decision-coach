import React from 'react'
import Nav from "./Nav";
import "../Components/Pending.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";



const Pending = () => {
    const navigate = useNavigate();
    const still = () => {
      navigate("/Decision");
    };
  return (
    <>
      <Nav />
      <div className="background-container">
        <h5 className="header">Pending Decisions</h5>
        <div className="decision-card">
          <table>
            <thead>
              <tr>
                <th>Decision Name</th>
                <th>Decision Due Date</th>
                <th>Decision Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pending</td>
                <td>08/30/2024</td>
                <td>Check</td>
                <td>
                  <Button onClick={still}
                    style={{
                      backgroundColor: "#24305E",
                      border: "none",
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      fontSize: "1rem",
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pending;