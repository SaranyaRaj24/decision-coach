import React from "react";
import "../Components/Dash.css";
import { AiFillCarryOut } from "react-icons/ai";
import { FaHourglassHalf } from "react-icons/fa6";
import { RiUserShared2Fill } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { Box,Card,CardContent,Typography } from "@mui/material";


function Dash() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Nav />
      <div
        style={{
          backgroundColor: "#AAABB8",
          width: "80rem",
          height: "33.5rem",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          padding="2rem"
          gap="2rem"
          marginTop="3rem"
        >
          <CardComponent
            title="Total Decisions"
            IconComponent={AiFillCarryOut}
            onClick={() => handleClick("/Total")}
          />
          <CardComponent
            title="Pending Decisions"
            IconComponent={FaHourglassHalf}
            onClick={() => handleClick("/Pending")}
          />
          <CardComponent
            title="Shared with me"
            IconComponent={RiUserShared2Fill}
            onClick={() => handleClick("/Shared")}
          />
          <CardComponent
            title="Shared by me"
            IconComponent={IoShareSocial}
            onClick={() => handleClick("/Check")}
          />
        </Box>
      </div>
    </>
  );
}

const CardComponent = ({ title, IconComponent, onClick }) => (
  <Box
    width="280px"
    borderRadius="10px"
    border="1px solid #ddd"
    textAlign="center"
    boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    overflow="hidden"
    marginTop="2rem"
    sx={{ cursor: onClick ? "pointer" : "default" }}
    onClick={onClick}
  >
    <Card
      style={{
        borderRadius: "10px",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconComponent style={{ marginRight: "0.5rem" }} />
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Box>

);

export default Dash;