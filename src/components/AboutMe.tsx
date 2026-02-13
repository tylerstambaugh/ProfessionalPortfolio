import { motion } from "framer-motion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headshot from "../assets/images/headshot_sized.png";

const bio = `Indiana native with a passion for technology and learning. My journey kicked off with a garage sale gem, a Commodore 64, sparking a lifelong interest in computers. While at Indiana University, I earned a B.S. in Informatics, delving into the tech landscape. I began my professional career in tech support, working with client-server applications and databases. Over time, I progressed to become a Software Engineer, specializing in .Net and React projects. To further my skills, I completed over 600 hours of coursework at Eleven Fifty Academy. In my free time, I'm working on my own full-stack application integrating with the Strava API. Eager to explore process automation and enhance my software engineering prowess, I strive to make meaningful impacts in every organization I'm part of.`;

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutMe() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={Headshot}
            alt="Tyler Stambaugh"
            className="hero-headshot"
            variants={fadeUp}
          />
          <motion.h1 className="hero-name" variants={fadeUp}>
            Tyler Stambaugh
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            Web Developer
          </motion.p>
          <motion.p className="hero-tagline" variants={fadeUp}>
            Building modern web applications with .NET and React
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href="#projects" className="hero-cta">
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <motion.div
          className="about-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-heading">About Me</h2>
          <p className="about-text">{bio}</p>
        </motion.div>
      </section>
    </>
  );
}
