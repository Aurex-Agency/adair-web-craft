import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, forwardRef } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimateIn = forwardRef<HTMLDivElement, AnimateInProps>(
  ({ children, delay = 0, className = "" }, _ref) => {
    const shouldReduceMotion = useReducedMotion();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }
);

AnimateIn.displayName = "AnimateIn";

export default AnimateIn;
