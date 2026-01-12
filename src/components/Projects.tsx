import { Github, ShieldCheck, FileText, Wifi, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Text File Hider",
      description: `A secure Java desktop application that allows users to encrypt and decrypt text files with robust password protection. 
      Includes a user-friendly interface and email-based password recovery using Nodemailer integration.`,
      image: "/images/text-file-hider.png",
      icon: <FileText className="h-6 w-6" />,
      tech: ["Java", "MySQL", "JDBC", "Nodemailer", "Swing", "Encryption"],
      github: "https://github.com/Atharv190/Text-File-Hider",
    },
    {
      title: "ATS Score Checker",
      description: `Web application that analyzes candidate resumes against job descriptions to calculate an Applicant Tracking System (ATS) compatibility score.
      Utilizes OCR to extract text, natural language processing for keyword matching, and offers an intuitive UI for resume improvement.`,
      image: "/images/ats-checker.png",
      icon: <ShieldCheck className="h-6 w-6" />,
      tech: ["React", "Bootstrap", "Node.js", "Express", "Flask", "Python", "MySQL", "OCR", "NLP", "REST API", "TF-IDF", "Cosine Similarity"],
      github: "https://github.com/Atharv190/ats-score-checker",
      live: "#",
    },
    {
      title: "Internet Service Complaint System",
      description: `A Java-based web system to efficiently log, track, and manage internet service complaints.
      Features include complaint registration, status tracking, service personnel assignment, and customer notifications.`,
      image: "/images/int1.png",
      icon: <Wifi className="h-6 w-6" />,
      tech: ["Core Java","Advanced Java", "JSP", "Servlets", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", ],
      github: "https://github.com/Atharv190/internet-service-complaint",
    },
    {
      title: "Motor Service Reminder App",
      description: `Spring Boot-powered backend for vehicle service management that automates service reminders, appointment bookings, and service history tracking.
      Designed with Hibernate ORM and RESTful APIs, providing a scalable and secure solution.`,
      image: "/images/mot1.jpeg",
      icon: <Wrench className="h-6 w-6" />,
      tech: ["Spring Boot", "Hibernate", "REST API", "MySQL", "Spring Security", "Spring MVC","JWT", "Maven"],
      github: "https://github.com/Atharv190/motor-service-reminder",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0f] to-black"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent)]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
              scale: Math.random() * 0.8 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400 text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid layout with 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover opacity-80"
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-purple-500 text-white transition-colors"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-400 text-sm mb-4 whitespace-pre-line">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
