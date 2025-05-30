import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function ProjectCard({ id, title, description }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const handleClick = () => {
    console.log(`Navigating to /project/${id} - Link clicked`);
  };

  return (
    <Link to={`/project/${id}`} onClick={handleClick}>
      <div
        ref={cardRef}
        className="card h-100 shadow-lg border-0 project-card"
        style={{
          background: "linear-gradient(135deg, #1f2a44 0%, #2d3748 100%)",
        }}
        onMouseEnter={(e) =>
          gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })
        }
        onMouseLeave={(e) =>
          gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
        }
      >
        <div className="card-body text-center">
          <h5 className="card-title text-light">{title}</h5>
          <p className="card-text text-secondary">{description}</p>
          <Link to={`/project/${id}`} className="btn btn-custom mt-3">
            View Details
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
