import { useEffect, useRef } from "react";

const ScrollGradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let scrollProgress = 0;
    let smoothScroll = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = total > 0 ? window.scrollY / total : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Bold color palette — shifts dramatically as you scroll
    const colorStops = [
      { at: 0,    r: 8,   g: 12,  b: 42  },  // Deep midnight blue
      { at: 0.12, r: 30,  g: 8,   b: 60  },  // Electric purple
      { at: 0.25, r: 10,  g: 30,  b: 70  },  // Cobalt blue
      { at: 0.38, r: 50,  g: 5,   b: 45  },  // Hot magenta-purple
      { at: 0.5,  r: 5,   g: 40,  b: 65  },  // Deep teal-blue
      { at: 0.62, r: 40,  g: 10,  b: 55  },  // Vivid purple
      { at: 0.75, r: 8,   g: 25,  b: 58  },  // Ocean blue
      { at: 0.88, r: 25,  g: 5,   b: 50  },  // Deep violet
      { at: 1,    r: 5,   g: 8,   b: 25  },  // Near-black navy
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const getColor = (progress: number) => {
      let i = 0;
      for (; i < colorStops.length - 1; i++) {
        if (progress <= colorStops[i + 1].at) break;
      }
      const a = colorStops[i];
      const b = colorStops[Math.min(i + 1, colorStops.length - 1)];
      const range = b.at - a.at;
      const t = range === 0 ? 0 : (progress - a.at) / range;
      return {
        r: Math.round(lerp(a.r, b.r, t)),
        g: Math.round(lerp(a.g, b.g, t)),
        b: Math.round(lerp(a.b, b.b, t)),
      };
    };

    const draw = () => {
      time += 0.008;
      smoothScroll += (scrollProgress - smoothScroll) * 0.08;

      const w = canvas.width;
      const h = canvas.height;

      // Base gradient that shifts with scroll
      const base = getColor(smoothScroll);
      const baseShift = getColor(Math.min(1, smoothScroll + 0.15));

      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, `rgb(${base.r}, ${base.g}, ${base.b})`);
      bgGrad.addColorStop(1, `rgb(${baseShift.r}, ${baseShift.g}, ${baseShift.b})`);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Large dramatic orbs that move with scroll + time
      const orbs = [
        {
          x: 0.2 + Math.sin(time * 0.4 + smoothScroll * 8) * 0.15,
          y: 0.3 + Math.cos(time * 0.3) * 0.2,
          size: 0.55,
          r: 59, g: 130, b: 246,
          alpha: 0.12 + smoothScroll * 0.06,
        },
        {
          x: 0.8 + Math.cos(time * 0.35 + smoothScroll * 6) * 0.12,
          y: 0.2 + Math.sin(time * 0.25) * 0.25,
          size: 0.5,
          r: 139, g: 92, b: 246,
          alpha: 0.1 + Math.sin(smoothScroll * Math.PI) * 0.08,
        },
        {
          x: 0.5 + Math.sin(time * 0.5 + smoothScroll * 10) * 0.2,
          y: 0.7 + Math.cos(time * 0.4 + smoothScroll * 4) * 0.15,
          size: 0.6,
          r: 163, g: 230, b: 53,
          alpha: 0.04 + smoothScroll * 0.04,
        },
        {
          x: 0.35 + Math.cos(time * 0.3 + smoothScroll * 12) * 0.18,
          y: 0.5 + Math.sin(time * 0.45) * 0.2,
          size: 0.45,
          r: 236, g: 72, b: 153,
          alpha: 0.06 + Math.sin(smoothScroll * Math.PI * 2) * 0.05,
        },
        {
          x: 0.7 + Math.sin(time * 0.6 + smoothScroll * 7) * 0.1,
          y: 0.8 + Math.cos(time * 0.35 + smoothScroll * 5) * 0.12,
          size: 0.4,
          r: 34, g: 211, b: 238,
          alpha: 0.05 + smoothScroll * 0.05,
        },
      ];

      orbs.forEach((orb) => {
        const cx = w * orb.x;
        const cy = h * orb.y;
        const radius = Math.max(w, h) * orb.size;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${orb.r}, ${orb.g}, ${orb.b}, ${orb.alpha})`);
        grad.addColorStop(0.4, `rgba(${orb.r}, ${orb.g}, ${orb.b}, ${orb.alpha * 0.4})`);
        grad.addColorStop(1, "transparent");

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ScrollGradientBackground;
