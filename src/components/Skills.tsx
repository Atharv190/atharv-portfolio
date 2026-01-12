import { 
  Code2, Globe, Terminal, 
  Settings, Cloud, 
  GitBranch, CpuIcon, FileCode, Code, Database 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming",
      icon: <Code className="h-5 w-5 text-blue-400" />,
      skills: [
        { name: "Python", level: "Beginner", icon: <FileCode className="h-4 w-4 text-yellow-400" /> },
        { name: "C++", level: "Intermediate", icon: <FileCode className="h-4 w-4 text-blue-300" /> },
        { name: "Java", level: "Intermediate", icon: <FileCode className="h-4 w-4 text-red-400" /> },
        { name: "Spring", level: "Intermediate", icon: <Code2 className="h-4 w-4 text-green-400" /> },
      ]
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "HTML5 / CSS3", level: "Intermediate", icon: <FileCode className="h-4 w-4 text-orange-500" /> },
        { name: "React.js", level: "Intermediate", icon: <CpuIcon className="h-4 w-4 text-blue-500" /> },
        { name: "Node.js", level: "Intermediate", icon: <Code2 className="h-4 w-4 text-green-500" /> },
        { name: "Express.js", level: "Intermediate", icon: <Code2 className="h-4 w-4 text-gray-300" /> },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: <Settings className="h-5 w-5 text-green-400" />,
      skills: [
        { name: "AWS", level: "Beginner", icon: <Cloud className="h-4 w-4 text-yellow-500" /> },
        { name: "Git & GitHub", level: "Intermediate", icon: <GitBranch className="h-4 w-4 text-orange-600" /> },
        { name: "Postman", level: "Intermediate", icon: <Terminal className="h-4 w-4 text-orange-400" /> },
        { name: "VS Code", level: "Intermediate", icon: <Code2 className="h-4 w-4 text-cyan-400" /> },
      ]
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      skills: [
        { name: "MongoDB", level: "Intermediate", icon: <Database className="h-4 w-4 text-emerald-300" /> },
        { name: "MySQL", level: "Intermediate", icon: <Database className="h-4 w-4 text-blue-300" /> },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-400/20 text-green-400 border-green-400/20';
      case 'Intermediate':
        return 'bg-blue-400/20 text-blue-400 border-blue-400/20';
      case 'Beginner':
        return 'bg-purple-400/20 text-purple-400 border-purple-400/20';
      default:
        return 'bg-gray-400/20 text-gray-400 border-gray-400/20';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-center">

        {/* 🔥 Animated Heading */}
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {technicalSkills.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center justify-center gap-2">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4
                               border border-white/10
                               hover:border-purple-500/50
                               transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 text-sm rounded-full border ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
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
