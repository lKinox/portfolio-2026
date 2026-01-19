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
    tags: string[];
    link: string;
}

export interface AllProjects {
    year: string;
    title: string;
    madeAt?: string;
    builtWith: string[];
    link?: string;
    github?: string;
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
        description: "Main page de una empresa de desarrollo de software. Desarrollado con Next.js, Tailwind, Vercel y OpenAI. Con un Chatbot con IA para gestionar consultas de los clientes y generar prototipos de proyectos utilizando el motor de Vercel V0.",
        tags: ["Next.js", "Tailwind", "Vercel", "OpenAI"],
        link: "https://nooncode.dev/",
    },
    {
        title: "Visualisto",
        description: "Landing page de un proyecto personal de un gestor de catálogos de productos. Desarrollado con Next.js, Tailwind y Vercel.",
        tags: ["Next.js", "Tailwind", "Vercel"],
        link: "https://landing-visualisto.vercel.app/",
    },
    {
        title: "Scrapper App",
        description: "API Rest que permite extraer datos de una páginas de supermercados y guardarlos en una base de datos MongoDB. Desarrollado con Python, Flask, Selenium y MongoDB.",
        tags: ["Python", "Flask", "Selenium", "MongoDB"],
        link: "https://github.com/lKinox/App-Scrapy-and-MongoDB-for-App-Scrap.git",
    },
];

export const experiences: Experience[] = [
    {
        role: "Programador Fullstack",
        company: "Newry Global",
        period: "2025 — Presente",
        description: "Colaborar y desarrollar APIs, aplicaciones web, dar mantenimiento de sistemas existentes. Colaboración en el desarrollo de nuevas funcionalidades y mejora de la experiencia de usuario.",
        tags: ["Flask", "Node.js", "MySQL", "Angular", "Docker"],
        link: "https://newryglobal.com/",
    },
    {
        role: "Programador / Soporte IT",
        company: "Betfine24",
        period: "2024 — 2025",
        description: "Desarrollo de páginas web, APIs, aplicaciones web y mantenimiento de sistemas existentes. Soporte técnico a usuarios y resolución de problemas técnicos.",
        tags: ["Flask", "Wordpress", "Next.js", "Node.js", "HTML", "CSS", "JavaScript"],
        link: "https://newryglobal.com/",
    },
    {
        role: "Programador Web",
        company: "Waopress",
        period: "2024 — 2024",
        description: "Colaborar y desarrollar páginas web para clientes utilizando Wordpress con plugins y temas personalizados.",
        tags: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"],
        link: "https://newryglobal.com/",
    },
    {
        role: "Programador Web",
        company: "Trifecta",
        period: "2023 — 2024",
        description: "Desarrollar, mantener y actualizar páginas web de proyectos internos y para clientes. Desarrollar APIs y aplicaciones web de uso interno.",
        tags: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"],
        link: "https://newryglobal.com/",
    },
    {
        role: "Programador Web",
        company: "Elitelca",
        period: "2023 — 2023",
        description: "Colaborar en el desarrollo y mantenimiento de páginas web para clientes utilizando Wordpress.",
        tags: ["Wordpress", "Python", "HTML", "CSS", "JavaScript"],
        link: "https://newryglobal.com/",
    },
    {
        role: "Programador Web",
        company: "Posa Studio Creativo",
        period: "2022 — 2023",
        description: "Construir y dar mantenimiento a páginas web para clientes utilizando Wordpress. Creación de landing pages y mantenimiento de sistema administrativo interno.",
        tags: ["Wordpress", "HTML", "CSS", "PHP"],
        link: "https://newryglobal.com/",
    },
];

