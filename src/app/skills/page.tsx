import { skillGroups } from "@/content/skills";
import { FadeIn } from "@/components/motion/FadeIn";

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Skills
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              The stack behind the projects.
            </h1>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.category} delay={Math.min(index * 0.08, 0.3)}>
              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-sm text-muted-foreground">
                  {group.category}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
