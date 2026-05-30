import React from "react";
import logo from "../pics/img3.png";

function Hero() {
  return (
    <section
    id="home"
      style={{
        minHeight: "90vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
        color: "white",
      }}
      className="d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <h4
              style={{
                color: "#cbd5e1",
                marginBottom: "10px",
              }}
            >
              Hello, It's Me 
            </h4>

            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "700",
                marginBottom: "15px",
                color: "#cbd5e1"
              }}
            >
              Anant Nahar
            </h1>

            {/* Same Line Heading */}
            <div
              className="d-flex align-items-center flex-wrap gap-2 mb-3"
            >
              <h2 className="m-0"
              style={{
                  color: "#cbd5e1",
                  
                }}
              >
                And I am
              </h2>

              <h2
                className="m-0"
                style={{
                  color: "#c084fc",
                  fontWeight: "700",
                }}
              >
                Full Stack Developer
              </h2>
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#cbd5e1",
                lineHeight: "1.8",
                maxWidth: "600px",
              }}
            >
              I am a Fourth-Year BTech Computer Science student passionate
              about Full Stack Development, Java, SQL, and Problem Solving.
              I enjoy building modern web applications and continuously
              learning new technologies to improve my skills.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">

              <a
                href="https://drive.google.com/file/d/1QxvymKRiQvn-_Yn4VBufYvgMZaRUZa0e/view?usp=drive_link"
                className="btn btn-light fw-bold"
              >
                Resume
              </a>

              <a
                href="https://github.com/anant816"
                className="btn btn-outline-light"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anant-nahar-2a5840297/"
                className="btn btn-outline-light"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/naharanant04/"
                className="btn btn-outline-light"
              >
                LeetCode
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src={logo}
              alt="Anant Nahar"
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid #c084fc",
                boxShadow:
                  "0 0 40px rgba(192, 132, 252, 0.7)",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;