import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function HomeBasePage() {
  return (
    <ProjectLayout
      title="HomeBase"
      subtitle="Forge Software Product Lab &bull; Northeastern University &bull; Spring 2025"
      tags={[
        "React",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "JWT Authentication",
        "Docker",
        "Full-Stack Development",
        "Agile",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          HomeBase is a full-stack roommate coordination app that consolidates
          expenses, scheduling, chores, and shared shopping lists into a single
          real-time platform. I built features across both the frontend and
          backend as part of an 8-person team through Northeastern&apos;s Forge
          Product Lab. On the frontend, I implemented the sign-in page and
          tasks page using React and Next.js. On the backend, I built the group
          join feature using Python, FastAPI, and PostgreSQL. The system uses
          JWT authentication, Dockerized microservices, and a PostgreSQL
          database for persistent, group-scoped data.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="Project Overview">
        <p>
          Roommates typically juggle multiple apps for expenses, scheduling,
          chores, and communication&mdash;Venmo, group chats, Google Calendar,
          shared notes. HomeBase replaces that fragmentation with a single
          platform where everything lives in one place, scoped to specific
          roommate groups with real-time synchronization.
        </p>
      </Section>

      <Section title="Product Snapshot">
        <div className="space-y-3">
          <Image
            src="/images/homebase.png"
            alt="HomeBase application interface"
            width={1200}
            height={700}
            className="rounded-lg border"
          />
          <p className="text-sm text-neutral-400">
            HomeBase dashboard showing group-based navigation and shared
            coordination tools.
          </p>
        </div>
      </Section>

      <Section title="My Contributions">
        <p>
          I worked across both ends of the stack, owning specific features from
          design through implementation:
        </p>
        <ul className="list-disc space-y-2 pl-5 mt-3">
          <li>
            <strong>Sign-in page (frontend):</strong> Built the authentication
            UI in React/Next.js, connecting to the JWT-based auth flow on the
            backend
          </li>
          <li>
            <strong>Tasks page (frontend):</strong> Implemented the chore
            management interface where roommates can create, assign, and
            complete household tasks
          </li>
          <li>
            <strong>Group join feature (backend):</strong> Designed and built
            the API endpoint in FastAPI that lets users join existing roommate
            groups, including database logic in PostgreSQL for group membership
            and validation
          </li>
        </ul>
      </Section>

      <Section title="Technical Stack">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Frontend:</strong> React with Next.js for server-side
            rendering and routing
          </li>
          <li>
            <strong>Backend:</strong> Python with FastAPI for RESTful API
            endpoints, Pydantic for data validation
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL for persistent, group-scoped
            data storage
          </li>
          <li>
            <strong>Auth:</strong> JWT tokens and password hashing for secure
            session management
          </li>
          <li>
            <strong>Infrastructure:</strong> Docker for containerization and
            consistent development environments
          </li>
          <li>
            <strong>Workflow:</strong> GitHub for version control, Jira for
            sprint planning and task tracking
          </li>
        </ul>
      </Section>

      <Section title="Development Process">
        <p>
          The team followed an agile workflow with iterative design reviews.
          Figma prototypes were created before implementation to align on UI/UX
          decisions. Two formal showcase events were held to present progress,
          demonstrate functionality, and incorporate feedback.
        </p>
      </Section>

      <Section title="Key Takeaways">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Building features across the full stack&mdash;from React components
            to FastAPI endpoints to PostgreSQL queries&mdash;in a single project
          </li>
          <li>
            Working in a larger team with clear ownership boundaries and
            coordinated integration points
          </li>
          <li>
            Implementing secure authentication flows with JWT tokens and
            protected routes
          </li>
          <li>
            Using Docker to ensure consistent environments across 8 developers
            with different local setups
          </li>
        </ul>
      </Section>

      <Section title="Team">
        <p>
          8-person team with collaborative development across frontend, backend,
          and design. I focused on authentication UI, task management UI, and
          group membership backend logic.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        Completed as part of Forge: A Sherman Center Program Software Product
        Lab, where students design and build full-stack applications from
        concept to deployment.
      </p>
    </ProjectLayout>
  );
}
