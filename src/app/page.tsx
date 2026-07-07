import { HeroBackground } from "@/components/three/HeroBackground";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden">
      <HeroBackground />
      <h1 className="relative z-10 text-3xl font-semibold">Home</h1>
    </main>
  );
}
