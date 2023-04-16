import React from "react";
import "../app.css";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://media.istockphoto.com/id/1399581217/photo/african-american-man-enters-meta-universe-cyberspace.jpg?s=1024x1024&w=is&k=20&c=0SLiZHBDILBUnITbn1XgG6c5yvSr5dfd2P-sPZ_gQGU="
              alt=""
              className="avatar"
            />
          </li>

          <li className="listItem">Jone Doe</li>
          <li className="listItem">LogOut</li>
        </ul>
      ) : (
        <Link to="login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
