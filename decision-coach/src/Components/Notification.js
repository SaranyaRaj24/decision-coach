import Nav from "./Nav";
import "../Components/Noti.css";
import React from 'react'
import { BsStripe } from "react-icons/bs";
import Button from "react-bootstrap/Button";

const NotificationCard = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "80rem",
          height: "40rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
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
            marginRight:"37rem",
            marginBottom:"13rem"
          }}
        >
          <h5
            style={{
              margin: "0 0 1rem 0",
              fontSize: "1.25rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Swetha S is requesting you to join their inner circle
          </h5>
          <h6
            style={{
              margin: "0 0 1.5rem 0",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            Members of that inner circle: <BsStripe />
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
              ACCEPT
            </Button>
            <Button
              style={{
                backgroundColor: "#24305E",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
              }}
            >
              REJECT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;

