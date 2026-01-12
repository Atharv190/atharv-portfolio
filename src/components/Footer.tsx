import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden text-white shadow-inner"
      style={{
        background:
          'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 100%)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(139,92,246,0.3)',
      }}
    >
      {/* Glowing background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-purple-700/30 rounded-full blur-[150px] top-[-2rem] left-[-2rem] animate-pulse" />
        <div className="absolute w-80 h-80 bg-blue-700/25 rounded-full blur-[130px] bottom-[-2rem] right-[-2rem] animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Code2 className="h-8 w-8 text-yellow-400 drop-shadow-lg" />
              <span className="text-2xl font-extrabold text-white tracking-wider">
                Atharv Marathe
              </span>
            </div>
            <p className="text-xs text-gray-300">
              Passionate Web Developer and Problem Solver
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-md font-bold mb-3 text-yellow-300">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-md font-bold mb-3 text-yellow-300">Technologies</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>HTML & CSS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-bold mb-3 text-yellow-300">Contact Info</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Shirpur, Dhule</li>
              <li>+91 9028657039</li>
              <li>
                <a
                  href="mailto:atharvmarathe5@gmail.com"
                  className="hover:text-white hover:underline transition-all"
                >
                  atharvmarathe5@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Atharv Marathe.
          </p>

          <div className="flex space-x-5">
            <a
              href="https://github.com/Atharv190"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125 duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvmarathe19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125 duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:atharvmarathe5@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-transform hover:scale-125 duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.codechef.com/users/atharvmarathe"
              target="_blank"
              rel="noopener noreferrer"
              title="CodeChef"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <img
                src="https://cdn.codechef.com/images/cc-logo.svg"
                alt="CodeChef"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
