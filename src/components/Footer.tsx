import {motion} from "framer-motion";
import {Heart} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-border/50">
            <div className="container px-6">
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Elisangela Pethke. Todos os direitos reservados.
                    </p>

                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                        Developed by <Heart className="w-4 h-4 text-primary fill-primary" /> Elis Pethke
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
