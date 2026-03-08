import { useEffect, useState } from "react";

const ScrollGradientBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Interpolate between color stops based on scroll
  const stops: [number, string, string][] = [
    [0,    "hsl(228, 30%, 7%)",  "hsl(240, 20%, 10%)"],   // Deep navy
    [0.15, "hsl(245, 25%, 9%)",  "hsl(230, 30%, 12%)"],   // Indigo shift
    [0.3,  "hsl(255, 20%, 8%)",  "hsl(220, 35%, 10%)"],   // Purple-navy
    [0.5,  "hsl(220, 40%, 10%)", "hsl(250, 20%, 8%)"],    // Rich blue
    [0.7,  "hsl(240, 25%, 8%)",  "hsl(210, 30%, 10%)"],   // Deep indigo
    [0.85, "hsl(230, 20%, 7%)",  "hsl(245, 25%, 9%)"],    // Navy return
    [1,    "hsl(225, 25%, 5%)",  "hsl(235, 20%, 7%)"],    // Near black
  ];

  // Find current interpolated colors
  let topColor = stops[0][1];
  let bottomColor = stops[0][2];

  for (let i = 0; i < stops.length - 1; i++) {
    if (scrollProgress >= stops[i][0] && scrollProgress <= stops[i + 1][0]) {
      topColor = stops[i][1];
      bottomColor = stops[i][2];
      // We could lerp HSL but CSS handles the transition smoothly
      const t = (scrollProgress - stops[i][0]) / (stops[i + 1][0] - stops[i][0]);
      if (t > 0.5) {
        topColor = stops[i + 1][1];
        bottomColor = stops[i + 1][2];
      }
      break;
    }
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-1000 ease-out"
      style={{
        zIndex: 0,
        background: `linear-gradient(165deg, ${topColor} 0%, ${bottomColor} 100%)`,
      }}
    />
  );
};

export default ScrollGradientBackground;
