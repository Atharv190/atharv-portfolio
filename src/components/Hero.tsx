import { Github, Linkedin, Terminal, Code, Cpu, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ButtonStyles = "rounded-full font-semibold text-white select-none cursor-pointer";

const CollaborateButton = () => (
  <motion.a
    href="#contact"
    whileHover={{
      scale: 1.1,
      boxShadow: '0 0 20px 6px rgba(128,0,128,0.7)', // softer purple glow
      transition: { duration: 0.3, ease: 'easeOut' },
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ boxShadow: '0 5px 10px rgba(128,0,128,0.3)' }}
    animate={{ boxShadow: '0 8px 20px rgba(128,0,128,0.5)' }}
    className={`${ButtonStyles} px-12 py-4 bg-gradient-to-r from-purple-700 to-purple-900 shadow-md`}
    tabIndex={0}
    aria-label="Let's Collaborate"
  >
    🚀 Let's Collaborate
  </motion.a>
);

const DownloadCVButton = () => (
  <motion.a
    href="/images/Resume_Atharv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.4)',
      transition: { duration: 0.3, ease: 'easeOut' },
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)' }}
    animate={{ boxShadow: '0 6px 20px rgba(255, 255, 255, 0.25)' }}
    className={`${ButtonStyles} px-10 py-3 bg-white/10 border border-white/30`}
    tabIndex={0}
    aria-label="Download Resume CV"
  >
    📄 Download Resume
  </motion.a>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-black to-gray-900 animate-pulse-slow"
        ></div>
        <div
          className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,transparent_1px)] animate-grid-slow"
        ></div>

        {/* Floating colored blurred circles */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/10 rounded-full blur-3xl animate-float-slightly-different" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-float-slightly delay-1000" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Terminal className="absolute top-1/4 left-1/4 text-white/5 w-24 h-24 animate-float-slow-rotate" />
        <Code className="absolute top-1/3 right-1/4 text-white/5 w-16 h-16 animate-float-reverse" />
        <Cpu className="absolute bottom-1/4 left-1/3 text-white/5 w-20 h-20 animate-float-delay-rotate" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="text-center">
          <div className="relative inline-block mb-8 group">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/20 relative z-10 transition-shadow duration-500 group-hover:shadow-[0_0_30px_10px_rgba(128,0,255,0.4)]">
              <img
                src="/images/bb.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 animate-spin-faster transition-opacity duration-500" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2 select-text"
          >
            Hi, I'm Atharv
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '35ch' }}
            transition={{ delay: 0.6, duration: 2, ease: 'easeInOut' }}
            className="text-base sm:text-xl text-gray-400 mb-6 font-mono whitespace-nowrap border-r-2 border-gray-400 pr-4 mx-auto overflow-hidden typing-cursor"
          >
            Crafting code with creativity...💡
          </motion.p>

          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-semibold animate-pulse-text shadow-sm">
              💻 Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold animate-pulse-text-delay shadow-sm">
              🛠 Engineer
            </span>
            <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 font-semibold animate-pulse-text-longer-delay shadow-sm">
              🚀 Tech Enthusiast
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="backdrop-blur-lg bg-white/5 p-6 rounded-xl shadow-lg border border-white/20 max-w-2xl mx-auto mb-12"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed select-text">
              👋 Hey there! I’m <span className="text-purple-400 font-semibold">Atharv Marathe</span>, a Computer Science student 👨‍💻 passionate about building the future of technology 🚀.
              <br />I love designing user-centric experiences with ✨ beautiful front-end code and ⚙ seamless logic.
            </p>
          </motion.div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <CollaborateButton />
            <DownloadCVButton />

            <div className="flex gap-3">
              {[{
                href: 'https://github.com/Atharv190',
                title: 'GitHub',
                icon: <Github className="h-6 w-6" />,
              }, {
                href: 'https://www.linkedin.com/in/atharvmarathe19',
                title: 'LinkedIn',
                icon: <Linkedin className="h-6 w-6" />,
              }, {
                href: 'mailto:atharvmarathe5@gmail.com',
                title: 'Email',
                icon: <Mail className="h-6 w-6" />,
              }].map(({ href, title, icon }) => (
                <motion.a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  whileHover={{ scale: 1.3, color: '#a855f7' }} // purple glow
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors flex items-center justify-center select-none"
                >
                  {icon}
                </motion.a>
              ))}
              {/* Custom icons like CodeChef and LeetCode */}
              <motion.a
                href="https://www.codechef.com/users/atharvmarathe"
                target="_blank"
                rel="noopener noreferrer"
                title="CodeChef"
                whileHover={{ scale: 1.3 }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors flex items-center justify-center select-none"
              >
                <img
                  src="https://cdn.codechef.com/images/cc-logo.svg"
                  alt="CodeChef"
                  className="h-6 w-6"
                />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/Atharv_marathe19/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                whileHover={{ scale: 1.3 }}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors flex items-center justify-center select-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M16.233 12.645c.02-.03.038-.06.054-.088l2.872-5.109a.749.749 0 0 0-.69-1.115.742.742 0 0 0-.58.282l-2.79 3.328-2.998-3.1a.75.75 0 0 0-1.099 1.021l3.53 3.65-3.854 3.62a.749.749 0 0 0-.107.96.755.755 0 0 0 .63.361.742.742 0 0 0 .463-.17l5.459-4.412zM12.75 6a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 .75-.75z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blinking cursor CSS */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% {
            border-color: transparent;
          }
          25%, 75% {
            border-color: #9ca3af; /* gray-400 */
          }
        }
        .typing-cursor {
          border-right: 2px solid #9ca3af;
          animation: blink 1.2s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
