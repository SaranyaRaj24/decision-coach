import img from "../DC-iMAGES/Tech.png.png";
import "../Components/Home.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Dash");
  };
    return (
      <>
        <div
          style={{
            backgroundColor: "aliceblue",
            width: "80rem",
            height: "36.5rem",
          }}
        >
          <div className="containerr">
            <img src={img} className="tech" alt="Tech" />
            <div class="Home">Home</div>
          </div>

          <div class="Full">
            <div class="log">Join US</div>

            <div className="body">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="username"
                required
                style={{ borderRadius: "1.2rem" }}
              ></input>
            </div>
            <div className="body">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                required
                style={{ borderRadius: "1.2rem" }}
              ></input>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox"></input>Remember me
              </label>
              <a href="#" className="Forgot">
                Forgot Password?
              </a>
            </div>
            <Button
              onClick={handleLogin}
              style={{
                backgroundColor: "#24305E",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                position: "relative",
                marginLeft: "60rem",
                width: "5rem",
              }}
            >
              Login
            </Button>

            <div className="reg">
              <p>
                Don't have an account?
                <a href="#" className="regis">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Home; 

