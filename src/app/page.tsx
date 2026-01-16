"use client";

import { motion } from "framer-motion";
import { animate, splitText, stagger } from 'animejs';
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import { projects, experiences, skills } from "@/data-list/data-list";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Tu animación existente
    const title = splitText('.text-animation-container', {
      chars: { class: 'inline-block' },
    });

    animate('.inline-block', {
      y: [0, -20, 0],
      opacity: [0, 1],
      duration: 1000,
      loop: false,
      delay: stagger(50),
      easing: 'easeInOutQuad'
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-12 md:py-24 text-zinc-300">
      <main className="mx-auto max-w-4xl space-y-32">

        {/* Hero Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl text-animation-container">
              Hola, soy Reyan.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-lg text-zinc-400 leading-relaxed"
            >
              Desarrollador Fullstack apasionado por crear interfaces minimalistas y robustas.
            </motion.p>
          </div>
          <SocialLinks />
        </section>

        {/* NUEVA: Skills Section - Crucial para ATS y reclutadores técnicos */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Stack Tecnológico
            </h2>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >

            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-zinc-100 font-medium capitalize">{category}</h3>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li key={skill} className="text-zinc-500 text-sm flex items-center gap-2">
                      <span className="h-1 w-1 bg-zinc-700 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Proyectos Destacados
            </h2>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Experiencia Profesional
            </h2>
            <div className="h-px w-12 bg-zinc-800" />
          </div>
          <div className="grid gap-12">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.company + exp.role} {...exp} />
            ))}
          </div>
        </section>

        {/* NUEVA: Contact / CTA Section - Facilita el siguiente paso */}
        <section className="space-y-8 py-12 border-t border-zinc-900">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold text-zinc-100">¿Tienes un proyecto en mente?</h2>
            <p className="text-zinc-400">
              Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Si buscas a alguien que cuide el detalle y la performance, hablemos.
            </p>
            <div className="pt-4">
              <a
                href="mailto:reyanjimenez@gmail.com"
                className="inline-block bg-zinc-100 text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-zinc-300 transition-colors"
              >
                Enviar un correo
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-900 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} — Reyan Jimenez.
          </p>
        </footer>
      </main>
    </div>
  );
}
