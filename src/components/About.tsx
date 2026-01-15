import { Code2, Brain, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6 text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient solutions.",
      color: "border-purple-500/30 shadow-purple-500/10",
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      title: "Problem Solver",
      description: "Applying logical thinking to solve challenges.",
      color: "border-blue-500/30 shadow-blue-500/10",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-400" />,
      title: "Curious Learner",
      description: "Exploring new technologies and concepts.",
      color: "border-amber-500/30 shadow-amber-500/10",
    },
    {
      icon: <Rocket className="h-6 w-6 text-pink-400" />,
      title: "Fast Learner",
      description: "Continuously adapting and improving skills.",
      color: "border-pink-500/30 shadow-pink-500/10",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-[#030014] flex flex-col items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500">
              Me
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "72px" }}
            className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative group mb-14"
        >
          {/* Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-35 transition duration-700" />

          <div className="relative p-8 md:p-10 rounded-3xl bg-[#0b0b1a]/80 border border-white/10 backdrop-blur-xl">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic">
              "I am a 3rd-year{" "}
              <span className="text-purple-400 font-medium">
                Computer Engineering student
              </span>{" "}
              with a strong interest in software development and problem-solving."
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
             I focus on building practical applications by writing clean and efficient code and creating simple user-friendly interfaces. 
             I enjoy learning by doing and working on real projects that help me understand how applications are built and function in real-world scenarios. 
             Through hands-on projects, regular practice and continuous learning, I aim to strengthen my technical foundation and improve my problem-solving and development skills.
            </p>

            <div className="mt-10 flex justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest">
                  Projects
                </p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">2+</p>
                <p className="text-xs uppercase text-gray-500 tracking-widest">
                  Hackathons
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className={`p-5 rounded-xl border ${item.color} bg-white/[0.03] backdrop-blur-sm flex flex-col items-center text-center shadow-md`}
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
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
