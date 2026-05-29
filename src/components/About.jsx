import React from "react";
import logo from "../pics/img1.png";

function About() {
  return (
    <section
      id="about"
      style={{
        background: "#f8fafc",
        padding: "100px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side Image */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            <img
              src={logo}
              alt="About"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid #c084fc",
                boxShadow: "0 0 30px rgba(192,132,252,0.4)",
              }}
            />
          </div>

          {/* Right Side Content */}
          <div className="col-lg-7">

            <h5
              style={{
                color: "#8b5cf6",
                fontWeight: "600",
              }}
            >
              About Me
            </h5>

            <h2
              style={{
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Full Stack Developer & Problem Solver
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.9",
                fontSize: "1.05rem",
              }}
            >
              I am Anant Nahar, a Fourth-Year BTech Computer Science
              student with a strong interest in Full Stack Development.
              I enjoy building responsive web applications using the
              MERN Stack and continuously improving my skills in
              Java, SQL, Data Structures & Algorithms.
            </p>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.9",
                fontSize: "1.05rem",
              }}
            >
              My goal is to become a skilled Software Engineer by
              developing real-world projects, solving coding problems,
              and gaining practical industry experience.
            </p>

            
            <div className="row mt-4">

              <div className="col-md-4 mb-3">
                <div
                  className="p-3 shadow-sm rounded text-center bg-white"
                >
                  <h3 style={{ color: "#8b5cf6" }}>3+</h3>
                  <p className="mb-0">Core Technologies</p>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div
                  className="p-3 shadow-sm rounded text-center bg-white"
                >
                  <h3 style={{ color: "#8b5cf6" }}>MERN</h3>
                  <p className="mb-0">Stack Developer</p>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div
                  className="p-3 shadow-sm rounded text-center bg-white"
                >
                  <h3 style={{ color: "#8b5cf6" }}>Java</h3>
                  <p className="mb-0">DSA & OOP</p>
                </div>
              </div>

            </div>

           <a
  href="#contact"
  className="btn mt-4"
  style={{
    backgroundColor: "#8b5cf6",
    color: "white",
    padding: "10px 25px",
    textDecoration: "none",
  }}
>
  Know More...
</a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;