import { useState, useEffect } from "react";
import { Menu, X, Code2, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-hide states
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setScrolled(currentScrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScrollY / totalHeight) * 100);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Qualification", href: "#qualification" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "py-3" : "py-5"}
      `}
    >
      <nav
        className={`relative w-full transition-all duration-500
          ${
            scrolled
              ? "bg-gradient-to-r from-black/60 via-[#0b0b1a]/60 to-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        {/* Scroll Progress */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-black/70 p-2 rounded-xl border border-white/20">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-none">
                  ATHARV
                </span>
                <span className="text-[10px] text-purple-400 font-bold tracking-[0.3em] uppercase mt-1">
                  Portfolio
                </span>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`relative px-5 py-2 text-[13px] font-bold uppercase tracking-widest transition-all
                    ${
                      activeSection === link.name
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-6">
              <motion.a
                whileHover={{ y: -2, color: "#a855f7" }}
                href="https://github.com/Atharv190"
                target="_blank"
                className="text-gray-300"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, color: "#3b82f6" }}
                href="https://www.linkedin.com/in/atharvmarathe19"
                target="_blank"
                className="text-gray-300"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-white"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ SMALLER MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full
                         bg-black/90 backdrop-blur-xl
                         border-b border-white/10 lg:hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-300
                               hover:text-white uppercase tracking-wide"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
