import {motion} from "framer-motion";
import {Github} from "lucide-react";
import GlowEffect from "./ui/glow-effect";
import HoverGlowButton from "./ui/hover-glow-button";
import ProjectCard from "./ProjectCard";
import MobileProjectCard from "./MobileProjectCard";
import fotoMo1 from "@/assets/img/fotoMo1.png";
import fotoMo2 from "@/assets/img/fotoMo2.png";
import fotoMo3 from "@/assets/img/fotoMo3.png";

const mobileProjects = [
    {
        title: "Chef Delivery",
        description:
            "Delivery app built with SwiftUI, providing a smooth and intuitive user experience while exploring core SwiftUI concepts such as layouts, navigation, state management, animations, and API integration.",
        image: fotoMo1,
        technologies: ["React Native", "TypeScript", "Firebase"],
        githubUrl: "https://github.com/elispethke/Chef-Delivery",
    },

    {
        title: "Tasky App",
        description:
            "Task management app that allows users to create tasks with a title and description, remove existing tasks, mark tasks as completed or pending, and persist data locally using UserDefaults so tasks remain saved even after the app is closed.",
        image: fotoMo2,
        technologies: ["Swift", "SwiftUI", "Core Data"],
        githubUrl: "https://github.com/elispethke/TaskApp",
    },

    {
        title: "Vollmed",
        description:
            "Medical appointment scheduling app built with SwiftUI and integrated with a RESTful CRUD API, providing an intuitive and efficient experience for booking medical consultations.",
        image:fotoMo3,
        technologies: ["React Native", "Socket.io", "MongoDB"],
        githubUrl: "https://github.com/elispethke/Vollmed",
    },
    {
        title: "Delivery",
        description:
            "Delivery app built with SwiftUI, providing a smooth and intuitive user experience while exploring core SwiftUI concepts such as layouts, navigation, state management, animations, and API integration.",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=800&fit=crop",
        technologies: ["React Native", "TypeScript", "Firebase"],
        githubUrl: "https://github.com/elispethke/Chef-Delivery",
    },

    {
        title: "Finance App",
        description:
            "Task management app that allows users to create tasks with a title and description, remove existing tasks, mark tasks as completed or pending, and persist data locally using UserDefaults so tasks remain saved even after the app is closed.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
        technologies: ["Swift", "SwiftUI", "Core Data"],
        githubUrl: "https://github.com/elispethke/TaskApp",
    },

    {
        title: "Pomodoro App",
        description:
            "Medical appointment scheduling app built with SwiftUI and integrated with a RESTful CRUD API, providing an intuitive and efficient experience for booking medical consultations.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=800&fit=crop",
        technologies: ["React Native", "Socket.io", "MongoDB"],
        githubUrl: "https://github.com/elispethke/Vollmed",
    },
];

export const MobileProject = () => {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Backgroun */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
            <div className="container px-6">
                {/* section header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Project <span className="gradient-text">Mobile</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Native and hybrid applications developed with a strong focus on performance, UX, and smooth user
                        experiences.
                    </p>
                </motion.div>
                {/* Mobile Project */}
                <div className="grid sm:grid-cols-2 lg_grid-cols-3 gap-12 lg:gap-16">
                    {mobileProjects.map((project, index) => (
                        <MobileProjectCard 
                        key={project.title}
                        {...project}
                        index={index}
                        />
                    ))}
                    </div>
            </div>
        </section>
    );
};

export default MobileProject;
