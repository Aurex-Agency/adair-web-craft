import { motion, useReducedMotion } from "framer-motion";
import AnimateIn from "./AnimateIn";


const HeroHeadline = () => {
  const shouldReduceMotion = useReducedMotion();
  const words = ["Your", "customers", "are", "out", "there.", "Can", "they"];
  const findWord = "find";
  const lastWord = "you?";

  const allWords = [...words, findWord, lastWord];

  return (
    <h1
      className="font-heading font-bold text-text-primary leading-[1.05] tracking-[-0.03em]"
      style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
    >
      {allWords.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${word === findWord ? "text-accent-blue italic" : ""}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.3 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

const ScrollIndicator = () => (
  <div className="flex flex-col items-center gap-2 mt-16">
    <div className="relative w-[2px] h-10 bg-border-custom rounded-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-text-primary rounded-full"
        animate={{ y: [0, 28], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <span className="font-body text-[10px] tracking-[0.2em] text-text-dim uppercase">scroll</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 max-w-[900px] text-center flex flex-col items-center">
        <AnimateIn delay={0}>
          <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue mb-8 block">
            — WEB DESIGN · NORTH MISSISSIPPI —
          </span>
        </AnimateIn>

        <HeroHeadline />

        <AnimateIn delay={0.4}>
          <p className="font-body text-lg text-text-muted max-w-[560px] leading-[1.8] mt-8">
            I build fast, custom websites for local businesses in North Mississippi — sites that bring in real customers. No templates. No fluff. Just results.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <div className="w-full max-w-[1000px] py-4">
            <p className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-text-primary text-center mb-3">
              ▶ Watch — 3 Min
            </p>
            <div
              className="relative w-full aspect-video rounded-xl overflow-hidden"
              style={{ boxShadow: "0 0 40px rgba(99, 179, 237, 0.25)" }}
            >
              <iframe
                src="https://www.youtube.com/embed/WpYJaePa7ts"
                title="VSL Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>
            <p className="font-body text-sm italic text-text-primary text-center mt-3">
              See exactly how I'll get your business found on Google in 48 hours.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.65}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <a
              href="#contact"
              className="btn-shimmer bg-accent-green text-bg-primary font-body font-semibold text-[15px] px-7 py-3.5 rounded-[10px] transition-all"
            >
              Claim Your Spot — Only 5 Left →
            </a>
            <a
              href="#services"
              className="btn-glow border border-border-custom text-text-primary font-body font-medium text-[15px] px-7 py-3.5 rounded-[10px] transition-colors bg-transparent"
            >
              See What's Included ↓
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.8}>
          <div className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-1.5">
              {[
                { bg: "#1D4ED8", letter: "K" },
                { bg: "#15803D", letter: "M" },
                { bg: "#7C3AED", letter: "J" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full flex items-center justify-center font-body text-[10px] font-semibold text-white border-2 border-bg-primary"
                  style={{ background: a.bg }}
                >
                  {a.letter}
                </div>
              ))}
            </div>
            <span className="font-body text-[13px] text-text-muted">
              30+ sites built · 48hr avg delivery · Kalob Adair, Digital Marketing Lead
            </span>
          </div>
        </AnimateIn>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
