import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <FadeIn>
          <div className="flex flex-col gap-6">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Statistics first. Machine learning by necessity.
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4 text-lg text-muted-foreground">
            <p>
              I study Statistics at Yıldız Technical University, on the Data
              Science certificate track — the kind of foundation that makes a
              model trustworthy, not just impressive.
            </p>
            <p>
              Part-time, I put that to work at Turkish Airlines, in Fuel
              Management analytics: real operational data, real constraints,
              real stakes.
            </p>
            <p>
              An international youth exchange in İscar, Spain, was a
              different kind of lesson — the best analysis still has to be
              explained to people who care about the conclusion, not the
              model.
            </p>
            <p>
              I&apos;m building toward a Master&apos;s in Business Analytics,
              aiming to turn statistical rigor into decisions companies can
              actually act on.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
