import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" /> </Link>
        </div>

        <div className="links">
          <Link className="link" to="./?cat=art">
            <h4>ART</h4>
          </Link>

          <Link className="link" to="./?cat=science">
            <h4>SCIENCE</h4>
          </Link>

          <Link className="link" to="./?cat=technology">
            <h4>TECHNOLOGY</h4>
          </Link>

          <Link className="link" to="./?cat=cinema">
            <h4>CINEMA</h4>
          </Link>

          <Link className="link" to="./?cat=design">
            <h4>DESIGN</h4>
          </Link>  
 
          <Link className="link" to="./?cat=food">
            <h4>FOOD</h4>
          </Link>

          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}> Logout </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
