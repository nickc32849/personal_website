import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NasaProjectPage() {
  return (
    <ProjectLayout
      title="NASA Small Satellite Subsystem Matching Platform"
      subtitle="Internship work supporting access to data from NASA’s annual State-of-the-Art Small Satellite Report."
      tags={[
        "Data structuring",
        "Integration",
        "Information architecture",
        "Collaboration",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Context">
        <p>
          I worked on an aerospace subsystem matching team to help universities,
          startups, and government partners access and use spacecraft technology data
          more efficiently.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          The underlying datasets were complex and not organized for quick retrieval
          or clean integration into a software platform, limiting usability for
          external partners.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Translated and reorganized spacecraft technology datasets into structured,
            Excel-based retrieval categories.
          </li>
          <li>
            Designed information architectures to support comparison and search.
          </li>
          <li>
            Partnered with software interns to resolve compatibility and integration
            issues.
          </li>
        </ul>
      </Section>

      <Section title="Tools & Skills">
        <ul className="list-disc space-y-2 pl-5">
          <li>Information architecture and data structuring</li>
          <li>Excel-based retrieval workflows</li>
          <li>Cross-team technical collaboration</li>
          <li>Systems integration mindset</li>
        </ul>
      </Section>

      <Section title="Outcome">
        <p>
          Improved data usability and ensured compatibility with downstream platform
          systems.
        </p>
      </Section>

      <Section title="Artifacts">
        <ul className="list-disc space-y-2 pl-5">
          <li>High-level retrieval redesign summary (available upon request)</li>
          <li>Note: detailed internal materials are not publicly shareable</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          Even correct data can fail if it is not structured to match how systems and
          users consume it.
        </p>
      </Section>
    </ProjectLayout>
  );
}
