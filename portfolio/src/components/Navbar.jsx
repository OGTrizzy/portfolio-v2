import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Tristian Øyen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link text-center"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="nav-link text-center"
              to="/project/js-frameworks"
              onClick={() => setIsOpen(false)}
            >
              JS Frameworks
            </Link>
            <Link
              className="nav-link text-center"
              to="/project/AdminProject"
              onClick={() => setIsOpen(false)}
            >
              Semester Project
            </Link>
            <Link
              className="nav-link text-center"
              to="/project/exam-project"
              onClick={() => setIsOpen(false)}
            >
              Exam Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
