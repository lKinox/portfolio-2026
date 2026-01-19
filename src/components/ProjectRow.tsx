"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectRowProps {
    year: string;
    title: string;
    madeAt?: string;
    builtWith: string[];
    link?: string;
    github?: string;
    index: number;
}

export default function ProjectRow({ year, title, madeAt, builtWith, link, github, index }: ProjectRowProps) {
    return (
        <motion.tr
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-zinc-800/50 last:border-none hover:bg-zinc-900/50 transition-colors group"
        >
            <td className="py-4 pr-4 align-top text-sm tabular-nums text-zinc-500">
                {year}
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-zinc-200">
                <div className="hidden sm:block">{title}</div>
                {/* Mobile: combinamos título y links para ahorrar espacio */}
                <div className="sm:hidden flex flex-col gap-2">
                    <span>{title}</span>
                    <div className="flex gap-3 text-zinc-400">
                        {github && <a href={github} target="_blank" className="hover:text-teal-300"><Github className="w-4 h-4" /></a>}
                        {link && <a href={link} target="_blank" className="hover:text-teal-300"><ExternalLink className="w-4 h-4" /></a>}
                    </div>
                </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm text-zinc-500 lg:table-cell">
                {madeAt || "—"}
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex flex-wrap gap-2">
                    {builtWith.map((tech) => (
                        <li key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 border border-zinc-700/50">
                            {tech}
                        </li>
                    ))}
                </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
                <div className="flex items-center gap-4 text-zinc-400">
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-zinc-200 transition-colors text-sm font-medium">
                            <span className="hidden xl:inline">Ver sitio</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </td>
        </motion.tr>
    );
}