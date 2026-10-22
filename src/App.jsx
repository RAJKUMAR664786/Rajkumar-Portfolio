import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import CertificatesPage from "./CertificatesPage";
import TeamPage from "./TeamPage";
import ResumePage from "./ResumePage";
import { styles } from "./constants.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Typewriter effect state
  const roles = ["Full Stack Developer", "Software Developer~", "UI/UX Designer", "Tech Explorer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let speed = isDeleting ? 40 : 100;

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "teams", label: "Team" },
    { id: "resume", label: "Resume" }
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.glowCircle1}></div>
      <div style={styles.glowCircle2}></div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={styles.navbar}>
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("home");
            }}
            style={{ color: "#c770f0", letterSpacing: "1px" }}
          >
            &lt;RAJKUMAR PORTFOLIO /&gt;
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse justify-content-end`}>
            <ul className="navbar-nav gap-2 py-2 py-lg-0">
              {navLinks.map((tab) => (
                <li key={tab.id} className="nav-item">
                  <button
                    className={`nav-link btn btn-link text-decoration-none px-3 py-1`}
                    style={{
                      color: currentPage === tab.id ? "#ffffff" : "#b2a8d3",
                      background: currentPage === tab.id ? "#623686" : "transparent",
                      borderRadius: "20px",
                      transition: "all 0.3s"
                    }}
                    onClick={() => {
                      setCurrentPage(tab.id);
                      setIsNavCollapsed(true);
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: "110px", minHeight: "85vh" }}>
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} text={text} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "certificates" && <CertificatesPage />}
        {currentPage === "teams" && <TeamPage />}
        {currentPage === "resume" && <ResumePage />}
      </div>

      {/* Footer */}
      <footer className="text-center py-4 mt-5 text-muted border-top border-secondary border-opacity-25">
        <p className="mb-0" style={{ color: "#a59cb8" }}>
          © Rajkumar | Aspiring Software Developer | Building Ideas into Reality with Code &bull; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}