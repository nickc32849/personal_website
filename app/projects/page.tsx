import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-base">
          Selected work across embedded systems, data analysis, and product
          development.
        </p>
      </header>

      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            href={`/projects/${project.slug}`}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}
