import { HeroBackground } from "@/components/three/HeroBackground";
import { FadeIn } from "@/components/motion/FadeIn";
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 text-center">
      <HeroBackground />
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
        <FadeIn>
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Statistics @ YTÜ
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Kutlu Berke
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground">
            Data Scientist in the making — turning messy data into decisions
            through statistics, machine learning, and applied AI.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <LiquidGlassButton href="/projects" className="mt-2">
            View Projects →
          </LiquidGlassButton>
        </FadeIn>
      </div>
    </main>
  );
}
