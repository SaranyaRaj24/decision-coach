
import React, { useState } from "react";
import Nav from "./Nav";
import "../Components/Time.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdArrowDropdown } from "react-icons/io";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Time = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All Tags"); 
  const navigate = useNavigate();

  const handleAddDecisionClick = () => navigate("/Decision");
  const handleTimelineViewClick = () => navigate("/Time");
  const handleHowamIDoing = () => navigate("/How");
  const handleTableview = () => navigate("/Total");


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
    handleClose();
  };

  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "80rem",
          height: "42rem",
          position: "absolute",
        }}
      >
        <div className="buttonn-container">
          <div style={{ width:"5rem"}}>
            <Button
              onClick={handleAddDecisionClick}
              style={{
                backgroundColor: "#24305E",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1rem",
                marginRight: "26rem",
              }}
            >
              Add Decision
            </Button>
          </div>
        </div>

        <div className="button-group">
          <Button onClick={handleTableview} style={buttonStyle}>
            TABLE VIEW
          </Button>

          <Button onClick={handleTimelineViewClick} style={buttonStyle}>
            TIMELINE VIEW
          </Button>

          <Button onClick={handleHowamIDoing} style={buttonStyle}>
            HOW AM I DOING ?
          </Button>
        </div>

        <div className="tag-container">
          <h5 className="tag">
            Show Pending Decisions
            <Switch {...label} defaultChecked />
          </h5>

          <div className="dropdown-container">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={dropdownButtonStyle}
            >
              {selectedTag} <IoMdArrowDropdown style={{ fontSize: "2rem" }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {[
                "Advanced tags",
                "Sharpen the saw",
                "Time span",
                "Outcome",
                "Decision maturity",
                "Financial outcome",
              ].map((tag) => (
                <MenuItem key={tag} onClick={() => handleSelectTag(tag)}>
                  {tag}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "aliceblue" }} />
              <TimelineConnector style={{ backgroundColor: "aliceblue" }} />
            </TimelineSeparator>
            <TimelineContent style={{ fontWeight: "bold" }}>
              AUGUST 2024
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "aliceblue" }} />
              <TimelineConnector style={{ backgroundColor: "aliceblue" }} />
            </TimelineSeparator>
            <TimelineContent style={{ fontWeight: "bold" }}>
              Test
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "aliceblue" }} />
              <TimelineConnector style={{ backgroundColor: "aliceblue" }} />
            </TimelineSeparator>
            <TimelineContent style={{ fontWeight: "bold" }}>
              Pending
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "aliceblue" }} />
              <TimelineConnector style={{ backgroundColor: "aliceblue" }} />
            </TimelineSeparator>
            <TimelineContent style={{ fontWeight: "bold" }}>
              JULY 2024
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "aliceblue" }} />
            </TimelineSeparator>
            <TimelineContent style={{ fontWeight: "bold" }}>
              Check
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};


const buttonStyle = {
  backgroundColor: "#24305E",
  border: "none",
  color: "#fff",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  margin: "0.5rem",
 
};

const dropdownButtonStyle = {
  width: "8rem",
  textAlign: "left",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  marginLeft: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  color: "#000", 
  marginRight:"4rem"
};

export default Time;
