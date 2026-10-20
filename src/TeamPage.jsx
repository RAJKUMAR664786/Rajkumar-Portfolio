import { Icons, styles } from "./constants.jsx";
function TeamPage() {
  const members = [
    {
      name: "RAJKUMAR V",
      role: "Lead Developer & UI",
      bio: "Full Stack Developer focusing on React applications and clean user experiences.",
      link: " http://localhost:5173/",
      link1: "example2.com"
    },
    {
      name: "RAJMOHAN G",
      role: "Backend Architect",
      bio: "API design expert with strong expertise in Node.js, databases, and microservices."
    },
    {
      name: "SABARI VASAN M",
      role: "Product & UI/UX Designer",
      bio: "Creative mind crafting user-centered wireframes and design systems."
    },
    {
      name: "SANTHOSH M",
      role: "Frontend Performance Engineer",
      bio: "Specializes in building responsive component layouts, optimizing DOM rendering speed, and ensuring smooth UI animations."
    },
    {
      name: "SAI CHANDRU S",
      role: "DevOps & Cloud Specialist",
      bio: "Manages containerized deployments, automated CI/CD pipelines, and cloud hosting infrastructure for scalable apps."
    },
    {
      name: "SAKTHIMURUGAN K",
      role: "Full Stack Engineer",
      bio: "Bridges frontend interfaces and backend logic with secure API integrations, rigorous testing, and robust state management."
    }
  ];

  return (
    <div className="py-4 text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Meet The <span style={{ color: "#cd5ff8" }}>Team</span>
        </h2>
        <p className="text-light opacity-75">Colleagues and collaborators I build cool products with.</p>
        <div style={styles.purpleBar}></div>
      </div>

      <div className="row g-4 justify-content-center">
        {members.map((m, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div style={styles.glassCard} className="p-4 text-center h-100">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a855f7, #6366f1)",
                  margin: "0 auto 15px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#fff"
                }}
              >
                {m.name.charAt(0)}
              </div>
              <h5 className="fw-bold mb-1">{m.name}</h5>
              <p className="text-info small mb-3">{m.role}</p>
              <p className="text-light opacity-75 small">{m.bio}</p>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <a href={m.link}><span style={styles.socialCircleSmall}><Icons.Github /></span></a>
                <a href={m.link1}><span style={styles.socialCircleSmall}><Icons.Linkedin /></span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage