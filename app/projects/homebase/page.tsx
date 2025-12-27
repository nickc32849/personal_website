import Image from "next/image";

export default function HomeBaseProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">HomeBase</h1>

        <p className="text-lg">
          HomeBase is a full-stack roommate coordination system that consolidates
          expenses, scheduling, chores, and shared lists into a single real-time
          platform. Built with React, Next.js, FastAPI, and PostgreSQL, the project
          emphasizes system architecture, authenticated data flow, and modular
          subsystem integration.
        </p>
      </header>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Tags */}
      <section className="flex flex-wrap gap-2 text-sm">
        {[
          "React",
          "Next.js",
          "FastAPI",
          "PostgreSQL",
          "JWT Authentication",
          "Full-Stack Systems",
          "Team Project",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded border border-neutral-600 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </section>

      {/* Optional Image */}
      <section className="space-y-2">
        <Image
          src="/images/homebase.png"
          alt="HomeBase application interface"
          width={1200}
          height={700}
          className="rounded-lg border border-neutral-700"
        />
        <p className="text-sm text-neutral-400">
          HomeBase dashboard showing group-based navigation and shared coordination tools.
        </p>
      </section>

      {/* Project Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>

        <p>
          HomeBase is a comprehensive roommate coordination application designed to
          eliminate the fragmentation problem of managing shared living spaces.
          Instead of juggling multiple apps for expenses, scheduling, chores, and
          communication, HomeBase provides a centralized, real-time platform where
          roommates can manage all aspects of shared living coordination.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Problem</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Roommates juggle multiple apps (Venmo, group chats, Google Calendar, notes apps)</li>
          <li>Fragmented tools lead to missed responsibilities and mounting frustration</li>
          <li>No comprehensive solution exists for full-spectrum roommate coordination</li>
          <li>Miscommunication and disorganization damage shared living relationships</li>
        </ul>
      </section>

      {/* Solution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Solution</h2>

        <p>
          HomeBase integrates core roommate coordination functions into a single,
          synchronized application, providing consistent, real-time data visibility
          across all users in a shared data environment.
        </p>
      </section>

      {/* Core Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Core Features</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Multi-Group Support: Manage multiple roommate groups under one account</li>
          <li>Shared Calendar: Create and view group schedules</li>
          <li>Expense Tracking: Add, split, and review shared expenses</li>
          <li>Chore Management: Assign and complete household tasks</li>
          <li>Shopping Lists: Collaboratively manage shared purchases</li>
          <li>User Authentication: Secure login and personalized profiles</li>
        </ul>
      </section>

      {/* Technical Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Technical Stack</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>React with Next.js for server-side rendering and routing</li>
            <li>Figma for UI/UX design and prototyping</li>
            <li>Accessibility-tested color palette</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Backend</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Python with FastAPI for high-performance API endpoints</li>
            <li>PostgreSQL for reliable data persistence</li>
            <li>Docker for containerization and deployment consistency</li>
            <li>Pydantic for data validation and JSON parsing</li>
            <li>JWT tokens and password hashing for secure authentication</li>
          </ul>
        </div>
      </section>

      {/* System Workflow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">System Workflow</h2>

        <ol className="list-decimal space-y-2 pl-6">
          <li>User signs in or creates an account</li>
          <li>Dashboard displays all associated roommate groups</li>
          <li>User selects a group to access group-specific features:</li>
        </ol>

        <ul className="list-disc space-y-2 pl-12">
          <li>Expenses: Add expenses, view bills, and payment history</li>
          <li>Calendar: Add events and view shared schedules</li>
          <li>Chores: Create tasks and mark chores complete</li>
          <li>Shopping Lists: Add and check off shared purchases</li>
        </ul>
      </section>

      {/* My Contributions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">My Contributions</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Implemented core frontend pages including sign-in, dashboards, and tasks</li>
          <li>Designed and integrated group-based navigation across frontend and backend</li>
          <li>Connected frontend components to authenticated, group-scoped API services</li>
          <li>Supported protected routes and session-based access control</li>
          <li>Refined UI/UX with accessibility considerations</li>
          <li>Participated in system-level workflow design for multi-user coordination</li>
        </ul>
      </section>

      {/* Development Process */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Development Process</h2>

        <p>
          The project followed an agile development approach with iterative design
          reviews. Comprehensive Figma prototypes were created before implementation
          to align on UI/UX decisions. Two formal showcase events were held to present
          progress and demonstrate functionality, allowing feedback-driven refinement.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Designing and reasoning about end-to-end systems</li>
          <li>Building modular subsystems with clearly defined boundaries</li>
          <li>Implementing secure access control using JWTs</li>
          <li>Developing and validating RESTful interfaces</li>
          <li>Debugging distributed, multi-component software systems</li>
          <li>Applying iterative testing to improve reliability and maintainability</li>
        </ul>
      </section>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Team */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Team</h2>

        <p>
          8-person software development team with collaborative development across
          frontend, backend, and design.
        </p>

        <p className="italic text-neutral-300">
          Completed as part of Forge: A Sherman Center Program Software Product Lab,
          where students design and build full-stack applications from concept to deployment.
        </p>
      </section>
    </main>
  );
}
