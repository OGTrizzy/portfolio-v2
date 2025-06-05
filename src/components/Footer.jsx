import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark py-4">
      <div className="container text-center">
        <p className="text-secondary mb-2">
          © 2025 Tristian Øyen. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://github.com/OGTrizzy"
            className="text-info text-decoration-none"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/tristian_oyen/"
            className="text-info text-decoration-none"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
