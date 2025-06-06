import { useParams } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();
  const basePath = "/portfolio-v2";

  const projects = {
    "js-frameworks": {
      title: "JavaScript Frameworks",
      description: "A project showcasing advanced JavaScript framework skills.",
      images: [
        `${basePath}/img/js2.png`,
        "https://images.unsplash.com/photo-1633078654544-61b3455b9161?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      liveLink: "https://ogtrizzy.github.io/fed2-js2-ca-OGTrizzy/",
      githubLink: "https://github.com/OGTrizzy/fed2-js2-ca-OGTrizzy",
      reflection:
        "Dear Tristian, I've reviewed your JavaScript Frameworks project. Completing this work shows real commitment to your learning. Excellent ...",
    },
    AdminProject: {
      title: "Semester Project 2",
      description: "A comprehensive project with modern web technologies.",
      images: [
        `${basePath}/img/SE2.png`,
        "https://images.unsplash.com/photo-1633078654544-61b3455b9161?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      liveLink: "https://ogtrizzy.github.io/Semester-Project-2/",
      githubLink: "https://github.com/OGTrizzy/Semester-Project-2",
      reflection:
        "Dear Tristian, Thank you for your submission of the Semester Project 2. Your code demonstrates excellent understanding of JavaScript and web development principles. The implementation shows strong attention to code organization and documentation.",
    },
    "exam-project": {
      title: "Exam Project 2",
      description: "A polished project demonstrating my expertise.",
      images: [
        `${basePath}/img/PE2.png`,
        "https://images.unsplash.com/photo-1633078654544-61b3455b9161?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      liveLink: "https://ogtrizzy.github.io/PE2/",
      githubLink: "https://github.com/OGTrizzy/PE2",
      reflection: "Feedback will be added when this is graded",
    },
    "semester-project-1": {
      title: "Semester Project 1",
      description:
        "An early project showcasing foundational web development skills.",
      images: [
        `${basePath}/img/CSMimg.PNG`,
        "https://images.unsplash.com/photo-1633078654544-61b3455b9161?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      liveLink: "https://ogtrizzy.github.io/Semester-Project-1/",
      githubLink: "https://github.com/OGTrizzy/Semester-Project-1",
      reflection:
        "Hi Tristian, Thank you for you semester project submission. Overall a good submission ",
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
        <div className="card mb-5 project-page-card">
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
                  style={{ textDecoration: "none" }}
                >
                  View Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom"
                  style={{ textDecoration: "none" }}
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
      <h2 className="h4 mb-4 T-color">Feedback:</h2>
      <p className="T-color">
        {project.reflection || "No reflection available."}
      </p>
    </div>
  );
}

export default ProjectPage;
