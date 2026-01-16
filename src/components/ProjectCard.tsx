"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900"
        >
            <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium text-zinc-100">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 transition-colors hover:text-zinc-100"
                >
                    <ExternalLink className="w-5 h-5" />
                </a>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 border border-zinc-700/50"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
