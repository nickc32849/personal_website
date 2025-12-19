export default function NasaProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Title + quick context */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">
          NASA Small Satellite Subsystem Matching Platform
        </h1>
        <p className="text-base">
          Internship project supporting access to data from NASA’s annual{" "}
          <span className="font-medium">State-of-the-Art Small Satellite Report</span>.
        </p>

        {/* “At-a-glance” chips: quick recruiter scan */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full border px-3 py-1 text-sm">Data structuring</span>
          <span className="rounded-full border px-3 py-1 text-sm">Platform integration</span>
          <span className="rounded-full border px-3 py-1 text-sm">Cross-team collaboration</span>
          <span className="rounded-full border px-3 py-1 text-sm">Excel-based retrieval</span>
        </div>
      </header>

      {/* Content sections */}
      <section className="mt-10 space-y-10">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Context</h2>
          <p>
            I worked on an aerospace subsystem matching team to support universities,
            startups, and government partners in finding and using spacecraft technology
            data more efficiently.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p>
            The underlying datasets from the Small Satellite Report were complex and not
            organized for quick retrieval or easy integration into a software platform.
            This made it harder for external partners to access the information they
            needed.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">My Role</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Translated and reorganized complex spacecraft technology datasets into
              streamlined Excel-based retrieval categories to improve accessibility.
            </li>
            <li>
              Designed structures that made it easier to search, compare, and retrieve
              subsystem information.
            </li>
            <li>
              Partnered with software development interns to resolve compatibility issues
              and ensure the data structure integrated cleanly with the platform.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Tools & Skills</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Data organization & categorization (information architecture)</li>
            <li>Excel workflows for structured retrieval</li>
            <li>Cross-team technical communication</li>
            <li>Integration mindset: making data “fit” the system consuming it</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p>
            Improved usability of the retrieval structure and helped ensure the dataset
            could be integrated without breaking compatibility across the platform.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">What I Learned</h2>
          <p>
            Data structure decisions directly shape product usability and integration
            success. Even when the “data” is correct, the system can fail if the format
            doesn’t match how downstream tools and users actually work.
          </p>
        </div>
      </section>
    </main>
  );
}
