import { Icons, styles } from "./constants.jsx";
import smart from "./assets/images.jpg"
import career from "./assets/Intelligence.png"
import portfolio from "./assets/portfolio.png"
// ---------------- 3. PROJECTS PAGE ----------------
function ProjectsPage() {
  const projects = [
    {
      title: "Ai Career Intelligence",
      description: "AI Career Intelligence is an AI-powered platform designed to help students explore career opportunities, receive personalized career guidance, and practice mock interviews. It includes student profiles and a dashboard to support career planning and skill development.",
      image: career,
      tags: ["React", "Bootstrap", "express", "Node.js", "Firebase", "Gemini Api"],
      github: "http://github.com/RAJKUMAR664786/Smart-Industrial-Equipment-Maintenance-Prediction-system-website"
    },
    {
      title: "Smart Industrial Equipment Maintenance Prediction System",
      description: "The proposed system is a Smart Industrial Equipment Maintenance Prediction System designed to overcome the limitations of the existing system. It is a web-based application that uses machine usage data to predict maintenance requirements.",
      image: smart,
      tags: ["Html", "CSS", "Javascript"],
      github: "https://github.com/RAJKUMAR664786/Smart-Industrial-Equipment-system"
    },
    {
      title: "Note Pad",
      description: "A simple and user-friendly web-based notepad application built using HTML, CSS, and JavaScript. It allows users to write, edit, and save notes with an easy-to-use interface.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
      tags: ["Html", "Css", "JavaScript"],
      github: "https://github.com/RAJKUMAR664786/NotePad"
    },
    {
      title: "To-Do List App",
      description: "A simple and interactive Todo List application built using HTML, CSS, and JavaScript. It helps users organize daily activities by adding tasks, tracking completed tasks, and managing their to-do items.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      tags: ["Html", "CSS", "JavaScript"],
      github: "https://github.com/RAJKUMAR664786/TO-DO-LIST"
    },
    {
      title: "Portfolio Website",
      description: "Modern developer portfolio featuring responsive design, dark neon theme, and clean page routing.",
      image: portfolio,
      tags: ["React", "Bootstrap", "Vercel"],
      github: "https://github.com"
    }
  ];

  return (
    <div className="py-4 text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          My Recent <span style={{ color: "#cd5ff8" }}>Works</span>
        </h2>
        <p className="text-light opacity-75">Here are a few projects I've worked on recently.</p>
        <div style={styles.purpleBar}></div>
      </div>

      <div className="row g-4">
        {projects.map((proj, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div style={styles.projectCard} className="h-100 d-flex flex-column">
              <img
                src={proj.image}
                alt={proj.title}
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
              />
              <div className="p-4 d-flex flex-column flex-grow-1">
                <h5 className="fw-bold mb-2">{proj.title}</h5>
                <p className="text-light opacity-75 small flex-grow-1">{proj.description}</p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="badge bg-dark border border-secondary text-info">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light d-flex align-items-center gap-1">
                    <Icons.Github /> GitHub
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage