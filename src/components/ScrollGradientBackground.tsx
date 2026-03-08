import { useEffect, useRef } from "react";

const ScrollGradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let scrollY = 0;
    let targetScrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.body);
    window.addEventListener("resize", resize);

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Color stops that shift as you scroll
    const gradientStops = [
      { pos: 0, colors: [[12, 15, 30], [8, 22, 48]] },       // Deep navy
      { pos: 0.15, colors: [[10, 18, 40], [18, 10, 35]] },    // Navy to deep purple
      { pos: 0.3, colors: [[15, 8, 32], [8, 20, 45]] },       // Purple back to navy
      { pos: 0.45, colors: [[8, 25, 50], [12, 12, 28]] },     // Deep blue
      { pos: 0.6, colors: [[20, 12, 35], [8, 18, 42]] },      // Purple-blue
      { pos: 0.75, colors: [[10, 22, 48], [15, 8, 30]] },     // Blue to purple
      { pos: 0.9, colors: [[8, 12, 28], [12, 18, 38]] },      // Dark navy
      { pos: 1, colors: [[6, 8, 18], [8, 10, 22]] },          // Near black
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const getColorsAtProgress = (progress: number): [number[], number[]] => {
      let lower = gradientStops[0];
      let upper = gradientStops[gradientStops.length - 1];

      for (let i = 0; i < gradientStops.length - 1; i++) {
        if (progress >= gradientStops[i].pos && progress <= gradientStops[i + 1].pos) {
          lower = gradientStops[i];
          upper = gradientStops[i + 1];
          break;
        }
      }

      const range = upper.pos - lower.pos;
      const t = range === 0 ? 0 : (progress - lower.pos) / range;

      const c1 = lower.colors[0].map((v, i) => Math.round(lerp(v, upper.colors[0][i], t)));
      const c2 = lower.colors[1].map((v, i) => Math.round(lerp(v, upper.colors[1][i], t)));

      return [c1, c2];
    };

    let time = 0;

    const draw = () => {
      time += 0.003;
      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.1;

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = totalHeight > 0 ? scrollY / totalHeight : 0;
      const viewportTop = scrollY;
      const viewportBottom = scrollY + window.innerHeight;

      // Only draw the visible portion + buffer
      const drawTop = Math.max(0, viewportTop - 200);
      const drawBottom = Math.min(canvas.height, viewportBottom + 200);
      const drawHeight = drawBottom - drawTop;

      ctx.clearRect(0, drawTop, canvas.width, drawHeight);

      // Draw gradient bands across the visible area
      const bandHeight = 4;
      for (let y = drawTop; y < drawBottom; y += bandHeight) {
        const localProgress = y / canvas.height;
        // Mix scroll progress with local position for a morphing effect
        const mixedProgress = localProgress;
        const [c1, c2] = getColorsAtProgress(mixedProgress);

        // Animate horizontal position based on scroll
        const wave = Math.sin(localProgress * 6 + time + scrollProgress * 3) * 0.15;
        const xOffset = canvas.width * wave;

        const grad = ctx.createLinearGradient(xOffset, y, canvas.width + xOffset, y + bandHeight);
        grad.addColorStop(0, `rgb(${c1[0]}, ${c1[1]}, ${c1[2]})`);
        grad.addColorStop(0.5, `rgb(${Math.round((c1[0] + c2[0]) / 2)}, ${Math.round((c1[1] + c2[1]) / 2)}, ${Math.round((c1[2] + c2[2]) / 2)})`);
        grad.addColorStop(1, `rgb(${c2[0]}, ${c2[1]}, ${c2[2]})`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, y, canvas.width, bandHeight);
      }

      // Add soft radial glow blobs that move with scroll
      const blobs = [
        {
          color: `rgba(59, 130, 246, ${0.06 + Math.sin(time) * 0.02})`,
          xBase: 0.25,
          yBase: 0.1 + scrollProgress * 0.3,
          radius: 0.35,
        },
        {
          color: `rgba(139, 92, 246, ${0.05 + Math.cos(time * 0.7) * 0.02})`,
          xBase: 0.75,
          yBase: 0.3 + scrollProgress * 0.25,
          radius: 0.3,
        },
        {
          color: `rgba(59, 130, 246, ${0.04 + Math.sin(time * 1.2) * 0.015})`,
          xBase: 0.5,
          yBase: 0.6 + scrollProgress * 0.2,
          radius: 0.4,
        },
        {
          color: `rgba(163, 230, 53, ${0.025 + Math.cos(time * 0.5) * 0.01})`,
          xBase: 0.3,
          yBase: 0.8 + scrollProgress * 0.15,
          radius: 0.25,
        },
      ];

      blobs.forEach((blob) => {
        const bx = canvas.width * (blob.xBase + Math.sin(time * 0.5 + blob.yBase * 10) * 0.08);
        const by = canvas.height * blob.yBase + Math.cos(time * 0.3 + blob.xBase * 5) * 100;
        const br = Math.min(canvas.width, canvas.height) * blob.radius;

        // Only draw if blob is near viewport
        if (by + br < drawTop - 200 || by - br > drawBottom + 200) return;

        const radGrad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        radGrad.addColorStop(0, blob.color);
        radGrad.addColorStop(1, "transparent");
        ctx.fillStyle = radGrad;
        ctx.fillRect(Math.max(0, bx - br), Math.max(drawTop, by - br), br * 2, br * 2);
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
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
