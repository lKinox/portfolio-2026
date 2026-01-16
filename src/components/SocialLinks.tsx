"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/lKinox",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/reyan-jimenez-750bb7238/",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:reyanjimenez@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "CV",
    icon: <FileText className="w-5 h-5" />,
    href: "/cv.pdf",
    color: "hover:text-green-400",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className={`p-2 transition-colors duration-200 text-zinc-400 ${link.color}`}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
