import {
  Code2, Globe, Terminal,UploadCloud ,
  Settings,
  GitBranch, CpuIcon, FileCode, Code, Database
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
        { name: "Python", icon: <FileCode className="h-4 w-4 text-yellow-400" /> },
        { name: "Spring", icon: <Code2 className="h-4 w-4 text-green-400" /> },
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
      ],
    },
    {
      category: "Tools & DevOps",
      icon: <Settings className="h-5 w-5 text-green-400" />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="h-4 w-4 text-orange-600" /> },
        { name: "Postman", icon: <Terminal className="h-4 w-4 text-orange-400" /> },
        { name: "VS Code", icon: <Code2 className="h-4 w-4 text-cyan-400" /> },
        {
          name: "Vercel",
          icon: <UploadCloud className="h-4 w-4 text-sky-400" />, // deployment cloud icon
        }
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
  ];

  return (
    <section
      id="skills"
      className="py-18 lg:py-22 bg-gray-900 relative overflow-hidden min-h-[90vh]"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative flex flex-col items-center">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
          {technicalSkills.map((category, index) => (
            <div key={index} className="space-y-7">

              {/* Category */}
              <div className="flex items-center justify-center gap-3">
                {category.icon}
                <h3 className="text-2xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-5
                               border border-white/10
                               hover:border-purple-500/50
                               hover:scale-[1.04]
                               transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {skill.icon}
                      <span className="text-gray-300 text-lg font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
