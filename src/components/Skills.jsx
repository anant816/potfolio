import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "SQL",
    "Git & GitHub",
    "DSA",
    "Bootstrap",
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
        color: "white",
      }}
    >
      <div className="container">

        <h1
          className="text-center fw-bold mb-3"
          style={{ color: "#ffffff" }}
        >
          My Skills
        </h1>

        <p
          className="text-center mb-5"
          style={{ color: "#cbd5e1" }}
        >
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="row">

          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div
                className="text-center p-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <h4
                  style={{
                    color: "#c084fc",
                    fontWeight: "600",
                  }}
                >
                  {skill}
                </h4>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;