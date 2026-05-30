import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website showcasing skills, projects, and achievements with an attractive UI.",
      tech: "React, Bootstrap",
      github: "https://github.com/anant816/potfolio",
      demo: "https://potfolio-three-iota.vercel.app/",
    },

    {
      title: "Stock Tracker",
      description:
        "A full-stack stock tracker web application built using the MERN stack with authentication and real-time stock tracking.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/anant816/stock-mern-project",
      demo: "#",
    },

    {
      title: "AI Automation",
      description:
        "Currently working on automation workflows using n8n and Docker.",
      tech: "n8n, Docker",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 0",
        background: "#f8fafc",
      }}
    >
      <div className="container">
        <h1 className="text-center fw-bold mb-3">
          My Projects
        </h1>

        <p className="text-center text-muted mb-5">
          Some of the projects I have built while learning Full Stack
          Development.
        </p>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="card-body p-4">
                  <h3
                    style={{
                      color: "#7c3aed",
                      fontWeight: "700",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted mt-3">
                    {project.description}
                  </p>

                  <div
                    className="mt-3"
                    style={{
                      color: "#6366f1",
                      fontWeight: "600",
                    }}
                  >
                    {project.tech}
                  </div>

                  <div className="mt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary me-2"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;