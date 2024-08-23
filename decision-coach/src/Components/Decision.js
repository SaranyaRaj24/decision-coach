import React from "react";
import "../Components/Dec.css";
import Nav from "./Nav";
import Button from "react-bootstrap/Button";


const Decision = () => {
  return (
    <>
      <Nav />
      <div
        style={{ backgroundColor: "#AAABB8", width: "80rem", height: "130rem" }}
      >
    
        <div className="decision-container">
          <div className="card">
            <div className="input-container">
              <h6 className="header">Decision Name</h6>
              <input
                type="text"
                placeholder="Enter the Decision name"
                className="input"
              />
            </div>
            <div className="input-container">
              <h6 className="header">Decision Due Date</h6>
              <input type="date" className="input date-input" />
            </div>
            <div className="input-container">
              <h6 className="header">Decision Taken Date</h6>
              <div className="clear-container">
                <input type="date" className="input date-input" />
                <Button className="button">CLEAR</Button>
              </div>
            </div>
            <div className="input-container">
              <h6 className="header">Decision Details</h6>
              <input
                type="text"
                placeholder="Enter the statement"
                className="input"
              />
            </div>
            <div className="input-container">
              <h6 className="header">Decision Reasons</h6>
              <div className="clear-container">
                <input
                  type="text"
                  placeholder="Enter the decision reason"
                  className="input reason-input"
                />
                <Button className="button">REMOVE</Button>
              </div>
            </div>
            <br />
            <br />
            <Button className="add-button">ADD ANOTHER REASON</Button>
            <br />
            <br />
            <div className="input-container">
              <h5 className="header">Select Tags</h5>
              <input
                type="text"
                placeholder="Select Tags..."
                className="input tags-input"
              />
              <br></br>
              <br></br>
              <div className="tags-grid">
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Personal</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Career</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Work</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Family</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Money</label>
                  </div>
                </div>
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Health</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Spiritual</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Long Term</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Short Term</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Goal</label>
                  </div>
                </div>
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Safety</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Gone mad</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Good</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Bad</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Regret</label>
                  </div>
                </div>
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Hobby</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Travel</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Hasty</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Time sensitive</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Financial Loss</label>
                  </div>
                </div>
              </div>
            </div>
            <Button className="show-advanced-tags-button">
              SHOW ADVANCED TAGS
            </Button>
            <br />
            <br />
            <div className="input-container">
              <h5 className="header">Advanced Tags</h5>
              <br />
              <div className="advanced-tags-grid">
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Board</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Brand</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Governance</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Customer</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Consultant</label>
                  </div>
                </div>
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Employee</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Expense</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Hiring</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Investment</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Legal</label>
                  </div>
                </div>
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Operational</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Policy</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Project</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Partner</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Product</label>
                  </div>
                </div>
                <div className="checkbox-group">
                  <div>
                    <input type="checkbox" />
                    <label>Prospect</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Services</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Sales</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Statutory</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Supplier</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <Button className="save-button">SAVE</Button>
              <Button className="cancel-button">CANCEL</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Decision;




