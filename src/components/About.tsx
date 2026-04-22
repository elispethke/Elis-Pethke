import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profile from "@/assets/img/profile.png";
import HoverGlowButton from "./ui/hover-glow-button";
import GlowEffect from "./ui/glow-effect";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Mobile", items: ["React Native", "Swift", "SwiftUI", "Expo"] },
  { category: "Fullstack", items: ["Node.js", "Firebase", "REST APIs", "MongoDB"] },
];

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "20+", label: "Projects delivered" },
  { value: "10+", label: "Happy clients" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo only */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <GlowEffect glowColor="primary" intensity="subtle" className="w-full max-w-sm mx-auto">
              <div className="glass-card p-3 rounded-3xl overflow-hidden">
                <img
                  src={profile}
                  alt="Elisangela Pethke"
                  className="w-full aspect-square object-cover object-top rounded-2xl"
                />
              </div>
            </GlowEffect>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block"
              >
                About Me
              </motion.span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                Code that <span className="gradient-text">connects</span> people
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  I'm Elisangela, a Frontend, Mobile & Fullstack Developer who builds
                  interfaces that are fast, beautiful, and truly useful. I care deeply
                  about user experience and clean architecture.
                </p>
                <p>
                  From landing pages to full SaaS platforms, I bring strong technical
                  skills and product thinking to every project — whether it's a web app
                  in React or a native iOS experience in SwiftUI.
                </p>
              </div>
            </div>

            {/* Skills grid */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((group, i) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4 rounded-xl"
                  >
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      {group.category}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Moniv highlight */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5 rounded-xl border-l-4 border-primary"
            >
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                Featured Project
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">
                Moniv — Finance SaaS Platform
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Built end-to-end: React dashboard, Node.js API, real-time data
                visualization and scalable component architecture — demonstrating
                my fullstack capabilities from UX to infrastructure.
              </p>
            </motion.div>

            {/* CTA */}
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <HoverGlowButton variant="primary" size="lg">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </HoverGlowButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
