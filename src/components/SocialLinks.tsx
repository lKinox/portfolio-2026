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
    href: "/pdf/Reyan_Jimenez_2026.pdf",
    color: "hover:text-green-400",
  },
];

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      {socialLinks.map((link) => (
        <li key={link.name} className="text-xs">
          <a
            href={link.href}
            target="_blank"
            className={`block text-zinc-400 transition-colors duration-200 ${link.color}`}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
