import { useState } from "react";
import {
  Github,
  FileText,
  Wifi,
  Wrench,
  Users,
  PlayCircle,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "EduNexa || Smart Learning Platform",
      description:
        "EduNexa is a full-stack EdTech web application that enables secure user registration using email-based OTP authentication and role-based access for students and teachers. It provides interactive dashboards, scalable REST APIs and a smooth learning experience focused on security, usability and performance",
      image: "/images/edunexa.png",
      video: "https://edunexa-tech.vercel.app",
      liveLink: "https://edunexa-tech.vercel.app", // Add your deployment link here
      icon: <FileText className="h-6 w-6" />,
      tech: ["React", "Node.js", "MongoDB", "JWT", "NodeMailer"],
      github: "https://github.com/Atharv190/EduNexa-Frontend",
      hasLiveDemo: true, // Add this to show live demo button
    },
    {
      title: "Internet Service Complaint System",
      description:
        "A Java-based web application that allows users to register internet service complaints, track their status and manage complaint records efficiently. The system helps administrators and service staff handle complaints in an organized way, improving response time and service management.",
      image: "/images/int1.png",
      icon: <Wifi className="h-6 w-6" />,
      tech: ["JSP", "Servlets", "MySQL", "Bootstrap"],
      github: "https://github.com/Atharv190/internet-service-complaint",
    },
    {
      title: "Alumni Tracking Portal",
      description:
        "A web-based alumni management system developed for educational institutions to store and track alumni records. The portal also helps current students connect with alumni for guidance, networking, and career support, improving engagement between students and alumni.",
      image: "/images/alumni-portal.jpeg",
      video: "https://github.com/Atharv190/atharv-portfolio-new/releases/download/v1.0-demo/alumni-demo.mp4",
      icon: <Users className="h-6 w-6" />,
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      github: "https://github.com/Atharv190/alumni-tracking-portal",
      hasDemo: true,
    },
    {
      title: "CollabHub || Student Project Collaboration Platform",
      description:
        "A Java Spring based backend application that stores and tracks vehicle service details such as service history and dates. It helps users maintain service records through REST APIs for easy access and future reference.",
      image: "/images/mot1.jpeg",
      icon: <Wrench className="h-6 w-6" />,
      tech: ["Spring Boot", "Hibernate", "REST API"],
      github: "https://github.com/Atharv190/motor-service-reminder",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0f] to-black"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-4xl font-bold text-white">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <div className="w-24 h-1 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all"
              >
                {/* Media */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover opacity-80"
                  />

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-20 p-2 rounded-full
                               bg-black/60 hover:bg-purple-500 text-white transition"
                  >
                    <Github className="h-5 w-5" />
                  </a>

                  {/* Live Demo Button for EduNexa */}
                  {project.hasLiveDemo && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10
                                 flex items-center gap-2 px-4 py-2
                                 bg-gradient-to-r from-purple-600 to-blue-600 
                                 hover:from-purple-700 hover:to-blue-700
                                 text-white rounded-full font-medium transition shadow-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  )}

                  {/* Watch Demo Button */}
                  {project.hasDemo && (
                    <button
                      onClick={() => setActiveVideo(project.video)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10
                                 flex items-center gap-2 px-4 py-2
                                 bg-purple-600 hover:bg-purple-700
                                 text-white rounded-full font-medium transition"
                    >
                      <PlayCircle className="h-5 w-5" />
                      Watch Demo
                    </button>
                  )}

                  {/* Clickable card overlay for live link */}
                  {project.liveLink && (
                    <div 
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="absolute inset-0 cursor-pointer z-5"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

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

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl bg-[#0b0b1a]/90 border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center 
                         rounded-full bg-black text-white text-xl 
                         hover:bg-gray-900 transition"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;