import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 h-[68px] flex items-center justify-between px-6 transition-all duration-[400ms] ease-in-out"
      style={{
        background: scrolled ? "transparent" : "hsla(228, 25%, 6%, 0.85)",
        backdropFilter: scrolled ? "none" : "blur(20px)",
        WebkitBackdropFilter: scrolled ? "none" : "blur(20px)",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <span className="font-heading font-bold text-lg text-text-primary">Kalob Adair</span>
        <a
          href="#contact"
          className="btn-shimmer bg-accent-green text-bg-primary font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
        >
          <span className="hidden sm:inline">Get Your Site →</span>
          <span className="sm:hidden">Get Started →</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
