import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "accent" | "mixed";
  intensity?: "subtle" | "medium" | "strong";
}

export const GlowEffect = ({
  children,
  className,
  glowColor = "primary",
  intensity = "subtle",
}: GlowEffectProps) => {
  const glowStyles = {
    primary: "from-primary/20 via-primary/10 to-transparent",
    accent: "from-accent/20 via-accent/10 to-transparent",
    mixed: "from-primary/20 via-accent/15 to-transparent",
  };

  const intensityStyles = {
    subtle: "blur-2xl opacity-40",
    medium: "blur-3xl opacity-60",
    strong: "blur-3xl opacity-80",
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Glow background */}
      <motion.div
        className={cn(
          "absolute -inset-1 bg-gradient-to-r rounded-2xl transition-all duration-500",
          glowStyles[glowColor],
          intensityStyles[intensity],
          "group-hover:opacity-70 group-hover:blur-3xl"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Animated glow pulse */}
      <motion.div
        className={cn(
          "absolute -inset-2 bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-30",
          glowStyles[glowColor]
        )}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowEffect;
