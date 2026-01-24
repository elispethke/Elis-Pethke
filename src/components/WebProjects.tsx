import {motion} from "framer-motion";
import ProjectCard from "./ProjectCard";
import fotoWeb1 from "@/assets/img/fotoWeb1.png";
import fotoWeb2 from "@/assets/img/fotoWeb2.png";
import fotoWeb3 from "@/assets/img/fotoWeb3.png";
import fotoWeb4 from "@/assets/img/fotoWeb4.png";
import fotoWeb5 from "@/assets/img/fotoWeb5.png";
import fotoWeb6 from "@/assets/img/fotoWeb6.png";

const webProjects = [
    {
        title: "Arco Psicoterapia em Movimento",
        description:
            "Professional website for two psychotherapists built with React and Vite, featuring an image carousel hero section, interactive event cards that open detailed modals, animated header effects, and a clean, well-organized codebase using reusable components, props, and custom hooks.",
        image: fotoWeb2,
        technologies: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "English with Carol Maria",
        description:
            "Modern English course landing page built with React and Vite, featuring a polished UX/UI design, reusable components, clean architecture, and payment integration for course access, implemented using props and custom hooks.",
        image: fotoWeb1,
        technologies: ["React", "Vite", "Tailwind CSS", "Payments API"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "StreamsPlat",
        description:
            "Finance management SaaS platform featuring a real-time dashboard, developed with React, Vite, Node.js, and Tailwind CSS, with a strong focus on performance and user experience.",
        image: fotoWeb3,
        technologies: ["React", "Storybook", "CSS Variables", "Figma"],
        githubUrl: "#",
        liveUrl: "#",
    },

    {
        title: "Premium Sneaker",
        description:
            "Premium sneaker e-commerce built with React and Vite, featuring a dynamic shopping experience, reusable components, a clean and modern architecture, and a visually rich interface designed with strong UX/UI principles.",
        image: fotoWeb4,
        technologies: ["React", "Vite", "Tailwind CSS"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Car Rental Premium",
        description:
            "Premium car rental platform built with React and Tailwind, featuring reusable components, a clean and modern architecture, luxury vehicle listings, and API integration for real-time availability and pricing.",
        image: fotoWeb5,
        technologies: ["React", "Tailwind CSS", "API"],
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "FinMen Dashboard",
        description:
            "Financial dashboard built with React and Vite, focused on clear and actionable data visualization. Features sophisticated interactive charts, well-structured financial metrics, and a scalable component-based architecture.",
        image: fotoWeb6,
        technologies: ["React", "Vite", "TypeScript", "Charts", "CSS"],
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
