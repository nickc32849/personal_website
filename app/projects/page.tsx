import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <p className="mt-2 text-base">
        Selected projects across engineering, data analysis, and product development.
      </p>

      <div className="mt-8 space-y-4">
        {/* NASA Project */}
        <Link
          href="/projects/nasa"
          className="block rounded-lg border p-4 transition hover:bg-gray-50"
        >
          <h2 className="text-lg font-semibold">
            NASA Small Satellite Subsystem Matching Platform
          </h2>
          <p className="text-sm">
            Reorganized spacecraft technology datasets into structured retrieval
            categories and supported platform integration for external partners.
          </p>
        </Link>

        {/* HomeBase Project */}
        <Link
          href="/projects/homebase"
          className="block rounded-lg border p-4 transition hover:bg-gray-50"
        >
          <h2 className="text-lg font-semibold">
            HomeBase: Full-Stack Roommate Coordination App
          </h2>
          <p className="text-sm">
            Built frontend and backend features using Next.js, FastAPI, PostgreSQL,
            Docker, and JWT authentication.
          </p>
        </Link>

        {/* Trade & Emissions Research */}
        <Link
          href="/projects/trade-emissions"
          className="block rounded-lg border p-4 transition hover:bg-gray-50"
        >
          <h2 className="text-lg font-semibold">
            Trade Wars, Emissions, and Global Data Analysis
          </h2>
          <p className="text-sm">
            Research assistant work analyzing global trade and emissions data using
            econometric methods and structured datasets.
          </p>
        </Link>
      </div>
    </main>
  );
}
