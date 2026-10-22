
import { Icons, styles } from "./constants.jsx";
import resumePDF from "./assets/Rajiumar_Resume.pdf";
import resumeImage from "./assets/Rajiumar_Resume.jpg";

function ResumePage() {
  const resumeURL = resumePDF;

  return (
    <div className="py-4 text-white text-center">
      {/* Page Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">
          My{" "}
          <span style={{ color: "#cd5ff8" }}>
            Resume
          </span>
        </h2>

        <div style={styles.purpleBar}></div>
      </div>

      {/* Resume PDF Preview */}
    <div className="row justify-content-center">
  <div className="col-12 col-lg-10">
    <div
      style={styles.glassCard}
      className="p-3 p-md-4"
    >
      <h4 className="fw-bold text-info mb-3">
        My Resume
      </h4>

      <img
        src={resumeImage}
        alt="Rajkumar Resume"
        className="img-fluid"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "8px",
        }}
      />

            {/* Download Button */}
            <div className="text-center mt-3">
              <a
                href={resumeURL}
                download="Rajkumar_Resume.pdf"
                className="btn px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                style={styles.primaryBtn}
              >
                <Icons.Download />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
