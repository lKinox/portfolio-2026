"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
    company: string;
    role: string;
    period: string;
    description: string;
}

export default function ExperienceItem({ company, role, period, description }: ExperienceItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-8px)] before:w-px before:bg-zinc-800"
        >
            <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-zinc-600" />
            <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">{period}</span>
                <h3 className="text-lg font-semibold text-zinc-100">{role}</h3>
                <span className="text-sm font-medium text-zinc-400">{company}</span>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}
