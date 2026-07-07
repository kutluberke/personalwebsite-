import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Projects
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built end to end, from raw data to something usable.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
