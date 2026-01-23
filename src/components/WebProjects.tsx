import {motion} from "framer-motion";
import ProjectCard from "./ProjectCard";

const webProjects = [
    {
        title: "Psicoterapia em Movimento",
        description:
            "Full page with image carousel, custom cards with modal, form, Portuguese–English translation, and page navigation. ",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["React", "Typescript", "Tailwind", "Node.js"],
        githubUrl: "https://github.com/elispethke/Arco-psicoterapia-em-Movimento",
        liveUrl: "#",
    },
    {
        title: "Inglês Com Carol Maria",
        description:
            "Plataforma SaaS para gestão de projetos com colaboração em tempo real, kanban boards e integrações.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "SaaS Financial System",
        description: "Finance management SaaS platform featuring a real-time dashboard, developed with React, Vite, Node.js, and Tailwind CSS, with a strong focus on performance and user experience.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
       technologies: ["React", "Storybook", "CSS Variables", "Figma"],
       githubUrl: "#",
       liveUrl: "#",
    },

    {
        title: "Premium Sneaker ",
        description:
            "Design system completo com componentes reutilizáveis, documentação interativa e tokens de design.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        technologies: ["React", "Storybook", "CSS Variables", "Figma"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Piano Course Website ",
        description:
            "Design system completo com componentes reutilizáveis, documentação interativa e tokens de design.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        technologies: ["React", "Storybook", "CSS Variables", "Figma"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Premium Rental Platform ",
        description:
            "Design system completo com componentes reutilizáveis, documentação interativa e tokens de design.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        technologies: ["React", "Storybook", "CSS Variables", "Figma"],
        githubUrl: "#",
        liveUrl: "#",
    },
];

export const WebProjects = () => {
    

    return (
        <section id="project" className="py-24 lg:py-32 relative">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="container px-6">
                {/* Section header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
                        Project <span className="gradient-text">Web</span>
                    </h2>
                    <p className=" text-muted-foreground text-lg max-w-2x1 mx-auto ">
                        A selection of my best web projects, showcasing expertise in React, TypeScript, and modern
                        frontend architecture.
                    </p>
                </motion.div>
                {/* Project Grip */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webProjects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default WebProjects;
