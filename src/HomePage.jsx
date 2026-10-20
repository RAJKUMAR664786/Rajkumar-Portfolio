import { Icons, styles } from "./constants.jsx";

// ---------------- 1. HOME PAGE ----------------

function HomePage({ setCurrentPage, text }) {
  return (
    <div className="row align-items-center py-5">
      <div className="col-lg-7 text-white">
        <h3 className="mb-2" style={{ color: "#cfc1ea" }}>
          Hi There! <span role="img" aria-label="wave">👋🏻</span>
        </h3>
        <h1 className="display-4 fw-bold mb-3">
          I'M <span style={{ color: "#cd5ff8" }}>RAJKUMAAR VENKATESH</span>
        </h1>
        <h4 className="fw-semibold mb-4" style={{ color: "#00d2df", minHeight: "36px" }}>
          {text}
          <span className="blinking-cursor">|</span>
        </h4>
        <p className="text-light opacity-75 fs-5 mb-4" style={{ maxWidth: "550px" }}>
                 <p >
            I’m a Asparing Software Engineer who loves transforming ideas into reliable, scalable products. Over time, I’ve explored several technologies and found my passion in building high-performance systems and intuitive user experiences.
          </p>
          <p >
            I’m proficient in JavaScript, python, ReactJs, Node.js, and Java — and I enjoy working across both backend and frontend stacks.
          </p>
          <p >
            My key areas of interest include developing Web Applications, Artificial Intelligence, and exploring new ways to bridge on-chain and off-chain systems.
          </p>
          <p >
            Whenever possible, I love building projects with Node.js and modern frameworks like React.js and Next.js.
          </p>       </p>

        {/* Social Links */}
        <div className="d-flex gap-3 mb-4">
          {[
            { name: "GitHub", icon: <Icons.Github />, url: "https://github.com/RAJKUMAR664786" },
            { name: "LinkedIn", icon: <Icons.Linkedin />, url: "https://www.linkedin.com/in/v-rajkumar-7b2789338" },
            { name: "Instagram", icon: <Icons.Instagram />, url: "https://www.instagram.com/moon_light_dragon_01?igsh=MTg0ZndlMzR2eXV5aw==" },
            { name: "Vercel", icon: <Icons.Globe />, url: "https://vercel.com/rajkumar664786s-projects" }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              style={styles.socialCircle}
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="d-flex gap-3">
          <button
            className="btn px-4 py-2 fw-semibold"
            style={styles.primaryBtn}
            onClick={() => setCurrentPage("projects")}
          >
            View Projects
          </button>
          <button
            className="btn btn-outline-light px-4 py-2 fw-semibold"
            style={{ borderRadius: "25px" }}
            onClick={() => setCurrentPage("resume")}
          >
            My Resume
          </button>
        </div>
      </div>

      <div className="col-lg-5 text-center mt-5 mt-lg-0">
        <div style={styles.codeCard}>
          <div className="d-flex gap-2 mb-3">
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }}></span>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }}></span>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }}></span>
          </div>
          <pre className="text-start text-info mb-0" style={{ fontSize: "0.88rem", fontFamily: "monospace" }}>
            {`const developer = {
              name: "RAJKUMAR VENKATESH",
              role: "Full Stack Web Developer",
              status: "Ready to build awesome apps",
              passions: ["Coding", "Design", "Problem Solving"],
            };`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default HomePage;