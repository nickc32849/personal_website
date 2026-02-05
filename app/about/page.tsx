import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-base">
          Electrical Engineering student at Northeastern building reliable
          systems at the hardware&ndash;software boundary.
        </p>
      </header>

      <section className="mt-10 space-y-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Who I am</h2>
          <p>
            I&apos;m Nick Carpenter, an Electrical Engineering major at
            Northeastern University with a Business Administration minor.
            I&apos;m drawn to work where hardware meets software&mdash;embedded
            systems, power electronics, analog circuit design, and control
            systems&mdash;especially when the constraints are real: power
            budgets, timing requirements, reliability standards, and usability.
            My business background gives me a lens for understanding not just
            how systems work, but why they matter and how to communicate that to
            people outside the lab.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">What I&apos;m building skills in</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium">Embedded and hardware systems:</span>{" "}
              state-based logic, sensor integration, servo actuation, power
              distribution, and wiring reliability
            </li>
            <li>
              <span className="font-medium">Analog circuit design:</span>{" "}
              instrumentation amplifiers, active filters, feedback control,
              frequency response characterization using LTspice and bench
              equipment
            </li>
            <li>
              <span className="font-medium">
                Software that connects to real systems:
              </span>{" "}
              APIs, relational databases, full-stack development with React,
              FastAPI, and PostgreSQL
            </li>
            <li>
              <span className="font-medium">Product and systems thinking:</span>{" "}
              problem framing, constraint analysis, tradeoff communication, and
              bridging technical and non-technical stakeholders
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>NASA Ames Research Center:</strong> Structured 500+
              spacecraft subsystem datasets from a 461-page technical report for
              a satellite part-matching platform, collaborating with 15 interns
              across software, data, and business teams
            </li>
            <li>
              <strong>Enhanced DC Power Analyzer (in progress):</strong>{" "}
              Designing a precision measurement instrument with a custom analog
              front-end, Sallen-Key filter, and programmable electronic
              load&mdash;teaching myself Circuits &amp; Signals concepts before
              taking the prerequisite coursework
            </li>
            <li>
              <strong>Forge Product Lab:</strong> Built frontend and backend
              features for a full-stack roommate coordination app with an
              8-person team
            </li>
            <li>
              <strong>Husky Startup Challenge:</strong> Placed 2nd with a campus
              sustainability platform pitch, developing market analysis across
              4,000+ universities and a 5-year revenue strategy
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">What I&apos;m looking for</h2>
          <p>
            I&apos;m seeking co-op positions where I can contribute to real
            engineering work from day one&mdash;especially roles in power and
            energy, medical devices, or defense and aerospace. I&apos;m most
            interested in embedded systems, test and validation, hardware
            bring-up, firmware, or adjacent systems-level software roles. I
            learn fast, ask good questions, and care about getting the details
            right.
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
