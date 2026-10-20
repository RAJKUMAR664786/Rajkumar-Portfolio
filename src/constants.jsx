import React from "react";

export const Icons = {
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  Download: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  ),
  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
};

export const styles = {
  wrapper: {
    backgroundColor: "#0d0a1a",
    minHeight: "100vh",
    position: "relative",
    color: "#ffffff",
    overflowX: "hidden",
    fontFamily: "'Segoe UI', Roboto, sans-serif"
  },
  glowCircle1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
    top: "-50px",
    left: "-50px",
    pointerEvents: "none"
  },
  glowCircle2: {
    position: "absolute",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
    bottom: "50px",
    right: "-50px",
    pointerEvents: "none"
  },
  navbar: {
    backgroundColor: "rgba(13, 10, 26, 0.88)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
  },
  purpleBar: {
    width: "60px",
    height: "4px",
    backgroundColor: "#cd5ff8",
    margin: "12px auto 0 auto",
    borderRadius: "2px"
  },
  primaryBtn: {
    background: "linear-gradient(90deg, #623686, #803bec)",
    border: "none",
    color: "#fff",
    borderRadius: "25px",
    boxShadow: "0 0 15px rgba(128, 59, 236, 0.4)"
  },
  primaryBtnSmall: {
    background: "linear-gradient(90deg, #623686, #803bec)",
    border: "none",
    color: "#fff",
    borderRadius: "20px"
  },
  socialCircle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    color: "#cd5ff8",
    textDecoration: "none",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  },
  socialCircleSmall: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#cd5ff8"
  },
  glassCard: {
    backgroundColor: "rgba(25, 20, 48, 0.6)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px"
  },
  projectCard: {
    backgroundColor: "rgba(25, 20, 48, 0.7)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    overflow: "hidden"
  },
  skillBadge: {
    backgroundColor: "rgba(25, 20, 48, 0.75)",
    border: "1px solid rgba(168, 85, 247, 0.25)",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
  },
  codeCard: {
    backgroundColor: "#16122b",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
  }
};