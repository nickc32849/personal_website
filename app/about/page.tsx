import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-base">
          Electrical Engineering student at Northeastern focused on building reliable
          systems at the hardware–software boundary.
        </p>
      </header>

      <section className="mt-10 space-y-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Who I am</h2>
          <p>
            I’m Nick Carpenter, an Electrical Engineering major at Northeastern (with a
            Business Administration minor). I’m most interested in embedded systems,
            hardware–software integration, and applied problem-solving — especially when
            the work involves real constraints like power, timing, reliability, and
            usability.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">What I’m building skills in</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium">Embedded + hardware systems:</span> state-based
              logic, sensors/actuation, power and wiring reliability
            </li>
            <li>
              <span className="font-medium">Software that connects to real systems:</span>{" "}
              APIs, data modeling, full-stack fundamentals
            </li>
            <li>
              <span className="font-medium">Product thinking:</span> problem framing,
              constraints, and clear communication of tradeoffs
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>NASA internship work organizing and integrating satellite technology data</li>
            <li>Forge Product Lab: built full-stack features for a team product</li>
            <li>Cornerstone: Whack-a-Mole arcade build (hardware + software integration)</li>
            <li>Husky Startup Challenge: 2nd place pitch (systems + scalability thinking)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">What I’m looking for</h2>
          <p>
            I’m applying for co-ops where I can contribute to real engineering work while
            leveling up fast — especially roles involving embedded systems, test/validation,
            hardware bring-up, firmware, or adjacent systems/software.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="underline">
              View Projects
            </Link>
            <Link href="/contact" className="underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
