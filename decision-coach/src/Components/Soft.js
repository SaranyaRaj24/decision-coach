import Nav from "./Nav";
import "../Components/Soft.css";
import React from 'react'
import Button from "react-bootstrap/Button";


function Soft() {
  return (
    <>
      <Nav />
      <div className="content-wrapper">
        <div className="cards">
          <h4 className="card-title">Soft skills - Self Assessment</h4>
          <table className="space">
            <thead>
              <tr>
                <th className="col">Skill Name</th>
                <th className="col">Rating</th>
                <th className="col">Assessment Notes and Action Plan</th>
                <th className="col">Improvement</th>
              </tr>
            </thead>
            <tbody className="go">
              <tr>
                <td className="col">Verbal Communication</td>
                <td className="col">7</td>
                <td className="col">Good</td>
                <td className="col">
                  <div style={{display:"flex"}}>
                    <Button className="action-button">Edit</Button>
                    <Button className="action-button">Delete</Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col">Written Communication</td>
                <td className="col">2</td>
                <td className="col">Average</td>
                <td className="col">
                  <div style={{ display: "flex" }}>
                    <Button className="action-button">Edit</Button>
                    <Button className="action-button">Delete</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Button className="delete-all-button">Delete All</Button>
        </div>
      </div>
    </>
  );
}

export default Soft;