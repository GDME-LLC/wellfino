import { useState } from "react";
import { Link } from "react-router-dom";
import wellnessTreeImg from "@/assets/wellness-tree.png";
import categories from "@/data/categories";

// Positions mapped to tree anatomy (% from top-left)
const hotspots = [
  { id: "core-daily",         x: 50, y: 92, lineX: 50, lineY: 86 },
  { id: "digest-gut",         x: 50, y: 74, lineX: 50, lineY: 70 },
  { id: "calm-mood-sleep",    x: 15, y: 55, lineX: 32, lineY: 52 },
  { id: "focus-cognition",    x: 85, y: 55, lineX: 68, lineY: 52 },
  { id: "immunity-longevity", x: 10, y: 36, lineX: 28, lineY: 36 },
  { id: "active-performance", x: 90, y: 36, lineX: 72, lineY: 36 },
  { id: "beauty-structure",   x: 50, y: 18, lineX: 50, lineY: 24 },
  { id: "gummies",            x: 50, y: 5,  lineX: 50, lineY: 12 },
];

const WellnessTree = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative mx-auto max-w-2xl select-none">
      {/* SVG connector lines */}
      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {hotspots.map((spot) => (
          <line
            key={spot.id}
            x1={spot.lineX}
            y1={spot.lineY}
            x2={spot.x}
            y2={spot.y}
            stroke="hsl(var(--foreground) / 0.1)"
            strokeWidth="0.15"
            strokeDasharray="0.6 0.4"
            className="transition-all duration-300"
            style={{
              opacity: hoveredId === spot.id ? 1 : 0.4,
              stroke: hoveredId === spot.id ? "hsl(var(--primary) / 0.5)" : undefined,
              strokeWidth: hoveredId === spot.id ? "0.25" : "0.15",
            }}
          />
        ))}
      </svg>

      <img
        src={wellnessTreeImg}
        alt="Minimalist line-art wellness tree with clickable category branches"
        className="w-full mix-blend-multiply"
        draggable={false}
      />

      {/* Labels anchored to branches */}
      {hotspots.map((spot) => {
        const cat = categories.find((c) => c.id === spot.id)!;
        const isHovered = hoveredId === spot.id;
        return (
          <Link
            key={spot.id}
            to={`/category/${spot.id}`}
            onMouseEnter={() => setHoveredId(spot.id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Explore ${cat.label}`}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
          >
            <span
              className={`
                inline-flex items-center gap-1.5 whitespace-nowrap border
                px-3 py-1.5 sm:px-4 sm:py-2
                text-[10px] sm:text-xs font-medium tracking-widest uppercase
                rounded-sm transition-all duration-300
                ${isHovered
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-110"
                  : "bg-card/90 text-foreground/70 border-border/50 shadow-sm backdrop-blur-sm"
                }
              `}
            >
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  isHovered ? "bg-primary-foreground" : "bg-primary/50"
                }`}
              />
              {cat.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default WellnessTree;
