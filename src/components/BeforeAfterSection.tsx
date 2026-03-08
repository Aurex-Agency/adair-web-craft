import { useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import beforeImg from "@/assets/nettech-before.png";
import afterImg from "@/assets/nettech-after.png";

const BeforeAfterSection = () => {
  const [active, setActive] = useState<"before" | "after">("after");

  return (
    <section className="py-12 md:py-24 px-0 md:px-6">
      <div className="max-w-[1000px] mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue text-center mb-4 md:mb-6 px-4">
            — REAL RESULTS —
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2
            className="text-center leading-[1.1] tracking-[-0.02em] mb-8 md:mb-12 px-4"
            style={{ fontSize: "clamp(26px, 4vw, 48px)" }}
          >
            See the <span className="italic text-accent-blue">difference</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex justify-center gap-3 mb-6 md:mb-8 px-4">
            <button
              onClick={() => setActive("before")}
              className={`font-heading font-semibold text-sm tracking-wide px-5 md:px-6 py-2.5 rounded-full border transition-all duration-300 ${
                active === "before"
                  ? "bg-muted text-foreground border-border"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActive("after")}
              className={`font-heading font-semibold text-sm tracking-wide px-5 md:px-6 py-2.5 rounded-full border transition-all duration-300 ${
                active === "after"
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              After
            </button>
          </div>

          <div className="px-2 md:px-0">
            <motion.div
              className="relative rounded-xl md:rounded-2xl overflow-hidden"
              animate={{
                boxShadow:
                  active === "after"
                    ? "0 0 40px 8px hsla(217, 91%, 60%, 0.35), 0 0 80px 16px hsla(217, 91%, 60%, 0.15)"
                    : "0 4px 20px 0px hsla(0, 0%, 0%, 0.3)",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative">
                <img
                  src={beforeImg}
                  alt="Website before redesign"
                  className="w-full h-auto block"
                />
                <motion.img
                  src={afterImg}
                  alt="Website after redesign"
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: active === "after" ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
