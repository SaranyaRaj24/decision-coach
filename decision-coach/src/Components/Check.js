import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "../Components/Check.css";



const Check = () => {
  const navigate = useNavigate();

  const popi = () => {
    navigate("/Eye");
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
    marginTop:"5rem",
    marginLeft:"4rem",
  };

  const headingStyle = {
    margin: "0 0 8px",
    fontSize: "16px",
    color: "#333",
  };

  const paragraphStyle = {
    margin: "0",
    fontSize: "14px",
    color: "#666",
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        style={{ backgroundColor: "#AAABB8", width: "80rem", height: "40rem", position:"fixed" }}
      >
        <div onClick={popi} style={cardStyle}>
          <h5 style={headingStyle}>Check</h5>
          <p style={paragraphStyle}>Shared By: Dhanusha R</p>
        </div>
      </div>
    </>
  );
};

export default Check;
