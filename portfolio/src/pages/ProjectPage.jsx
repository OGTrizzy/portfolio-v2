import { useParams } from "react-router-dom";

// Import images from src/img/
import jsFrameworksImg from "../img/js2.png";
import adminProjectImg from "../img/SE2.png";
import examProjectImg from "../img/PE2.png";

function ProjectPage() {
  const { id } = useParams();

  const projects = {
    "js-frameworks": {
      title: "JavaScript Frameworks",
      description: "A project showcasing advanced JavaScript framework skills.",
      images: [jsFrameworksImg, "https://via.placeholder.com/600x400"],
      liveLink: "https://ogtrizzy.github.io/fed2-js2-ca-OGTrizzy/",
      githubLink: "https://github.com/OGTrizzy/fed2-js2-ca-OGTrizzy",
      reflection: "Reflection on improvements made based on feedback.",
    },
    AdminProject: {
      title: "Semester Project 2",
      description: "A comprehensive project with modern web technologies.",
      images: [adminProjectImg, "https://via.placeholder.com/600x400"],
      liveLink: "https://ogtrizzy.github.io/Semester-Project-2/",
      githubLink: "https://github.com/OGTrizzy/Semester-Project-2",
      reflection: "Reflection on improvements made based on feedback.",
    },
    "exam-project": {
      title: "Exam Project 2",
      description: "A polished project demonstrating my expertise.",
      images: [examProjectImg, "https://via.placeholder.com/600x400"],
      liveLink: "https://ogtrizzy.github.io/PE2/",
      githubLink: "https://github.com/OGTrizzy/PE2",
      reflection: "Reflection on improvements made based on feedback.",
    },
  };

  const project = projects[id] || {};

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 mb-4 T-color">
        {project.title || "Project Not Found"}
      </h1>
      {project.title ? (
        <div className="card mb-5">
          <div className="card-body p-0">
            <div className="gallery-container">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} Image ${index + 1}`}
                  className="gallery-img"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                />
              ))}
            </div>
            <div className="card-text p-4">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom"
                >
                  View Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom"
                >
                  GitHub Repository
                </a>
                <button onClick={copyLink} className="btn btn-custom">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <h2 className="h4 mb-4 T-color">Reflection & Improvements</h2>
      <p>{project.reflection || "No reflection available."}</p>
    </div>
  );
}

export default ProjectPage;
