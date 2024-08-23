import Nav from "./Nav";
import "../Components/Profile.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();

  const nob = () => {
    navigate("/Add");
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
            maxWidth: "600px", 
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            padding: "2rem",
          }}
        >
          <h5
            style={{
              fontWeight: "bold",
              color: "black",
              backgroundColor: "white",
              textAlign: "center",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          >
            Personal Details
          </h5>
          <h6 style={{ marginBottom: "1rem" }}>
            Username: <span style={{ fontSize: "1rem" }}>Saranya Raj</span>
          </h6>
          <h6 style={{ marginBottom: "2rem" }}>
            Email:{" "}
            <span style={{ fontSize: "1rem" }}>saranyaraj123@gmail.com</span>
          </h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Button style={{ backgroundColor: "#25305E" }} onClick={nob}>
              Add Personal Detail
            </Button>
            <FontAwesomeIcon
              icon={faUserPlus}
              onClick={nob}
              size="2x"
              color="#25305E"
              style={{ cursor: "pointer" }}
            />
          </div>
          <h6 style={{ marginBottom: "1rem" }}>No Data Available</h6>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button style={{ backgroundColor: "#25305E", width: "100%" }}>
              Download My Decision Data
            </Button>
            <Button style={{ backgroundColor: "#25305E", width: "100%" }}>
              Download Profile Data
            </Button>
          </div>
          <Button
            style={{
              backgroundColor: "#25305E",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;