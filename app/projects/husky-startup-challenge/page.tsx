import Image from "next/image";
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

      <Section title="Pitch Slide">
        <div className="space-y-3">
          <Image
            src="/images/sustainafill-solution.png"
            alt="SustainaFill solution slide from Demo Day pitch deck"
            width={1200}
            height={675}
            className="rounded-lg border"
          />
          <p className="text-sm">
            Demo Day slide: proposed app concept and feature set.
          </p>
        </div>
      </Section>

      <Section title="Problem">
        <p>
          Despite refill stations existing on many campuses, awareness and usage are still
          low — leading to excessive single-use bottle consumption and missed opportunities
          for sustainability impact.
        </p>
      </Section>

      <Section title="Proposed Solution">
        <p>
          A mobile app that improves the visibility and convenience of refill stations,
          encourages hydration habits, and provides usage insights for campuses.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Map-based discovery of refill stations (GPS)</li>
          <li>Hydration reminders and proximity nudges</li>
          <li>Campus integration (IDs / events / challenges)</li>
          <li>Analytics for administrators to improve infrastructure placement</li>
        </ul>
      </Section>

      <Section title="My Role">
        <p>
          I contributed to system-level concept design and pitch development, focusing on
          feasibility, scalability, and communicating the idea clearly to a mixed audience.
        </p>
      </Section>

      <Section title="Outcome">
        <p>
          The project placed <strong>2nd overall</strong> in the Husky Startup Challenge.
        </p>
      </Section>

      <Section title="What I’d Build Differently Now">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Start with a tighter MVP:</strong> map + verified locations + one
            engagement loop (e.g., streaks or campus challenge). Ship fast, then expand.
          </li>
          <li>
            <strong>Prove behavior change:</strong> run a 2–4 week pilot with a single
            dorm/community and measure refill frequency + retention, not just downloads.
          </li>
          <li>
            <strong>Make data trustworthy:</strong> build a verification workflow (student
            submissions + admin approval) so station accuracy stays high.
          </li>
          <li>
            <strong>Design for privacy early:</strong> keep analytics anonymized by default,
            with clear opt-in for anything sensitive.
          </li>
          <li>
            <strong>Integrate with campus operations:</strong> align incentives with facilities
            teams (maintenance reporting, station downtime flags) so the app stays useful long-term.
          </li>
        </ul>
      </Section>

      <Section title="Artifacts">
        <ul className="list-disc space-y-2 pl-5">
          <li>Demo Day pitch deck (PDF)</li>
          <li>Market sizing + pricing model slides</li>
          <li>Competition result: 2nd place</li>
        </ul>
      </Section>
    </ProjectLayout>
  );
}
