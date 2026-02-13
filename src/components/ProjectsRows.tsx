import { useState } from "react";
import { motion } from "framer-motion";
import { project } from "./projectData";
import ProjectModal from "./ProjectModal";

type ProjectRowProps = {
  data: project[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsRows({ data }: ProjectRowProps) {
  const [selectedProject, setSelectedProject] = useState<project | null>(null);

  return (
    <>
      <div className="projects-grid">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(item)}
          >
            <div className="project-card-image-wrapper">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="project-card-image"
              />
              <div className="project-card-overlay">
                <span className="project-card-overlay-btn">View Details</span>
              </div>
            </div>
            <div className="project-card-body">
              <h3 className="project-card-title">{item.title}</h3>
              <div className="project-card-desc">{item.shortDescription}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
