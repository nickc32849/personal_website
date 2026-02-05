import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function HomePage() {
  const featuredSlugs = ["dc-power-analyzer", "nasa"];
  const featuredProjects = projects.filter((p) =>
    featuredSlugs.includes(p.slug)
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-12">
      {/* Hero */}
      <section>
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">Hello!</h1>
          <h1 className="text-4xl font-semibold">I&apos;m Nick Carpenter</h1>
        </div>

        <p className="text-lg mt-6">
          Electrical Engineering student at Northeastern with a Business
          Administration minor. I build hardware-software systems, analyze
          complex datasets, and bridge the gap between technical work and
          real-world constraints&mdash;from NASA spacecraft technology to
          precision analog circuit design.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              href={`/projects/${project.slug}`}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        <p className="text-sm">
          <a href="/projects" className="underline">
            View all projects &rarr;
          </a>
        </p>
      </section>
    </main>
  );
}
