import { useState, useEffect, useRef } from "react";
import {
  Github,
  FileText,
  Wifi,
  Users,
  Zap,
  PlayCircle,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJsonwebtokens,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiBootstrap,
  SiExpress,
  SiLeaflet,
  SiOpenstreetmap,
} from "react-icons/si";
import {
  FaJava,
  FaEnvelope,
  FaCode,
  FaServer,
  FaFileCode,
} from "react-icons/fa";

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const tooltipRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "EduNexa",
      subtitle: "Smart Learning Platform",
      description:
        "EduNexa is a full-stack EdTech web application that enables secure user registration using email-based OTP authentication and role-based access for students and teachers. It provides interactive dashboards, scalable REST APIs and a smooth learning experience focused on security, usability and performance.",
      image: "/images/edunexaa.png",
      liveLink: "https://edunexa-tech.vercel.app",
      icon: <FileText className="h-5 w-5" />,
      tech: ["React", "Node.js", "MongoDB", "JWT", "NodeMailer"],
      github: "https://github.com/Atharv190/EduNexa-Frontend",
      status: "Live",
    },
    {
      title: "CollabHub",
      subtitle: "Student Project Collaboration Platform",
      description:
        "CollabHub is a full-stack web application that enables students to create, discover, and collaborate on academic projects. It features secure authentication, project management, team collaboration and a responsive dashboard, making it easier for students to connect and work together effectively.",
      image: "/images/CollabHub.png",
      icon: <Users className="h-5 w-5" />,
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/Atharv190/CollabHub-Frontend",
      liveLink: "https://collabhub-project.vercel.app",
      status: "Live",
    },
    {
      title: "Alumni Portal",
      subtitle: "Tracking & Networking System",
      description:
        "A web-based alumni management system developed for educational institutions to store and track alumni records. The portal also helps current students connect with alumni for guidance, networking and career support, improving engagement between students and alumni.",
      image: "/images/alumni-portall.png",
      video:
        "https://github.com/Atharv190/atharv-portfolio-new/releases/download/v1.0-demo/alumni-demo.mp4",
      icon: <Users className="h-5 w-5" />,
      tech: ["Java", "JSP", "Servlets", "MySQL"],
      github: "https://github.com/Atharv190/alumni-tracking-portal",
      status: "Completed",
    },
    {
      title: "Complaint System",
      subtitle: "Internet Service Management",
      description:
        "A Java-based web application that allows users to register internet service complaints, track their status and manage complaint records efficiently. The system helps administrators and service staff handle complaints in an organized way, improving response time and service management.",
      image: "/images/isp.png",
      icon: <Wifi className="h-5 w-5" />,
      tech: ["JSP", "Servlets", "MySQL", "Bootstrap"],
      github: "https://github.com/Atharv190/internet-service-complaint",
      status: "Completed",
    },
    {
      title: "VoltGrid",
      subtitle: "EV Charging Station Management System",
      description:
        "VoltGrid is a full-stack EV charging station management system that enables users to discover nearby charging stations through an interactive map while allowing administrators to manage station details securely. The platform features JWT authentication, role-based access, station management and REST APIs, delivering a seamless and scalable EV charging experience.",
      image: "/images/voltgrid.png",
      icon: <Zap className="h-5 w-5" />,
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "React Leaflet",
        "OpenStreetMap",
      ],
      github: "https://github.com/Atharv190/EV-Charging-Station",
      liveLink: "https://ev-charging-station-voltgrid.vercel.app",
      status: "Live",
    },
  ];

  const techIconMap: Record<string, React.ElementType> = {
    React: SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    JWT: SiJsonwebtokens,
    NodeMailer: FaEnvelope,
    "Spring Boot": SiSpringboot,
    Hibernate: SiHibernate,
    "REST API": FaCode,
    Java: FaJava,
    JSP: FaFileCode,
    Servlets: FaServer,
    MySQL: SiMysql,
    Bootstrap: SiBootstrap,
    "React Leaflet": SiLeaflet,
    "OpenStreetMap": SiOpenstreetmap,
  };

  const techColorMap: Record<string, string> = {
    React: "#61DAFB",
    "Node.js": "#339933",
    "Express.js": "#404D59",
    MongoDB: "#47A248",
    JWT: "#000000",
    NodeMailer: "#D14836",
    "Spring Boot": "#6DB33F",
    Hibernate: "#59666C",
    "REST API": "#FF6C37",
    Java: "#F89820",
    JSP: "#007396",
    Servlets: "#007396",
    MySQL: "#4479A1",
    Bootstrap: "#7952B3",
    "React Leaflet": "#199900",
    "OpenStreetMap": "#7EBC6F",
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 border-green-500/30 bg-green-500/10";
      case "Completed":
        return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      default:
        return "text-gray-400 border-gray-500/30 bg-gray-500/10";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeTooltip !== null) {
        const ref = tooltipRefs.current[activeTooltip];
        if (ref && !ref.contains(event.target as Node)) {
          setActiveTooltip(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeTooltip]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTooltip(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0f] to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 mt-3 sm:mt-4 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 md:h-60 flex-shrink-0 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-0 transition-opacity duration-500"
                  loading="lazy"
                  onLoad={(e) => {
                    e.currentTarget.classList.add("opacity-100");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-start gap-2 min-w-0">
                      <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400 flex-shrink-0 mt-0.5">
                        {project.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-[10px] sm:text-xs text-purple-300/70 font-medium truncate">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className={`flex-shrink-0 flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[9px] sm:text-[10px] font-medium rounded-full border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current" />
                      {project.status}
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      tooltipRefs.current[index] = el;
                    }}
                    className="relative cursor-help"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTooltip(activeTooltip === index ? null : index);
                    }}
                    onMouseEnter={() => setActiveTooltip(index)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {activeTooltip === index && (
                      <div className="absolute z-50 bottom-full left-0 sm:left-0 mb-2 w-64 sm:w-72 max-w-[calc(100vw-2rem)] p-3 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl text-xs text-gray-200 pointer-events-none">
                        <p className="leading-relaxed">{project.description}</p>
                        <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-gray-900/95 border-r border-b border-white/10 rotate-45" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 sm:mt-5">
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {project.tech.map((tech, i) => {
                      const IconComponent = techIconMap[tech];
                      const iconColor = techColorMap[tech] || "#ffffff";
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 text-[9px] sm:text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          {IconComponent && (
                            <IconComponent
                              color={iconColor}
                              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
                            />
                          )}
                          <span className="truncate max-w-[60px] sm:max-w-none">
                            {tech}
                          </span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition"
                    >
                      <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span className="hidden xs:inline">Code</span>
                      <span className="xs:hidden">Git</span>
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-[10px] sm:text-xs font-medium rounded-full transition shadow-lg"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        <span className="hidden xs:inline">Live Demo</span>
                        <span className="xs:hidden">Live</span>
                      </a>
                    )}

                    {project.video && (
                      <button
                        onClick={() => setActiveVideo(project.video!)}
                        className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-medium rounded-full transition border border-purple-500/30"
                      >
                        <PlayCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        <span className="hidden xs:inline">Demo</span>
                        <span className="xs:hidden">▶</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#0b0b1a]/90 border border-white/10 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black text-white text-lg sm:text-xl hover:bg-gray-900 transition"
            >
              ✕
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;