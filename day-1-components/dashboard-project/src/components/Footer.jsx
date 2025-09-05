import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <footer className="dashboard-footer">
      <div className="footer-info">
        <p style={{ margin: 0, color: "var(--text-secondary)" }}>
          © {currentYear} Your Name • React Developer in Training
        </p>
        <p
          style={{
            margin: 0,
            color: "var(--text-secondary)",
            fontSize: "0.8rem",
          }}
        >
          Last updated: {lastUpdated} • Built with React & ❤️
        </p>
      </div>

      <div className="footer-social">
        <a
          href="https://github.com/yourusername"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          📱 GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
        >
          🐦 Twitter
        </a>
        <a
          href="mailto:your.email@example.com"
          className="social-link"
          aria-label="Send Email"
        >
          📧 Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
