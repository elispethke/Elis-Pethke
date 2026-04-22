import {motion} from "framer-motion";
import {Github, ExternalLink} from "lucide-react";
import GlowEffect from "./ui/glow-effect";
import HoverGlowButton from "./ui/hover-glow-button";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    index: number;
}

export const ProjectCard = ({title, description, image, technologies, githubUrl, liveUrl, index}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: index * 0.1}}
        >
            <GlowEffect glowColor="mixed" intensity="subtle">
                <div className="glass-card overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/20 text-foreground border border-border/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            {githubUrl && (
                                <HoverGlowButton
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => window.open(githubUrl, "_blank")}
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </HoverGlowButton>
                            )}
                            {liveUrl && (
                                <HoverGlowButton
                                    variant="primary"
                                    size="sm"
                                    onClick={() => window.open(liveUrl, "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Live Demo</span>
                                </HoverGlowButton>
                            )}
                        </div>
                    </div>
                </div>
            </GlowEffect>
        </motion.div>
    );
};

export default ProjectCard;
