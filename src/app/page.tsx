"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import Stick from "@/components/stick";
import { projects, experiences } from "@/data-list/data-list";
import { FileText, AppWindow } from "lucide-react";
import Link from "next/link";

// Definimos las secciones para el menú
const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        // Configuración del Observer
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Detecta la sección cuando está en el tercio superior
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observar todas las secciones que tengan un ID
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-400 selection:bg-teal-300 selection:text-teal-900">
            {/* Glow Effect Background */}
            <div className="fixed inset-0 z-30 pointer-events-none lg:bg-[radial-gradient(600px_at_50%_50%,rgba(45,212,191,0.05),transparent)]" />

            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">

                    {/* COLUMNA IZQUIERDA: FIJA */}
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                                <a href="/">Reyan Jimenez</a>
                            </h1>
                            <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
                                Fullstack Developer
                            </h2>
                            <p className="mt-4 max-w-xs leading-normal">
                                Construyo, programo y desempeño.
                            </p>

                            {/* NAVEGACIÓN DINÁMICA */}
                            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                                <ul className="mt-16 w-max">
                                    {navItems.map((item) => {
                                        const isActive = activeSection === item.href.slice(1);
                                        return (
                                            <li key={item.href}>
                                                <a
                                                    className="group flex items-center py-3"
                                                    href={item.href}
                                                >
                                                    {/* La línea indicadora */}
                                                    <span className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${isActive
                                                        ? "w-16 bg-zinc-200"
                                                        : "w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-200"
                                                        }`}></span>
                                                    {/* El texto */}
                                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${isActive
                                                        ? "text-zinc-200"
                                                        : "text-zinc-500 group-hover:text-zinc-200"
                                                        }`}>
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <SocialLinks />
                    </header>

                    {/* COLUMNA DERECHA: CONTENIDO */}
                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

                        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <p className="mb-4">
                                Soy un desarrollador <span className="text-zinc-100 font-semibold">Fullstack</span> enfocado
                                en la intersección entre el diseño funcional y la ingeniería robusta. Mi
                                objetivo principal es transformar necesidades complejas en interfaces intuitivas
                                y sistemas escalables. Actualmente, formo parte del equipo de <a href="https://newryglobalmedia.com/" target="_blank" className="text-zinc-100 font-semibold">Newry Global Media</a>,
                                donde diseño y arquitecturo APIs y soluciones web que optimizan procesos críticos
                                y elevan la experiencia del usuario final.
                            </p>
                            <p className="mb-4">
                                Mi día a día se basa en perfeccionar un stack centrado en <span className="text-zinc-100 font-semibold">Python (Flask/Django), React y Node.js</span>,
                                manteniendo como objetivo que el código no solo funcione, sino que sea limpio y mantenible
                                a largo plazo. A lo largo de mi trayectoria en diversos ecosistemas tecnológicos, he
                                desarrollado una capacidad de adaptación que me permite colaborar eficientemente en
                                equipos multidisciplinarios.
                            </p>
                            <p>
                                Cuando no estoy frente al monitor, me encontrarás explorando nuevas herramientas experimentales,
                                disfrutando del béisbol, escuchando música o pasando tiempo con mi perro, Gauss.
                            </p>
                        </section>

                        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="space-y-12">
                                {experiences.map((exp) => (
                                    <ExperienceItem key={exp.company + exp.role} {...exp} />
                                ))}
                                <Link href="/pdf/Reyan_Jimenez_2026.pdf" target="_blank" className="flex items-center gap-2 text-zinc-100">
                                    <FileText className="w-5 h-5" />
                                    <span>Ver resumen completo...</span>
                                </Link>
                            </div>
                        </section>

                        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                            <div className="grid gap-12">
                                {projects.map((project) => (
                                    <ProjectCard key={project.title} {...project} />
                                ))}
                                <Link href="/projects" target="_blank" className="flex items-center gap-2 text-zinc-100">
                                    <AppWindow className="w-5 h-5" />
                                    <span>Ver otros proyectos...</span>
                                </Link>
                            </div>
                        </section>

                        <footer className="max-w-md pb-16 text-sm text-zinc-500 sm:pb-0">
                            <p>© {new Date().getFullYear()} — Reyan Jimenez. Creado con Next.js y desplegado con Vercel.</p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}