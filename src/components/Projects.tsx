import { motion } from "framer-motion";
import { projects } from "./projectData";
import ProjectsRows from "./ProjectsRows";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <ProjectsRows data={projects} />
      </div>
    </section>
  );
}
