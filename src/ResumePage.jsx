import { Icons, styles } from "./constants.jsx";
function ResumePage() {
  return (
    <div className="py-4 text-white text-center">
      <div className="mb-4">
        <h2 className="fw-bold">
          My <span style={{ color: "#cd5ff8" }}>Resume</span>
        </h2>
        <div style={styles.purpleBar}></div>
      </div>

      {/* Download Button */}
      <div className="mb-5">
        <a
          href="#download"
          onClick={(e) => {
            e.preventDefault();
            alert("Replace this href with the path to your resume PDF (e.g. /my-resume.pdf)");
          }}
          className="btn px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
          style={styles.primaryBtn}
        >
          <Icons.Download /> Download CV
        </a>
      </div>

      {/* Resume Card Preview */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div style={styles.glassCard} className="p-4 p-md-5 text-start">
            <h4 className="fw-bold text-info mb-3">Education</h4>
            <div className="mb-4 border-start border-2 ps-3" style={{ borderColor: "#623686" }}>
              <h5 className="mb-1">Bachelor of Technology / Information Technology</h5>
              <p className="text-muted mb-1">Excel Engineering College &bull; 2026 - Present</p>
              <p className="small text-light opacity-75">
                Specialized in Computer Science, Data Structures, Algorithms, and Modern Web Engineering.
              </p>
            </div>

            <h4 className="fw-bold text-info mb-3">Experience / Projects</h4>
            <div className="border-start border-2 ps-3" style={{ borderColor: "#623686" }}>
              <h5 className="mb-1">Frontend Web Developer Intern / Project Work</h5>
              <p className="text-muted mb-1">Tech Projects &bull; 2023 - Present</p>
              <p className="small text-light opacity-75 mb-0">
                Created responsive user interfaces using React and Bootstrap. Built dynamic REST API integrations
                and deployed cloud applications on Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage