import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function HuskyStartupChallengePage() {
  return (
    <ProjectLayout
      title="SustainaFill — Husky Startup Challenge"
      subtitle="Second Place • Northeastern University Oakland • Fall 2024"
      tags={[
        "Product design",
        "Systems thinking",
        "Market analysis",
        "Sustainability",
        "Startup pitch",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Context">
        <p>
          SustainaFill was an early-stage startup concept developed for the Husky Startup
          Challenge at Northeastern University Oakland. The goal was to design a scalable,
          data-driven solution that addressed sustainability, student health, and cost
          savings on college campuses.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          Despite the presence of water refill stations on many campuses, students often
          lack awareness and convenient access. According to research presented in the
          pitch, over <strong>3 million single-use plastic bottles</strong> are used
          annually on a typical campus, while <strong>80% end up as litter</strong> .
        </p>
      </Section>

      <Section title="Proposed Solution">
        <p>
          SustainaFill proposed a mobile application designed to bridge the gap between
          existing refill infrastructure and student behavior by improving visibility,
          accessibility, and engagement.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Real-time mapping of campus refill stations using GPS</li>
          <li>Hydration reminders and proximity-based notifications</li>
          <li>Campus system integration (e.g., student ID data)</li>
          <li>Usage analytics for university administrators</li>
        </ul>
      </Section>

      <Section title="My Role">
        <p>
          I contributed to the overall system design and pitch development, helping frame
          the problem, solution architecture, and value proposition. I focused on ensuring
          the concept was technically feasible, scalable, and clearly communicated to a
          mixed technical and non-technical audience.
        </p>
      </Section>

      <Section title="Market & Business Model">
        <p>
          The pitch included a structured market analysis showing applicability across
          more than <strong>4,000 U.S. colleges and universities</strong>, with tiered
          annual licensing for institutions based on enrollment size .
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Annual university licensing fees</li>
          <li>Sponsored sustainability challenges and partnerships</li>
          <li>Aggregated, anonymized data insights for researchers and policymakers</li>
        </ul>
      </Section>

      <Section title="Scalability & Systems Thinking">
        <p>
          SustainaFill was designed as a modular, cloud-based system that could scale
          across campuses. The pitch emphasized how data collected from app usage could
          inform infrastructure placement and drive continuous improvement .
        </p>
      </Section>

      <Section title="Outcome">
        <p>
          The project placed <strong>second overall</strong> in the Husky Startup
          Challenge. Judges highlighted the clarity of the problem framing, the
          feasibility of the solution, and the scalability of the proposed system.
        </p>
      </Section>

      <Section title="Artifacts">
        <ul className="list-disc space-y-2 pl-5">
          <li>Demo Day pitch deck (available upon request)</li>
          <li>Market research and cost modeling slides</li>
          <li>Live pitch presentation at NU Oakland</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          This experience strengthened my ability to translate technical and systems-level
          ideas into clear value propositions. Designing the pitch required balancing
          feasibility, scalability, and user behavior — a mindset that directly applies
          to engineering system design.
        </p>
      </Section>
    </ProjectLayout>
  );
}
