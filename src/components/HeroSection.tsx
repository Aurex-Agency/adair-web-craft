import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimateIn from "./AnimateIn";

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { color: "rgba(59, 130, 246, 0.07)", speed: 0.0003, offset: 0 },
      { color: "rgba(163, 230, 53, 0.04)", speed: 0.0004, offset: 2 },
      { color: "rgba(59, 130, 246, 0.05)", speed: 0.00025, offset: 4 },
    ];

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach((b) => {
        const x = canvas.width * 0.5 + Math.sin(time * b.speed + b.offset) * canvas.width * 0.25;
        const y = canvas.height * 0.5 + Math.cos(time * b.speed * 0.7 + b.offset) * canvas.height * 0.2;
        const r = Math.min(canvas.width, canvas.height) * 0.4;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroHeadline = () => {
  const shouldReduceMotion = useReducedMotion();
  const words = ["Your", "customers", "are", "out", "there.", "Can", "they"];
  const findWord = "find";
  const lastWord = "you?";

  const allWords = [...words, findWord, lastWord];

  return (
    <h1
      className="font-syne font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em]"
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
    <div className="relative w-[2px] h-10 bg-[#333333] rounded-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-text-primary rounded-full"
        animate={{ y: [0, 28], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <span className="font-inter text-[10px] tracking-[0.2em] text-text-dim uppercase">scroll</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-bg-primary px-6 overflow-hidden">
      <HeroCanvas />
      <div className="relative z-10 max-w-[900px] text-center flex flex-col items-center">
        <AnimateIn delay={0}>
          <span className="font-inter text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-blue mb-8 block">
            — WEB DESIGN · NORTH MISSISSIPPI —
          </span>
        </AnimateIn>

        <HeroHeadline />

        <AnimateIn delay={0.4}>
          <p className="font-inter text-lg text-text-muted max-w-[560px] leading-[1.8] mt-8">
            I build fast, custom websites for local businesses in North Mississippi — sites that bring in real customers. No templates. No fluff. Just results.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.55}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <a
              href="#contact"
              className="bg-accent-green text-bg-primary font-inter font-semibold text-[15px] px-7 py-3.5 rounded-[10px] hover:brightness-90 transition-all"
            >
              Claim Your Spot — Only 5 Left →
            </a>
            <a
              href="#services"
              className="border border-[#333333] text-text-primary font-inter font-medium text-[15px] px-7 py-3.5 rounded-[10px] hover:border-[#555555] transition-colors bg-transparent"
            >
              See What's Included ↓
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.7}>
          <div className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-1.5">
              {[
                { bg: "#1D4ED8", letter: "K" },
                { bg: "#15803D", letter: "M" },
                { bg: "#7C3AED", letter: "J" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full flex items-center justify-center font-inter text-[10px] font-semibold text-white border-2 border-bg-primary"
                  style={{ background: a.bg }}
                >
                  {a.letter}
                </div>
              ))}
            </div>
            <span className="font-inter text-[13px] text-text-muted">
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