export const allProjects: AllProjects[] = [
    {
        year: "2026",
        title: "Portafolio V2",
        madeAt: "2026",
        builtWith: ["Next.js", "Tailwind", "Vercel"],
        link: "https://reyanj.vercel.app/",
        github: "https://github.com/lKinox/portfolio-2026",
    },
    {
        year: "2025",
        title: "Noon",
        madeAt: "2025",
        builtWith: ["Next.js", "Tailwind", "Vercel", "OpenAI"],
        link: "https://nooncode.dev/",
        github: "",
    },
    {
        year: "2025",
        title: "YourSpanishVisa",
        madeAt: "2025",
        builtWith: ["Wordpress", "PHP"],
        link: "https://yourspanishvisa.com/",
        github: "",
    },
    {
        year: "2025",
        title: "API de Gestión de Alertas",
        madeAt: "2025",
        builtWith: ["Python", "Flask", "Docker"],
        link: "",
        github: "https://github.com/lKinox/Prueba-Tecnica",
    },
    {
        year: "2025",
        title: "Web app de gestión de quinielas",
        madeAt: "2025",
        builtWith: ["Next.js", "Tailwind", "Vercel", "Node.js", "Supabase"],
        link: "https://betfine-quiniela.vercel.app/",
        github: "https://github.com/lKinox/betfine-quiniela",
    },
    {
        year: "2025",
        title: "Visualisto",
        madeAt: "2025",
        builtWith: ["Next.js", "Tailwind", "Vercel"],
        link: "https://landing-visualisto.vercel.app/",
        github: "https://github.com/lKinox/Visualisto",
    },
    {
        year: "2025",
        title: "Betfine24",
        madeAt: "2025",
        builtWith: ["Next.js", "Tailwind"],
        link: "https://betfine24.com/",
        github: "",
    },
    {
        year: "2025",
        title: "Ni Un Autónomo Más",
        madeAt: "2025",
        builtWith: ["Wordpress", "Bricks", "HTML", "CSS", "JavaScript"],
        link: "https://niunautonomomas.com/",
        github: "",
    },
    {
        year: "2025",
        title: "API JWT + Firebase",
        madeAt: "2025",
        builtWith: ["Flask", "Firebase", "JWT"],
        link: "",
        github: "https://github.com/lKinox/APIRest-Flask-JWT-Firebase",
    },
    {
        year: "2025",
        title: "Waopress",
        madeAt: "2025",
        builtWith: ["Wordpress", "Bricks", "HTML", "CSS", "JavaScript"],
        link: "https://waopress.com/",
        github: "",
    },
    {
        year: "2025",
        title: "Portafolio V1",
        madeAt: "2025",
        builtWith: ["Next.js", "Tailwind", "Vercel"],
        link: "https://reyanj.netlify.app/",
        github: "https://github.com/lKinox/Portfolio-Reyan",
    },
    {
        year: "2024",
        title: "Ginqo",
        madeAt: "2024",
        builtWith: ["Wordpress", "Bricks", "HTML", "CSS", "JavaScript", "PHP"],
        link: "https://ginqopetfood.com/",
        github: "",
    },
    {
        year: "2024",
        title: "Serpis",
        madeAt: "2024",
        builtWith: ["Wordpress"],
        link: "https://www.serpis.com/",
        github: "",
    },
    {
        year: "2023",
        title: "DantDiver",
        madeAt: "2023",
        builtWith: ["Wordpress", "Elementor"],
        link: "https://dantdiver.com/",
        github: "",
    },
    {
        year: "2023",
        title: "Elitellca",
        madeAt: "2023",
        builtWith: ["Wordpress", "Elementor"],
        link: "https://elitellca.com/",
        github: "",
    },
    {
        year: "2022",
        title: "Posa Studio Creativo",
        madeAt: "2022",
        builtWith: ["Wordpress", "Elementor"],
        link: "https://www.comunicacionvisual.com/",
        github: "",
    },
    {
        year: "2022",
        title: "Coding Steam",
        madeAt: "2022",
        builtWith: ["HTML", "CSS", "JavaScript"],
        link: "https://codingsteam.com/",
        github: "https://github.com/lKinox/Project-CodingSTEAM",
    },
];