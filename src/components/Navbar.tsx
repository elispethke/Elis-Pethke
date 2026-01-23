import {setMaxListeners} from "events";
import {motion} from "framer-motion";
import {link} from "fs";
import {Menu, X} from "lucide-react";
import {useState} from "react";

const navLinks = [
    {name: "Home", href: "#"},
    {name: "Project", href: "#project"},
    {name: "About", href: "#about"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="mx-4 mt-4">
                <div className="glass-card px-6 py-4 rounded-2xl max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold gradient-text">
                        EP
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-secoundary/50 rounded-lg transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                {/* Mobile nav */}
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        className="glass-card mt-2 p-4 rounded-2xl md:hidden max-w-6xl mx-auto"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 text-muted-foregroundd hover:text-foreground hover:bg-secoundary/50 rounded-lg transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
