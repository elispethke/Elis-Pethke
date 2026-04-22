import {motion} from "framer-motion";
import {Mail, Linkedin, Instagram, Github, Send} from "lucide-react";
import HoverGlowButton from "./ui/hover-glow-button";
import GlowEffect from "./ui/glow-effect";
import {Input} from "./ui/intput";
import {Textarea} from "./ui/textarea";
import {useForm} from "react-hook-form";
import {useState} from "react";


const socialLink = [
    {name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/feed/", color: "hover:text-[#0077b5]"},
    {name: "GitHub", icon: Github, href: "https://github.com/elispethke", color: "hover:text-foreground"},
    {name: "Instagram", icon: Instagram, href: "https://www.instagram.com", color: "hover:text-[#e4405f]"},
];


type ContactFormData = {
    name: string;
    email: string;
    message: string;


};
export const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<ContactFormData>();
    const [successMessage, setSuccessMessage] = useState(false);
    const onSubmit = async (data: ContactFormData) => {
        const responde = await fetch("https://formspree.io/f/mqepdgdd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });
        if (responde.ok) {
            reset();
            setSuccessMessage(true);
        }
    };
    return (
        <section id="contact" className="py-24 lg:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="container px-6">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                        Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Let’s <span className="gradient-text">work</span> together?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        I’m always open to new projects and opportunities. Get in touch, and let’s create something
                        truly amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
                    {/* Left */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Social Media</h3>
                            <p className="text-muted-foreground mb-8">
                                Find me on social platforms or send me a direct message.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {socialLink.map((social) => (
                                <GlowEffect key={social.name} glowColor="primary" intensity="subtle">
                                    <motion.a
                                        href={social.href}
                                        target="_blank"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        className={`glass-card p-4 rounded-xl flex items-center gap-3 transition-colors ${social.color}`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                        <span className="font-medium">{social.name}</span>
                                    </motion.a>
                                </GlowEffect>
                            ))}
                        </div>

                        <GlowEffect glowColor="accent" intensity="subtle">
                            <a
                                href="mailto:contato@elisangela.dev"
                                className="glass-card p-6 rounded-xl flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium group-hover:text-primary transition-colors">
                                        elispethke@gmail.com
                                    </p>
                                </div>
                            </a>
                        </GlowEffect>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <GlowEffect glowColor="mixed" intensity="subtle">
                            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-2xl space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nome</label>
                                    <Input
                                        placeholder="Seu nome"
                                        {...register("name", {required: "Informe seu nome"})}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="seu@email.com"
                                        {...register("email", {
                                            required: "Informe seu email",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Email inválido",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <Textarea
                                        rows={5}
                                        placeholder="Conte-me sobre seu projeto..."
                                        {...register("message", {required: "Digite sua mensagem"})}
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <p
                                    className={`text-sm font-medium text-center min-h-[20px] transition-opacity ${
                                        successMessage ? "text-green-500 opacity-100" : "opacity-0"
                                    }`}
                                >
                                    Message sent successfully
                                </p>

                                <HoverGlowButton
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        "Enviando..."
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </HoverGlowButton>
                            </form>
                        </GlowEffect>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default Contact;