import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function HomeBaseProjectPage() {
  return (
    <ProjectLayout
      title="HomeBase: Full-Stack Roommate Coordination App"
      subtitle="Forge Software Product Lab — a full-stack app for coordinating chores, bills, calendars, and shared shopping."
      tags={["React", "Next.js", "FastAPI", "PostgreSQL", "Docker", "JWT"]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Context">
        <p>
          I worked on an 8-person team in Northeastern’s Forge Software Product Lab to
          design and build a real, user-tested product through iterative development.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          Roommate coordination is often fragmented across texts, calendars, and
          payment apps, making responsibilities easy to miss.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>Developed frontend pages using React and Next.js.</li>
          <li>
            Implemented backend API endpoints with Python and FastAPI, using Pydantic
            for validation.
          </li>
          <li>Integrated PostgreSQL for persistent data storage.</li>
          <li>Used Docker and JWT authentication.</li>
          <li>
            Collaborated via Jira and GitHub with regular design reviews.
          </li>
        </ul>
      </Section>

      <Section title="System Design">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Frontend:</strong> Next.js pages for user interaction
          </li>
          <li>
            <strong>Backend:</strong> FastAPI services for CRUD operations
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL relational storage
          </li>
          <li>
            <strong>Auth:</strong> JWT-based user authentication
          </li>
        </ul>
      </Section>

      <Section title="Outcome">
        <p>
          Delivered functional features as part of a cohesive system supporting
          real-time roommate coordination.
        </p>
      </Section>

      <Section title="Artifacts">
        <ul className="list-disc space-y-2 pl-5">
          <li>Private team repository (available upon request)</li>
          <li>Architecture overview included above</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          Interface decisions between frontend, backend, and data layers determine
          system reliability.
        </p>
      </Section>
    </ProjectLayout>
  );
}
