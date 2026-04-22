import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import heroPhoto from "@/assets/img/elis-hero.png";
import HoverGlowButton from "@/components/ui/hover-glow-button";

const techStack = ["React", "React Native", "TypeScript", "Swift", "SwiftUI", "Node.js"];

export const AuroraHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-accent/15 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container px-6 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-3"
            >
              <span className="block text-foreground">Elisangela</span>
              <span className="gradient-text">Pethke</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl font-semibold text-primary/70 mb-5 tracking-wide"
            >
              Frontend · Mobile · Fullstack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Building modern interfaces and scalable apps — from pixel-perfect
              web UIs to polished mobile experiences on iOS and Android.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-secondary/20 text-foreground border border-secondary/50"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#project">
                <HoverGlowButton variant="primary" size="lg">
                  View Projects
                </HoverGlowButton>
              </a>
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                <HoverGlowButton variant="ghost" size="lg">
                  <Download className="w-5 h-5" />
                  Download CV
                </HoverGlowButton>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-3"
            >
              <a
                href="https://github.com/elispethke"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/elispethke"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-2xl scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-primary/15 blur-xl scale-105 animate-pulse-slow pointer-events-none" />

              {/* Floating photo */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20">
                  <img
                    src={heroPhoto}
                    alt="Elisangela Pethke"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Decorative outer ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-slow pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-secondary/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuroraHero;
