import { motion } from "framer-motion";
import MobileProjectCard from "./MobileProjectCard";
import fotoMo1 from "@/assets/img/fotoMo1.png";
import fotoMo2 from "@/assets/img/fotoMo2.png";
import fotoMo3 from "@/assets/img/fotoMo3.png";

const mobileProjects = [
  {
    title: "Burger Rio",
    description:
      "Delivery app built with SwiftUI featuring smooth navigation, state management, animations, and API integration — focused on a clean and intuitive user experience.",
    image: fotoMo1,
    technologies: ["SwiftUI", "Swift", "REST API"],
    githubUrl: "https://github.com/elispethke/Chef-Delivery",
  },
  {
    title: "Chef Delivery",
    description:
      "Food delivery app developed with SwiftUI, exploring core concepts such as layouts, navigation, state management, and animations with a polished UI.",
    image: fotoMo2,
    technologies: ["Swift", "SwiftUI", "Core Data"],
    githubUrl: "https://github.com/elispethke/TaskApp",
  },
  {
    title: "Minas Brasil",
    description:
      "App for managing a Brazilian products store in Berlin. Built with React Native, featuring product listing, cart management, and local data persistence.",
    image: fotoMo3,
    technologies: ["React Native", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/elispethke/Vollmed",
  },
];

export const MobileProject = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Projects <span className="gradient-text">Mobile</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Native and hybrid applications developed with a strong focus on performance,
            UX, and smooth user experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {mobileProjects.map((project, index) => (
            <MobileProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileProject;
