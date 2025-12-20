import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";

export default function HomeBaseProjectPage() {
  return (
    <ProjectLayout
      title="HomeBase: Full-Stack Roommate Coordination App"
      subtitle="Forge Software Product Lab — a full-stack app that centralizes chores, bills, shared calendars, and shopping lists for roommate groups."
      tags={["React", "Next.js", "FastAPI", "PostgreSQL", "Docker", "JWT"]}
    >
      <Section title="Context">
        <p>
          I worked on an 8-person team in Northeastern’s Forge Software Product Lab to
          design and build a user-tested product with real feature requirements and
          iterative development cycles.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          Roommate coordination usually happens across scattered tools (texts, notes,
          Venmo, calendars), which makes it easy to miss chores, forget payments, or
          lose track of who is responsible for what.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>Built frontend pages using React and Next.js.</li>
          <li>
            Implemented backend API endpoints using Python and FastAPI, with Pydantic
            validation.
          </li>
          <li>Integrated PostgreSQL for persistent storage.</li>
          <li>
            Worked with Docker for local development consistency and JWT for
            authentication.
          </li>
          <li>
            Collaborated through Jira and GitHub, participating in design reviews and
            iterative development.
          </li>
        </ul>
      </Section>

      <Section title="System Design (High Level)">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium">Frontend:</span> Next.js UI pages for chores,
            bills, calendars, and lists.
          </li>
          <li>
            <span className="font-medium">Backend:</span> FastAPI service exposing
            endpoints for CRUD operations.
          </li>
          <li>
            <span className="font-medium">Database:</span> PostgreSQL storing users,
            groups, and shared items.
          </li>
          <li>
            <span className="font-medium">Auth:</span> JWT-based authentication to keep
            user/group data secure.
          </li>
        </ul>
      </Section>

      <Section title="Outcome">
        <p>
          Delivered user-facing features as part of an iterative development process,
          contributing to a centralized platform that supports real-time coordination
          across roommate groups.
        </p>
      </Section>

      <Section title="What I Learned">
        <p>
          Building full-stack systems taught me how frontend, backend, and database
          layers interact — and how small interface decisions (data shape, validation,
          auth) affect reliability across the entire product.
        </p>
      </Section>
    </ProjectLayout>
  );
}
