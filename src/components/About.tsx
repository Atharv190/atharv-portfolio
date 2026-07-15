import { Code2, Brain, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-5 w-5 text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient solutions.",
      color: "border-purple-500/30 shadow-purple-500/10",
    },
    {
      icon: <Brain className="h-5 w-5 text-blue-400" />,
      title: "Problem Solver",
      description: "Applying logical thinking to solve challenges.",
      color: "border-blue-500/30 shadow-blue-500/10",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-amber-400" />,
      title: "Curious Learner",
      description: "Exploring new technologies and concepts.",
      color: "border-amber-500/30 shadow-amber-500/10",
    },
    {
      icon: <Rocket className="h-5 w-5 text-pink-400" />,
      title: "Fast Learner",
      description: "Continuously adapting and improving skills.",
      color: "border-pink-500/30 shadow-pink-500/10",
    },
  ];

  return (
    <section
      id="about"
      className="py-14 relative overflow-hidden bg-[#030014] flex flex-col items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500">
              Me
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-700" />

          <div className="relative p-6 md:p-7 rounded-3xl bg-[#0b0b1a]/80 border border-white/10 backdrop-blur-xl">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light italic">
              "Computer Engineering Student & MERN Stack Developer passionate
              about building scalable and user-friendly web applications."
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-5" />

            <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
              I'm a Computer Engineering student and Full Stack Developer
              specializing in the MERN stack. Through projects like CollabHub,
              StudyGeni, Alumni Tracking Portal, and my Portfolio Website, I've
              gained hands-on experience in React, Node.js, Express, MongoDB,
              Java, Spring Boot, and MySQL. I continuously improve my
              problem-solving skills through Data Structures and Algorithms while
              exploring new technologies to build impactful software solutions.
            </p>

            <div className="mt-6 flex justify-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest">
                  Projects
                </p>
              </div>

              <div className="w-px h-8 bg-white/10" />

              <div className="text-center">
                <p className="text-2xl font-bold text-white">2+</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest">
                  Hackathons
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className={`p-4 rounded-xl border ${item.color} bg-white/[0.03] backdrop-blur-sm flex flex-col items-center text-center shadow-md`}
            >
              <div className="mb-3 p-2 bg-white/5 rounded-lg">
                {item.icon}
              </div>

              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;