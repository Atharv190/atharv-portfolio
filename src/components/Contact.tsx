import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "atharvmarathe5@gmail.com",
    link: "mailto:atharvmarathe5@gmail.com",
    color: "text-purple-400",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 9028657039",
    link: "tel:+919028657039",
    color: "text-blue-400",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Shirpur, Dhule",
    link: "#",
    color: "text-indigo-400",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-[#030014]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-medium uppercase tracking-widest mb-3">
            <MessageSquare className="w-4 h-4" />
            Get in touch
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Amazing
            </span>
          </h2>

          <div className="w-14 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-700" />

          <div className="relative bg-[#0b0b1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Side */}
              <div className="p-6 md:p-8 bg-black/30 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.link}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div
                        className={`p-2.5 rounded-lg bg-black/40 border border-white/10 ${item.color} group-hover/item:scale-105 transition-all`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm text-white font-medium group-hover/item:text-purple-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-xs text-gray-400 leading-relaxed italic">
                    "Great things are built through collaboration."
                  </p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-6 md:p-8">
                <form className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Atharv Marathe"
                      className="w-full px-3.5 py-2.5 bg-black/30 border border-white/10 rounded-lg text-sm text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="atharv@example.com"
                      className="w-full px-3.5 py-2.5 bg-black/30 border border-white/10 rounded-lg text-sm text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How can I help you?"
                      className="w-full px-3.5 py-2.5 bg-black/30 border border-white/10 rounded-lg text-sm text-white outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 rounded-lg font-semibold text-sm text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
