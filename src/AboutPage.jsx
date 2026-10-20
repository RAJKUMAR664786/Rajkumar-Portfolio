// ---------------- 2. ABOUT PAGE ----------------
import { styles } from "./constants.jsx";
function AboutPage() {
  const skills = [
    "JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Bootstrap",
    "Node.js", "Express.js", "Firebase", "Data Structures and Algorithms", "REST APIs",
    "Python", "Responsive Web Design","C","Java"
  ];

  const tools = ["VS Code", "Postman", "Vercel", "Git & GitHub", "Docker", "Chrome DevTools"];

  return (
    <div className="py-4 text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Know Who <span style={{ color: "#cd5ff8" }}>I'M</span>
        </h2>
        <div style={styles.purpleBar}></div>
      </div>

      <div className="row g-4 mb-5 align-items-center">
        <div className="col-lg-8">
          <div style={styles.glassCard} className="p-4">
            <h4 className="fw-bold text-light mb-3">Hello Everyone!</h4>
            <p className="text-light opacity-75 leading-relaxed">
             Hi everyone! I’m Rajkumar Venkatesh from Komarapalayam, Tamil Nadu, India.I am currently pursuing B.Tech in Information Technology at Excel Engineering College, Komarapalayam.</p>
            <p className="text-light opacity-75">
              Apart from coding, some other activities that I love to do:
            </p>
            <ul className="text-light opacity-75">
              <li>Exploring emerging tech and open-source tools</li>
              <li>UI/UX experiments and prototyping</li>
              <li>Fitness, sports, and reading</li>
            </ul>
            <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology with purpose, learning without limits."{" "}
          </p>
          <footer className="blockquote-footer">Rajkumar</footer>
          </div>
        </div>

        <div className="col-lg-4 text-center">
          <div style={styles.glassCard} className="p-4">
            <h5 className="text-info fw-bold mb-3">Quick Overview</h5>
            <div className="text-start opacity-75 text-light small">
              <p>📍 Location: Tamil Nadu, India</p>
              <p>🎓 Degree: B.Tech-Information Technology</p>
              <p>💼 Focus: Full Stack Web Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section (No Percentages, Clean Professional Cards) */}
      <h3 className="text-center fw-bold mb-4">
        Professional <span style={{ color: "#cd5ff8" }}>Skillset</span>
      </h3>
      <div className="row g-3 justify-content-center mb-5">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div style={styles.skillBadge} className="p-3 text-center">
              <span className="fw-semibold text-light">{skill}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h3 className="text-center fw-bold mb-4">
        <span style={{ color: "#cd5ff8" }}>Tools</span> I Use
      </h3>
      <div className="row g-3 justify-content-center">
        {tools.map((tool, index) => (
          <div key={index} className="col-6 col-md-3 col-lg-2">
            <div style={styles.skillBadge} className="p-3 text-center">
              <span className="fw-semibold text-info">{tool}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;