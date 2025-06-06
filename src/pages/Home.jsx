import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const heroRef = useRef(null);
  const projects = [
    {
      id: "js-frameworks",
      title: "JavaScript Frameworks",
      description: "A project showcasing advanced JavaScript framework skills.",
      previewImage: "/img/js2.png",
    },
    {
      id: "AdminProject",
      title: "Semester Project 2",
      description: "A comprehensive project with modern web technologies.",
      previewImage: "/img/SE2.png",
    },
    {
      id: "exam-project",
      title: "Exam Project 2",
      description: "A polished project demonstrating my expertise.",
      previewImage: "/img/PE2.png",
    },
    {
      id: "semester-project-1",
      title: "Semester Project 1",
      description:
        "An early project showcasing foundational web development skills.",
      previewImage: "/img/bidder-img.png",
    },
    {
      id: "semester-project-2",
      title: "Semester Project 2",
      description: "A comprehensive project with modern web technologies.",
      previewImage: "/img/CSMimg.PNG",
    },
  ];

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="container h-screen-fix">
      <section ref={heroRef} className="hero text-center my-5">
        <h1 className="display-3 T-color">Tristian Øyen</h1>
        <p className="lead T-color">Web Developer | Creative Problem Solver</p>
      </section>
      <br></br>
      <section className="my-5">
        <h2 className="text-center mb-4 T-color">My Projects</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              previewImage={project.previewImage}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
