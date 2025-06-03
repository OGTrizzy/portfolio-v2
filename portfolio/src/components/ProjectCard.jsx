import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function ProjectCard({ id, title, description, previewImage }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      ref={cardRef}
      className="card h-100 shadow-lg border-0 project-card"
      style={{ background: "#1f2a44", cursor: "pointer" }}
      onClick={handleClick}
      onMouseEnter={(e) =>
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })
      }
      onMouseLeave={(e) =>
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
      }
    >
      <div className="card-body text-center">
        {previewImage && (
          <img
            src={previewImage}
            alt={`${title} Preview`}
            className="card-img-top mb-3"
          />
        )}
        <h5 className="card-title text-light">{title}</h5>
        <p className="card-text text-secondary">{description}</p>
        <Link to={`/project/${id}`} className="btn btn-custom mt-3 T-color">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
