import { styles } from "./constants.jsx";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.png"
import img6 from "./assets/img6.jpg"
import img7 from "./assets/img7.jpg"
import img8 from "./assets/img8.jpg"
import img9 from "./assets/img9.jpg"
import img10 from "./assets/img10.jpg"
import img11 from "./assets/img11.jpg"
import img12 from "./assets/img12.jpg"
import img13 from "./assets/img13.jpg"
import img14 from "./assets/img14.jpg"
import img15 from "./assets/img15.png"
import img16 from "./assets/img16.jpg"
import img17 from "./assets/img17.jpg"
import img18 from "./assets/img18.jpg"
import img19 from "./assets/img19.jpg"
import img20 from "./assets/img20.jpg"
import img21 from "./assets/img21.jpg"
import img22 from "./assets/img22.jpg"
import img23 from "./assets/img23.jpg"
import img24 from "./assets/img24.jpg"
import img25 from "./assets/img25.jpg"
import img26 from "./assets/img26.jpg"
import img27 from "./assets/img27.jpg"
import img28 from "./assets/img28.jpg"
import img29 from "./assets/img29.jpg"

// ---------------- 4. CERTIFICATES PAGE ----------------
function CertificatesPage() {
  const certs = [
    {
      image: img29,
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "2025",
    },
    {
      image: img23,
      title: "Python concurrent Programming : Multithreading in Python",
      issuer: "Infosys Springboard",
      date: "2025",
    },
    {
        image: img1,
        title: "Python Programing Language",
        issuer: "Mind Luster",
        date: "2026",
    },
    {
      image: img24,
      title: "Python (Basic)",
      issuer: "Hacker Rank",
      date: "2026",
    },
    {
    image: img14,
    title: "Problem  Solving (Intermidiate)",
    issuer: "Hacker Rank",
    date: "2026",
    },
    {
      image: img9,
      title: "Python Fundamentals for Beginners",
      issuer: "Great Learing",
      date: "2025",
    },
    {
      image: img25,
      title: "Foundational course in Python Programming",
      issuer: "CodeFobe",
      date: "2026",
    },
    {
      image: img22,
      title: "Amazon Q - Generative AI - Powered Assistant Learrning Plan",
      issuer: "AWS Training & Certification",
      date: "2026",
    },
    {
      image: img21,
      title: "Introduction to Responsible AI",
      issuer: "Google Cloud",
      date: "2026",
    },
    {
      image: img16,
      title: "Ai for Beginners",
      issuer: "HP LIFE",
      date: "2026",
    },
    {
      image: img19,
      title: "Introduction to agent skills",
      issuer: "ANTHROPIC",
      date: "2026",
    },
    {
      image: img27,
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "TATA",
      date: "2026",
    },
    {
      image: img17,
      title: "Unlocking Ai for Everyone",
      issuer: "Microsoft",
      date: "2026",
    },
    {
      image: img18,
      title: "Introducing on Generative Ai - Artificial Intelligence and Machine Learning",
      issuer: "SFJ BUSINESS SOLUTIONS PRIVATE LIMITED",
      date: "2026",
    },
    {
      image: img20,
      title: "Cybersecurity",
      issuer: "Tech mahindra",
      date: "2026",
    },
    {
      image: img15,
      title: "Introduction to Critical Infrastructure Protection",
      issuer: "OPSWAT Academy",
      date: "2026",
    },
    {
      image: img28,
      title: "Codec Integration - Level 3",
      issuer: "LWR ACADEMY",
      date: "2026",
    },
                          
    {
      image: img7,
      title: "Front End Development - HTML",
      issuer: "Great Learing",
      date: "2025",
    },
    {
      image: img8,
      title: "Software Testing Tutorial",
      issuer: "Great Learing",
      date: "2025",
    },
    {
      image: img13,
      title: "Android Application Development",
      issuer: "Great Learing",
      date: "2025",
    },
    {
      image: img10,
      title: "Basics of Computer Networking",
      issuer: "Great Learing",
      date: "2025",
    },
    {
      image: img11,
      title: "Data Science Mathematics",
      issuer: "Great Learing",
      date: "2025",
      },
    {
      image: img12,
      title: "Learn Business English",
      issuer: "Great Learning",
      date: "2024",
    },
    {
    image: img6,
    title: "Euler's Method",
    issuer: "Great Learing",
    date: "2025",
    },
    {
      image: img2,
      title: "National Lebel Srinivasa Ramanujan Mathrmatical Competitions",
      issuer: "ISTE Tamilnadu Section",
      date: "2026",
    },
    {
      image: img26,
      title: "NEXORA GLOBAL HACKATHON ",
      issuer: "SHREE VENKATESHWARA HI-TECH ENGINEERING COLLEGE",
      date: "2026",
    },
    {
      image: img3,
      title: "Prrototype Engineering Clinic for Design Improved & Technical Evaluation",
      issuer: "Excel Engineering College",
      date: "2026",
    },
    {
        image: img4,
        title: "Hands-On UI/UX Design Techniques for web and Mobile Applicagions",
        issuer: "Kongu Engineering College",
        date: "2026",
      }
      
      
    ];
    
  return (
    <div className="py-4 text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Licenses & <span style={{ color: "#cd5ff8" }}>Certifications</span>
        </h2>
        <p className="text-light opacity-75">Verified achievements and learning milestones.</p>
        <div style={styles.purpleBar}></div>
      </div>

      <div className="row g-4">
        {certs.map((c, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <div style={styles.glassCard} className="p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge mb-2" style={{ background: "#623686" }}>
                  Verified Credential
                </span>
                <img src={c.image} alt={c.title} className="img-fluid rounded mb-3" />
                <h5 className="fw-bold mt-2">{c.title}</h5>
                <h6 className="text-info small">{c.issuer} &bull; {c.date}</h6>
                <p className="text-light opacity-75 small mt-3">{c.desc}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatesPage;