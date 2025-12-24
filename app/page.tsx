import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function HomePage() {
  const featuredSlugs = ["whack-a-mole", "nasa"];
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
          I&apos;m an Electrical Engineering student at Northeastern interested in embedded
          systems, hardware–software integration, and applied problem-solving.
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
            View all projects →
          </a>
        </p>
      </section>
    </main>
  );
}
