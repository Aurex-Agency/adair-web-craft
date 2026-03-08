import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateIn from "./AnimateIn";

const ScarcitySection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-[72px] md:py-32 px-6" style={{ background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)" }}>
      <div className="max-w-[1200px] mx-auto text-center">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 mb-6">
            — THIS WEEK ONLY —
          </p>
        </AnimateIn>
        <AnimateIn>
          <h2
            className="text-white leading-[1.1] tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            First 5 business owners get
            <br className="hidden sm:block" /> 3 months of FREE hosting.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="font-body text-lg text-white/75 mb-10">
            That's up to $297 in savings. Spots are going fast.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div ref={ref} className="max-w-[480px] mx-auto mb-4">
            <div className="w-full h-2 rounded-full bg-white/15 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent-green"
                initial={{ width: "0%" }}
                animate={inView ? { width: "20%" } : { width: "0%" }}
                transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="font-body text-[13px] text-white/65 mt-3">
              1 of 5 spots claimed · 4 remaining
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <a
            href="#contact"
            className="btn-shimmer inline-block bg-white text-[#1D4ED8] font-body font-semibold text-base px-9 py-4 rounded-[10px] transition-colors mt-6"
          >
            Claim My Free Hosting Now →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ScarcitySection;
