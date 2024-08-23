import React from 'react'
import Nav from "./Nav";
import "../Components/How.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";



const How = () => {
  const navigate = useNavigate();

  const click = () => navigate("/Decision");
  const vict = () => navigate("/Time");
  const hut = () => navigate("/Total");

  return (
    <>
      <div>
        <Nav />
      </div>
      <div
        style={{ backgroundColor: "#AAABB8", width: "80rem", height: "60rem" }}
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
            onClick={hut}
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
          <h5 style={{ marginLeft: "7rem" }}>Advanced Tags</h5>
          <h5 style={{ marginLeft: "12rem" }}>Sharpen the Saw Tags</h5>
        </div>

        <div className="card">
          <table className="pink">
            <thead>
              <tr>
                <th>Tag Name</th>
                <th>Decision Count</th>
                <th>Tag Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corporate Governance</td>
                <td>2</td>
                <td>Advanced Tags</td>
              </tr>
              <tr>
                <td>Partially Data Driven</td>
                <td>2</td>
                <td>Advanced Tags</td>
              </tr>
              <tr>
                <td>Career</td>
                <td>1</td>
                <td>Sharpen the Saw</td>
              </tr>
              <tr>
                <td>Routine</td>
                <td>1</td>
                <td>Urgency Tags</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>1</td>
                <td>Urgency Tags</td>
              </tr>
            </tbody>
          </table>
        </div>

        <PieChart
          style={{ marginLeft: "31rem", bottom: "22rem" }}
          series={[
            {
              data: [
                {
                  id: 0,
                  value: 2,
                  label: "Corporate Governance",
                  color: "#24305E",
                },
                {
                  id: 1,
                  value: 2,
                  label: "Partially Data Driven",
                  color: "aliceblue",
                },
              ],
            },
          ]}
          width={400}
          height={200}
        />

        <PieChart
          className="fig"
          series={[
            {
              data: [{ id: 0, value: 1, label: "Career", color: "#24305E" }],
            },
          ]}
          width={400}
          height={200}
        />
        <h5 className="rout">Urgency Tags</h5>
        <PieChart
          style={{ marginLeft: "40rem", bottom: "31rem" }}
          series={[
            {
              data: [
                { id: 0, value: 1, label: "Routine", color: "#24305E" },
                { id: 1, value: 1, label: "Brand", color: "aliceblue" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </>
  );
};

export default How;

