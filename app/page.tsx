import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export default function HomePage() {
  const featuredSlugs = ["whack-a-mole", "nasa"];
  const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold">Nick Carpenter</h1>
        <p className="text-lg">
          Electrical Engineering student at Northeastern interested in embedded systems,
          hardware–software integration, and applied problem-solving.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/projects" className="underline">
            Projects
          </Link>
          <Link href="/about" className="underline">
            About
          </Link>
          <Link href="/contact" className="underline">
            Contact
          </Link>
          {/* Optional: add this once you create /resume */}
          {/* <Link href="/resume" className="underline">
            Resume
          </Link> */}
        </div>
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

        <Link href="/projects" className="underline text-sm">
          View all projects →
        </Link>
      </section>
    </main>
  );
}
