"use client";

import { motion } from "framer-motion";

interface ExperienceItemProps {
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
}

export default function ExperienceItem({ company, role, period, description, tags }: ExperienceItemProps) {
    return (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            {/* Overlay para hover */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                {period}
            </header>

            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-200">
                    <div>
                        <span className="inline-block">
                            {role} · {company}
                        </span>
                    </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-zinc-400">
                    {description}
                </p>
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
            </div>
        </div>
    );
}
