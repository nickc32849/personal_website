import ProjectLayout from "../../components/ProjectLayout";

export default function HomeBasePage() {
  return (
    <ProjectLayout
      title="HomeBase"
      subtitle="Forge Software Product Lab - Northeastern University"
      date="Spring 2025"
    >
      <p>
        Roommates typically juggle multiple apps for expenses, scheduling,
        chores, and communication — Venmo, group chats, Google Calendar, shared
        notes. HomeBase was built to replace that fragmentation with a single
        platform where everything lives in one place, scoped to specific
        roommate groups with real-time synchronization. I worked on this as part
        of an 8-person team through Northeastern's Forge Product Lab, a Sherman
        Center program where students design and build full-stack applications
        from concept to deployment.
      </p>

      {/* Uncomment when you have a screenshot
      <Image
        src="/projects/homebase/dashboard.png"
        alt="HomeBase dashboard showing group-based navigation"
        width={1200}
        height={700}
        className="rounded-lg border"
      />
      */}

      <h2 className="text-xl font-semibold">My Contributions</h2>
      <p>
        I worked across both ends of the stack, owning specific features from
        design through implementation. On the frontend, I built the sign-in page
        and the tasks page using React and Next.js — the sign-in page connects
        to a JWT-based auth flow on the backend, and the tasks page is where
        roommates create, assign, and complete household chores. On the backend,
        I designed and built the group join feature in Python using FastAPI and
        PostgreSQL, handling the API endpoint, database logic for group
        membership, and input validation.
      </p>

      <h2 className="text-xl font-semibold">Technical Stack</h2>
      <p>
        The frontend uses React with Next.js for server-side rendering and
        routing. The backend runs on Python with FastAPI for RESTful endpoints
        and Pydantic for data validation, backed by PostgreSQL for persistent,
        group-scoped storage. Authentication is handled through JWT tokens and
        password hashing. The whole system is containerized with Docker, which
        was essential for keeping environments consistent across eight developers
        with different local setups. We used GitHub for version control and Jira
        for sprint planning.
      </p>

      <h2 className="text-xl font-semibold">What I Took Away</h2>
      <p>
        This was my first time building features across the full stack in a
        single project — going from React components to FastAPI endpoints to
        PostgreSQL queries in the same week. Working in a larger team taught me a
        lot about ownership boundaries and coordinated integration, since my
        backend group join feature had to mesh with someone else's frontend group
        management flow. The team followed an agile workflow with Figma
        prototypes before implementation and two formal showcase events where we
        presented progress and incorporated feedback.
      </p>
    </ProjectLayout>
  );
}
