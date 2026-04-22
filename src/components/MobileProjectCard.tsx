import {motion} from "framer-motion";
import {Github} from "lucide-react";
import GlowEffect from "./ui/glow-effect";
import HoverGlowButton from "./ui/hover-glow-button";

interface MobileProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    index: number;
}

export const MobileProjectCard = ({
    title,
    description,
    image,
    technologies,
    githubUrl,
    index,
}: MobileProjectCardProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: index * 0.15}}
            className="flex flex-col items-center"
        >
            <GlowEffect glowColor="accent" intensity="medium">
                <div className="relative">
                    {/* Phone Frame */}
                    <div className="relative w-56 sm:w-64 mx-auto">
                        {/* Phone body */}
                        <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2.5rem] p-2 shadow-2xl">
                            {/* Notch */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                            {/* Screen */}
                            <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                                <img src={image} alt={title} className="w-full h-full object-cover" />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Home indicator */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-600 rounded-full" />
                        </div>

                        {/* Reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />
                    </div>
                </div>
            </GlowEffect>

            {/* Content below phone */}
            <div className="mt-8 text-center max-w-xs">
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/20 text-foreground border border-border/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* GitHub button */}
                {githubUrl && (
                    <HoverGlowButton variant="primary" size="sm">
                        <Github className="w-4 h-4" />
                        <span>Ver Código</span>
                    </HoverGlowButton>
                )}
            </div>
        </motion.div>
    );
};

export default MobileProjectCard;
