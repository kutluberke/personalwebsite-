import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {project.title}
        </h2>
        <p className="text-sm text-accent">{project.tagline}</p>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-2.5 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-fit items-center gap-1.5 font-mono text-sm transition-colors hover:text-accent"
      >
        GitHub ↗
      </a>
    </article>
  );
}
