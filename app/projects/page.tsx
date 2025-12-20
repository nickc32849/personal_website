import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    href: "/projects/nasa",
    title: "NASA Small Satellite Subsystem Matching Platform",
    description:
      "Reorganized spacecraft technology datasets into retrieval categories and supported platform integration.",
  },
  {
    href: "/projects/homebase",
    title: "HomeBase: Full-Stack Roommate Coordination App",
    description:
      "Built features across the stack with Next.js, FastAPI, PostgreSQL, Docker, and JWT authentication.",
  },
  {
    href: "/projects/trade-emissions",
    title: "Trade Wars, Emissions, and Global Data Analysis",
    description:
      "Research assistant work using cross-country datasets, difference-in-differences, and GVAR-related data preparation.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-base">
          Selected work across engineering, data, and product development.
        </p>
      </header>

      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.href}
            href={project.href}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}
