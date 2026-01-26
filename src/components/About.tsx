import {motion} from "framer-motion";
import {Download, Play} from "lucide-react";
import profile from "@/assets/img/profile.png";
import HoverGlowButton from "./ui/hover-glow-button";
import GlowEffect from "./ui/glow-effect";

export const About = () => {
    return (
        <section id="about" className="py-24 lg:py-32 relative">
            <div className="container px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image and Video */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="space-y-8"
                    >
                        {/* Profile photo */}
                        <GlowEffect glowColor="primary" intensity="subtle">
                            <div className="glass-card p-2 rounded-2xl overflow-hidden">
                                <img
                                    src={profile}
                                    alt="Elisangela Pethke"
                                    className="w-full h-64 sm:h-80 object-cover rounded-xl"
                                />
                            </div>
                        </GlowEffect>

                        {/* Video thumbnail */}
                        <GlowEffect glowColor="accent" intensity="subtle">
                            <div className="glass-card p-2 rounded-2xl overflow-hidden">
                                <div className="relative group">
                                    <iframe
                                        src="https://www.youtube.com/embed/Ixp2a8EdvSM"
                                        title="Apresentação"
                                        className="w-full h-64 rounded-xl"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />

                                    <div className="absolute inset-0 bg-black/40 rounded-xl transition-all group-hover:bg-black/30 pointer-events-none" />

                                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium pointer-events-none">
                                        Watch my presentation
                                    </div>
                                </div>
                            </div>
                        </GlowEffect>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                    >
                        <motion.span
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block"
                        >
                            About me
                        </motion.span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Crafting <span className="gradient-text">memorable</span> digital experiences
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                            <p>
                                Hi! I’m Elisangela, a Frontend and Mobile Developer passionate about creating interfaces
                                that truly make a difference in people’s lives.
                            </p>
                            <p>
                                With hands-on experience in React, React Native, and Swift, I enjoy building products
                                that combine great user experience with clean, high-quality code and strong performance.
                            </p>
                            <p>
                                I believe great software comes from combining solid technical skills with real care for
                                the end user. Every line of code I write is intentional.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            {[
                                {value: "3+", label: "Years of experiencecia"},
                                {value: "40+", label: "Projects delivered"},
                                {value: "30+", label: "Satisfied customers"},
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.1}}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a href="/resume.pdf" 
                        download 
                        target="_blank" 
                        rel="noopener noreferrer">
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
