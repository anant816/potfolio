import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        background:
          "linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)",
        color: "white",
      }}
    >
      <div className="container">
        <h1
          className="text-center fw-bold mb-3"
          style={{ color: "#cbd5e1" }}
        >
          Contact Me
        </h1>

        <p
          className="text-center mb-5"
          style={{ color: "#cbd5e1" }}
        >
          Have a project, internship opportunity, or just want to connect?
          Feel free to reach out.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              target="_blank"
            >
              <input
                type="hidden"
                name="access_key"
                value="a584beb7-efb3-42b9-894f-3580f158f6e0"
              />

              <div className="row">

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="5"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-light px-5"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact Info */}

            <div className="text-center mt-5">

              <h5>Email</h5>
              <p>
                <a
                  href="mailto:naharanant04@gmail.com"
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                  }}
                >
                  naharanant04@gmail.com
                </a>
              </p>

              <h5>LinkedIn</h5>
              <p>
                <a
                  href="https://linkedin.com/in/anant-nahar"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                  }}
                >
                  linkedin.com/in/anant-nahar
                </a>
              </p>

              <h5>GitHub</h5>
              <p>
                <a
                  href="https://github.com/anant816"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                  }}
                >
                  github.com/anant816
                </a>
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;