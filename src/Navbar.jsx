import React from "react";
import logo from "./pics/img1.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow"
      style={{
        backgroundColor: "#e9d5ff", // Light Purple
      }}
    >
      <div className="container">
        {/* Logo + Name */}
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#"
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid white",
            }}
          />

          <h4
            style={{
              margin: 0,
              fontWeight: "700",
              color: "#4c1d95",
            }}
          >
            Anant's Portfolio
          </h4>
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;