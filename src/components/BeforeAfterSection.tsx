import { useState } from "react";
import AnimateIn from "./AnimateIn";
import beforeImg from "@/assets/nettech-before.png";
import afterImg from "@/assets/nettech-after.png";

const BeforeAfterSection = () => {
  const [active, setActive] = useState<"before" | "after">("after");

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <AnimateIn>
          <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue text-center mb-6">
            — REAL RESULTS —
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2
            className="text-center leading-[1.1] tracking-[-0.02em] mb-12"
            style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
          >
            See the <span className="italic text-accent-blue">difference</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActive("before")}
              className={`font-heading font-semibold text-sm tracking-wide px-6 py-2.5 rounded-full border transition-all duration-300 ${
                active === "before"
                  ? "bg-muted text-foreground border-border"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActive("after")}
              className={`font-heading font-semibold text-sm tracking-wide px-6 py-2.5 rounded-full border transition-all duration-300 ${
                active === "after"
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              After
            </button>
          </div>

          <div className="relative">
            <div
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                active === "after"
                  ? "shadow-[0_0_40px_8px_hsl(var(--accent)/0.35),0_0_80px_16px_hsl(var(--accent)/0.15)]"
                  : "shadow-lg"
              }`}
            >
              <img
                src={active === "before" ? beforeImg : afterImg}
                alt={active === "before" ? "Website before redesign" : "Website after redesign"}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
