import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-5xl flex-col gap-10">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Projects
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Built end to end, from raw data to something usable.
            </h1>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={Math.min(index * 0.08, 0.4)}
              className="h-full"
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
