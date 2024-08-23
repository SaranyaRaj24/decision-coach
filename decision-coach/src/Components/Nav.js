
import React, { useState } from "react";
import "../Components/Nav.css";
import img from "../DC-iMAGES/Tech.png.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav>
      
        <div className="containerr">
          <img src={img} className="tech" alt="Tech" />
          <div className="style">
            <button onClick={() => handleNavigate("/Dash")} className="test">
              Dashboard
            </button>
            <button onClick={() => handleNavigate("/Total")} className="test">
              Decision
            </button>
            <button className="test">Guide</button>
            <button
              onClick={() => handleNavigate("/Innercircle")}
              className="test"
            >
              Inner Circle
            </button>
            <button
              onClick={() => handleNavigate("/Notification")}
              className="test"
            >
              Notifications
            </button>
            <div className="dropdown">
              <button onClick={toggleDropdown} className="test">
                Profile
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavigate("/Profile")}
                  >
                    Profile
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavigate("/Skill")}
                  >
                    Soft Skills
                  </button>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
    
    </nav>
  );
}

export default Nav;
