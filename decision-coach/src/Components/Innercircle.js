import Nav from "./Nav";
import "../Components/Circle.css"
import Button from "react-bootstrap/Button";


const Innercircle = () => {
  const outerBoxStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
  };

  const cardContainerStyle = {
    backgroundColor: "#f9f9f9", 
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "46rem",
    height:"21rem",
    marginTop:"5rem",
    marginRight:"25rem"
  };

  const cardStyle = {
    borderRadius: "10px",
   
  };

  const cardTitleStyle = {
    width: "20rem",
    margin: "1rem 0",
    padding: "0.5rem",
    borderRadius: "5px",
  };

  const cardContentStyle = {
    marginTop: "2rem",
  };

  const membersHeadingStyle = {
    padding: " 0.5rem",
    margin: 0,
  };

  const addMembersHeadingStyle = {
    padding: " 0.5rem",
    margin: 0,
  };

  const memberListStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    marginLeft:"0.5rem",
  };

  const removeButtonStyle = {
    backgroundColor: "#24305E",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    marginLeft: "1rem",
    cursor: "pointer",
  };

  const searchInputStyle = {
    width: "calc(100% - 2rem)",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "1rem",
  };

  return (
    <>
      <div>
        <Nav />
      </div>

      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "80rem",
          height: "40rem",
        }}
      >
        <div style={outerBoxStyle}>
          <div style={cardContainerStyle}>
            <div style={cardStyle}>
              <div className="dot"></div>
              <h4 style={cardTitleStyle}>Inner Circle Details</h4>
              <div style={cardContentStyle}>
                <h5 style={membersHeadingStyle}>Members:</h5>
                <div style={memberListStyle}>
                  Swetha S (swethaorchids61@gmail.com) - Accepted
                  <Button style={removeButtonStyle}>REMOVE</Button>
                </div>
                <h5 style={addMembersHeadingStyle}>Add Members:</h5>
                <input
                  type="text"
                  placeholder="Search by email"
                  style={searchInputStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innercircle;
