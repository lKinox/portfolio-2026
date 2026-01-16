// Definimos interfaces para tener autocompletado y evitar errores
export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Wordpress"],
    backend: ["Python", "Flask", "Django", "Node.js", "Docker"],
    database: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
    tools: ["Git", "Vercel", "Google Cloud"]
};

export const projects: Project[] = [
    {
        title: "Noon",
        description: "Main page de una empresa de desarrollo de software.",
        tags: ["Next.js", "Tailwind", "Vercel", "OpenAI"],
        link: "https://nooncode.dev/",
    },
    {
        title: "Nova Bank App",
        description: "Interfaz bancaria minimalista con enfoque en la experiencia de usuario y transacciones en tiempo real.",
        tags: ["React Native", "TypeScript", "Node.js"],
        link: "https://github.com",
    },
    {
        title: "Flux Design System",
        description: "Un sistema de diseño escalable para aplicaciones empresariales, optimizado para velocidad y accesibilidad.",
        tags: ["Storybook", "Framer Motion", "React"],
        link: "https://github.com",
    },
];

export const experiences: Experience[] = [
    {
        role: "Programador Fullstack",
        company: "Newry Global",
        period: "2025 — Presente",
        description: "Desarrollo de APIs, aplicaciones web y mantenimiento de sistemas existentes.",
    },
    {
        role: "Programador",
        company: "Betfine24",
        period: "2024 — 2025",
        description: "Desarrollo de páginas web, APIs, aplicaciones web y mantenimiento de sistemas existentes.",
    },
    {
        role: "Programador Web",
        company: "Waopress",
        period: "2024 — 2024",
        description: "Desarrollo y mantenimiento de páginas web.",
    },
    {
        role: "Programador Web",
        company: "Trifecta",
        period: "2023 — 2024",
        description: "Desarrollo y mantenimiento de páginas web, creacion de apps y APIs de uso interno.",
    },
    {
        role: "Programador Web",
        company: "Elitelca",
        period: "2023 — 2023",
        description: "Desarrollo y mantenimiento de páginas web",
    },
    {
        role: "Programador Web",
        company: "Posa Studio Creativo",
        period: "2022 — 2023",
        description: "Desarrollo de landing para clientes globales y gestión de sistema administrativo interno.",
    },
];