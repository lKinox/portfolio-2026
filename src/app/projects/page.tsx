"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectRow from "@/components/ProjectRow";
import { allProjects } from "@/data-list/data-list";

export default function ArchivePage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-400 selection:bg-teal-300 selection:text-teal-900">
            <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">

                {/* Botón Volver */}
                <Link
                    href="/"
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-zinc-400"
                >
                    <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
                    Reyan Jimenez
                </Link>

                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                    Archivo de Proyectos
                </h1>

                <table className="mt-12 w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/75 px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-zinc-100">Año</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-zinc-100">Proyecto</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-zinc-100 lg:table-cell">Hecho en</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-zinc-100 lg:table-cell">Tecnologías</th>
                            <th className="hidden py-4 text-sm font-semibold text-zinc-100 sm:table-cell">Enlaces</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProjects.map((project, index) => (
                            <ProjectRow
                                key={project.title + index}
                                index={index}
                                {...project}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}