"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useCoarsePointer } from "@/hooks/useCoarsePointer";
import { StaticFallback } from "./StaticFallback";

const SceneCanvas = dynamic(
  () => import("./SceneCanvas").then((mod) => mod.SceneCanvas),
  { ssr: false, loading: () => <StaticFallback /> },
);

export function HeroBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useCoarsePointer();

  return (
    <div className="absolute inset-0 -z-10">
      {reducedMotion || isCoarsePointer ? <StaticFallback /> : <SceneCanvas />}
    </div>
  );
}
