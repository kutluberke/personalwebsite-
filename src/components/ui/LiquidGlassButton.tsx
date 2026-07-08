import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

const surfaceClassName =
  "group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm text-foreground transition-transform duration-300 hover:scale-105";

// A long multi-layer box-shadow as a Tailwind arbitrary value silently failed to
// parse (computed style came back as zeroed/transparent) — inline style instead.
const glassEdgeStyle = {
  boxShadow:
    "0 2px 6px rgba(0,0,0,0.15), inset 1px 1px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08), 0 0 16px rgba(45,212,191,0.12)",
};

function GlassLayers() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={glassEdgeStyle}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-full border border-border bg-surface/60"
        style={{ backdropFilter: "url(#liquid-glass-filter)" }}
      />
    </>
  );
}

/** Renders once — any element can reference url(#liquid-glass-filter) in a backdrop-filter. */
export function GlassFilterDefs() {
  return (
    <svg className="hidden" aria-hidden focusable="false">
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves={1}
            seed={1}
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation={2} result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale={40}
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  );
}

interface LiquidGlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  type?: "button" | "submit";
  className?: string;
}

export function LiquidGlassButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
}: LiquidGlassButtonProps) {
  const combinedClassName = `${surfaceClassName} ${className}`;
  const content = (
    <>
      <GlassLayers />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
