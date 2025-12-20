import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <div className="mt-6 space-y-4">
        <Link
          href="/projects/nasa"
          className="block rounded-lg border p-4 hover:bg-gray-50"
        >
          <h2 className="text-lg font-semibold">
            NASA Small Satellite Subsystem Matching Platform
          </h2>
          <p className="text-sm">
            Reorganized spacecraft technology datasets into retrieval categories and
            supported platform integration.
          </p>
        </Link>

        <Link
          href="/projects/homebase"
          className="block rounded-lg border p-4 hover:bg-gray-50"
        >
          <h2 className="text-lg font-semibold">
            HomeBase: Full-Stack Roommate Coordination App
          </h2>
          <p className="text-sm">
            Built frontend + backend features with Next.js, FastAPI, PostgreSQL, Docker,
            and JWT authentication.
          </p>
        </Link>
      </div>
    </main>
  );
}
