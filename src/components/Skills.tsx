import {
  Code2,
  Globe,
  Terminal,
  UploadCloud,
  Settings,
  GitBranch,
  CpuIcon,
  FileCode,
  Code,
  Database,
  Layers,
  Box,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming",
      icon: <Code className="h-5 w-5 text-blue-400" />,
      skills: [
        { name: "Java", icon: <FileCode className="h-4 w-4 text-red-400" /> },
        { name: "C", icon: <FileCode className="h-4 w-4 text-blue-300" /> },
        { name: "JavaScript", icon: <Code2 className="h-4 w-4 text-green-400" /> },
      ],
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "HTML5 & CSS3", icon: <FileCode className="h-4 w-4 text-orange-500" /> },
        { name: "React.js", icon: <CpuIcon className="h-4 w-4 text-blue-500" /> },
        { name: "Node.js", icon: <Code2 className="h-4 w-4 text-green-500" /> },
        { name: "Express.js", icon: <Code2 className="h-4 w-4 text-gray-300" /> },
        { name: "Tailwind CSS", icon: <FileCode className="h-4 w-4 text-cyan-400" /> },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: <Settings className="h-5 w-5 text-green-400" />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="h-4 w-4 text-orange-600" /> },
        { name: "Postman", icon: <Terminal className="h-4 w-4 text-orange-400" /> },
        { name: "VS Code", icon: <Code2 className="h-4 w-4 text-cyan-400" /> },
        { name: "Vercel", icon: <UploadCloud className="h-4 w-4 text-sky-400" /> },
        { name: "Render", icon: <Server className="h-4 w-4 text-indigo-400" /> },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      skills: [
        { name: "MongoDB", icon: <Database className="h-4 w-4 text-emerald-300" /> },
        { name: "MySQL", icon: <Database className="h-4 w-4 text-blue-300" /> },
      ],
    },
    {
      category: "CS Fundamentals",
      icon: <Layers className="h-5 w-5 text-yellow-400" />,
      skills: [
        { name: "Operating Systems", icon: <Server className="h-4 w-4 text-cyan-400" /> },
        { name: "Data Structures & Algo", icon: <Code2 className="h-4 w-4 text-purple-400" /> },
        { name: "OOP Concepts", icon: <Box className="h-4 w-4 text-amber-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 lg:py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-14 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base">
            Technologies, tools, and concepts I work with daily
          </p>
        </motion.div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >

              <div className="flex items-center justify-center gap-2.5">
                {category.icon}
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3.5
                               border border-white/10
                               hover:border-purple-500/60
                               hover:bg-white/10
                               transition-all duration-300
                               shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {skill.icon}
                      <span className="text-gray-200 text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;