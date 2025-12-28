import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function HomeBasePage() {
  return (
    <ProjectLayout
      title="HomeBase"
      subtitle="Forge Software Product Lab • Northeastern University"
      tags={[
        "React",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "JWT Authentication",
        "Docker",
        "Full-Stack Systems",
        "Team Project",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      {/* One-paragraph summary */}
      <Section title="">
        <p>
          HomeBase is a full-stack roommate coordination system that consolidates expenses,
          scheduling, chores, and shared lists into a single real-time platform. Built with React,
          Next.js, FastAPI, and PostgreSQL, the project emphasizes system architecture, authenticated
          data flow, and modular subsystem integration.
        </p>
      </Section>

      {/* Divider between summary and rest of page */}
      <hr className="my-12 border-gray-700" />

      <Section title="Project Overview">
        <p>
          HomeBase is a comprehensive roommate coordination application designed to eliminate the
          fragmentation problem of managing shared living spaces. Instead of juggling multiple apps
          for expenses, scheduling, chores, and communication, HomeBase provides a centralized,
          real-time platform where roommates can manage all aspects of shared living coordination.
        </p>
      </Section>

      {/* Optional image (keep if you have it) */}
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
            HomeBase dashboard showing group-based navigation and shared coordination tools.
          </p>
        </div>
      </Section>

      <Section title="Problem">
        <ul className="list-disc space-y-2 pl-5">
          <li>Roommates juggle multiple apps (Venmo, group chats, Google Calendar, notes apps)</li>
          <li>Fragmented tools lead to missed responsibilities and mounting frustration</li>
          <li>No comprehensive solution exists for the full spectrum of roommate coordination</li>
          <li>Conflicts arise from miscommunication and disorganization, damaging relationships</li>
        </ul>
      </Section>

      <Section title="Solution">
        <p>
          HomeBase integrates core roommate coordination functions into a single, synchronized
          application, providing consistent real-time data visibility across all users.
        </p>
      </Section>

      <Section title="Core Features">
        <ul className="list-disc space-y-2 pl-5">
          <li>Multi-Group Support: Create and manage multiple roommate groups with one account</li>
          <li>Shared Calendar: View and manage group schedules</li>
          <li>Expense Tracking: Add, split, and review shared expenses</li>
          <li>Chore Management: Assign and complete household tasks</li>
          <li>Shopping Lists: Collaboratively manage shared purchases</li>
          <li>User Authentication: Secure login and personalized profiles</li>
        </ul>
      </Section>

      <Section title="Technical Stack">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Frontend</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>React with Next.js for server-side rendering and routing</li>
              <li>Figma for UI/UX design and prototyping</li>
              <li>Accessibility-tested color palette</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Backend</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Python with FastAPI for API endpoints</li>
              <li>PostgreSQL for data persistence</li>
              <li>Docker for containerization and consistent environments</li>
              <li>Pydantic for data validation and JSON parsing</li>
              <li>JWT tokens and password hashing for secure authentication</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="System Workflow">
        <ol className="list-decimal space-y-2 pl-5">
          <li>User signs in or creates an account</li>
          <li>Dashboard displays all associated roommate groups</li>
          <li>User selects a group to access group-specific features</li>
        </ol>

        <ul className="list-disc space-y-2 pl-10 mt-3">
          <li>Expenses: Add expenses, view bills, and payment history</li>
          <li>Calendar: Add events and view shared schedules</li>
          <li>Chores: Create tasks and mark chores complete</li>
          <li>Shopping Lists: Add and check off shared purchases</li>
        </ul>
      </Section>

      <Section title="My Contributions">
        <ul className="list-disc space-y-2 pl-5">
          <li>Implemented core frontend pages including sign-in, dashboards, and tasks</li>
          <li>Designed and integrated group-based navigation across frontend and backend</li>
          <li>Connected frontend components to authenticated, group-scoped API services</li>
          <li>Supported protected routes and session-based access control</li>
          <li>Refined UI/UX with accessibility considerations</li>
          <li>Participated in system-level workflow design for multi-user coordination</li>
        </ul>
      </Section>

      <Section title="Development Process">
        <p>
          The project followed an agile development approach with iterative design reviews. Figma
          prototypes were created before implementation to align on UI/UX decisions. Two formal
          showcase events were held to present progress and demonstrate functionality, allowing
          feedback-driven refinement.
        </p>
      </Section>

      <Section title="Key Takeaways">
        <ul className="list-disc space-y-2 pl-5">
          <li>Designing and reasoning about end-to-end systems</li>
          <li>Building modular subsystems with clear boundaries</li>
          <li>Implementing secure access control using JWTs</li>
          <li>Developing and validating RESTful interfaces</li>
          <li>Debugging distributed, multi-component software systems</li>
          <li>Applying iterative testing to improve reliability and maintainability</li>
        </ul>
      </Section>

      {/* Team section ABOVE the final divider */}
      <Section title="Team">
        <p>
          8-person software development team with collaborative development across frontend,
          backend, and design.
        </p>
      </Section>

      {/* Divider below Team, text stays below line */}
      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        Completed as part of Forge: A Sherman Center Program Software Product Lab, where students
        design and build full-stack applications from concept to deployment.
      </p>
    </ProjectLayout>
  );
}
