import { Github, Linkedin, Mail, Code2, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black/80 backdrop-blur-lg border-t border-white/10 text-white">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-purple-400" />
              <span className="text-lg font-semibold">
                Atharv Marathe
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
             Computer Engineering student passionate about building clean,
              scalable web applications and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-sm text-gray-400">
              {["Home", "About", "Qualification", "Projects", "Skills", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">
              Technologies
            </h3>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>React.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & MySQL</li>
              <li>Java & Spring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                Shirpur, Dhule
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                +91 9028657039
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a
                  href="mailto:atharvmarathe5@gmail.com"
                  className="hover:text-white transition"
                >
                  atharvmarathe5@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Atharv Marathe
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Atharv190"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-transform hover:scale-110"
            >
              <Github className="h-4.5 w-4.5" />
            </a>

            <a
              href="https://www.linkedin.com/in/atharvmarathe19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-transform hover:scale-110"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>

            <a
              href="mailto:atharvmarathe5@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-transform hover:scale-110"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>

            <a
              href="https://www.codechef.com/users/atharvmarathe"
              target="_blank"
              rel="noopener noreferrer"
              title="CodeChef"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <img
                src="https://cdn.codechef.com/images/cc-logo.svg"
                alt="CodeChef"
                className="h-4.5 w-4.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
