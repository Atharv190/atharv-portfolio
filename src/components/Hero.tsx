import { Github, Linkedin, Terminal, Code, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Main container animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Staggered Text Variants
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8, // Starts after the name appears
      staggerChildren: 0.04, // Speed of each letter
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

const ButtonStyles =
  "rounded-full font-semibold text-white select-none cursor-pointer transition-all duration-300";

const DownloadCVButton = () => (
  <motion.a
    href="/images/Resume_Atharv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
    }}
    whileTap={{ scale: 0.95 }}
    className={`${ButtonStyles} px-10 py-3 bg-white/10 border border-white/30 flex items-center gap-2`}
  >
    <span>📄</span> View Resume
  </motion.a>
);

const Hero = () => {
  const roleText = "Aspiring Full-Stack Developer";

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4">
           <Terminal className="text-white/5 w-24 h-24" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/3 right-1/4">
           <Code className="text-white/5 w-16 h-16" />
        </motion.div>
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-1/4 left-1/3">
           <Cpu className="text-white/5 w-20 h-20" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20
                   flex flex-col items-center justify-center min-h-screen z-10"
      >
        <div className="text-center flex flex-col items-center">

          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <img
                src="/images/bb.jpeg"
                alt="Atharv"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-7xl font-extrabold text-transparent
                       bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400 mb-2"
          >
            Hi, I'm Atharv
          </motion.h1>

          {/* 🔥 UPDATED ROLE – Staggered Letter Reveal */}
          <motion.div
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="mt-2 flex justify-center flex-wrap"
          >
            {roleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className="text-lg sm:text-2xl text-purple-400 font-semibold tracking-wide"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Badges */}
          <div className="flex justify-center gap-4 mt-8 mb-8 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-purple-500/10
                             text-purple-400 border border-purple-500/30 text-sm font-medium">
              💻 Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10
                             text-blue-400 border border-blue-500/30 text-sm font-medium">
              🚀 Tech Enthusiast
            </span>
          </div>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="backdrop-blur-md bg-white/5 p-6 rounded-2xl
                       border border-white/10 max-w-2xl text-center mb-12 shadow-2xl"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              👋 I’m{" "}
              <span className="text-white font-semibold">
                Atharv Marathe
              </span>
              , a Computer Engineering student interested in building practical
                and efficient software solutions. I enjoy learning through real
                projects, problem-solving and writing clean, understandable code.
                </p>
          </motion.div>

          {/* Resume & Socials */}
          <div className="flex flex-col items-center gap-8">
            <DownloadCVButton />

            <div className="flex gap-5">
              {[
                { icon: <Github />, href: "https://github.com/Atharv190" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/atharvmarathe19" },
                { icon: <Mail />, href: "mailto:atharvmarathe5@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#a855f7" }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;