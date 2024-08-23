
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import "../Components/Total.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "@mui/material/Switch";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { MdAttachment } from "react-icons/md";


const label = { inputProps: { "aria-label": "Switch demo" } };

function Total() {
  const navigate = useNavigate();

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this decision?"
    );
    if (isConfirmed) {
      console.log("Decision deleted");
    } else {
      console.log("Deletion canceled");
    }
  };

  const click = () => navigate("/Decision");
  const direct = () => navigate("/Decision");
  const eye = () => navigate("/Eye");
  const Swift = () => navigate("/Swoft");
  const vict = () => navigate("/Time");
  const hi = () => navigate("/How");

  
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "1rem",
    padding: "1rem",
    backgroundColor: "#fff",
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        style={{ backgroundColor: "#AAABB8", width: "80rem", height: "40rem" }}
      >
        <Button
          onClick={click}
          style={{
            backgroundColor: "#24305E",
            border: "none",
            color: "#fff",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            marginTop: "6rem",
            position: "relative",
            marginLeft: "1rem",
          }}
        >
          Add Decision
        </Button>
        <div className="butt">
          <Button
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
          >
            TABLE VIEW
          </Button>
          <Button
            onClick={vict}
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
          >
            TIMELINE VIEW
          </Button>
          <Button
            onClick={hi}
            style={{
              backgroundColor: "#24305E",
              border: "none",
              color: "#fff",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
            }}
          >
            HOW AM I DOING ?
          </Button>
        </div>
        <h5 className="tag">
          Show Pending Decisions
          <Switch style={{ color: "#24305E" }} {...label} defaultChecked />
        </h5>
        <input
          type="text"
          placeholder="Search by decision name or tag name"
          className="fry"
        />
        <div style={cardStyle}>
          <table className="bac">
            <thead>
              <tr>
                <th>#</th>
                <th>Decision Name</th>
                <th>Due Date</th>
                <th>Taken Date</th>
                <th>Details</th>
                <th>Tags</th>
                <th>Reasons</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Check</td>
                <td>07/14/2024</td>
                <td>07/14/2024</td>
                <td>gggg</td>
                <td>career</td>
                <td>kkk</td>
                <td>No comments found</td>
                <td style={{ fontSize: "1.3rem" }}>
                  <MdModeEditOutline onClick={direct} />{" "}
                  <MdDelete onClick={handleDelete} /> <IoEye onClick={eye} />
                  <br />
                  <MdAttachment onClick={Swift} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pending</td>
                <td>08/30/2024</td>
                <td>03/14/2024</td>
                <td>jjj</td>
                <td>Routine, Corporate Governance<br></br>Partially Data Driven</td>
                <td>learning Dev</td>
                <td>No comments found</td>
                <td style={{ fontSize: "1.3rem" }}>
                  <MdModeEditOutline onClick={direct} />
                  <MdDelete onClick={handleDelete} /> <IoEye onClick={eye} />
                  <br />
                  <MdAttachment onClick={Swift} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Total;