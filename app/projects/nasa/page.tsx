// app/projects/nasa/page.tsx

import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NasaProjectPage() {
  return (
    <ProjectLayout
      title="NASA — Small Spacecraft Systems Data Infrastructure"
      subtitle="NASA Ames Research Center (S3VI) • Summer 2025"
      tags={[
        "NASA",
        "Small Satellites",
        "Spacecraft Subsystems",
        "Data Engineering",
        "Systems Engineering",
        "Data Normalization",
        "Excel",
        "Cross-Functional Collaboration",
      ]}
    >
      <BackLink href="/projects" label="Back to Projects" />

      <Section title="Recruiter Skim">
        <p>
          During Summer 2025, I worked with the NASA Small Spacecraft Systems
          Virtual Institute to transform NASA’s State-of-the-Art Small Spacecraft
          Technology Report from a static, human-readable document into
          structured, machine-readable data that could support real engineering
          decisions. I focused on data engineering and systems integration across
          power, propulsion, communications, avionics, ADCS, thermal, and
          structural subsystems, extracting and normalizing fragmented tables into
          consistent schemas consumable by software matching algorithms. My work
          resolved vendor naming inconsistencies, standardized subsystem
          classifications, and ensured data completeness and traceability,
          enabling ranked, compatibility-based subsystem selection without manual
          research. I collaborated directly with software developers to align data
          models with system requirements, operating under real NASA constraints
          including public-data compliance, accuracy, and auditability.
        </p>
      </Section>

      <Section title="Project Overview">
        <p>
          During Summer 2025, I worked with NASA&apos;s Small Spacecraft Systems
          Virtual Institute to re-engineer how the aerospace industry accesses
          the State-of-the-Art Small Spacecraft Technology Report, NASA&apos;s
          annual catalog of flight-ready spacecraft technologies used by
          universities, startups, and government agencies.
        </p>
        <p>
          The problem was not lack of data, but usability. The report contains
          hundreds of pages of high-value subsystem data, yet it is effectively
          unusable for real engineering decisions. My role focused on converting
          this static document into structured, searchable, and interoperable
          data that could directly support spacecraft design and subsystem
          selection.
        </p>
      </Section>

      <Section title="Problem">
        <p>Mission designers currently have to:</p>
        <ul>
          <li>Manually scan hundreds of pages to compare subsystems</li>
          <li>Interpret inconsistent vendor naming and table structures</li>
          <li>Cross-reference specifications across disconnected sections</li>
        </ul>
        <p>
          This makes subsystem selection slow, error-prone, and inaccessible to
          teams without deep institutional experience.
        </p>
      </Section>

      <Section title="Technical Contribution">
        <p>
          I worked on the Aerospace Subsystem Matching effort, a project
          internally described as a “dating app for space parts.” The goal was
          to allow users to input mission requirements and receive ranked,
          compatibility-scored subsystem options derived directly from NASA’s
          official data.
        </p>
        <ul>
          <li>
            <strong>Focus:</strong> Data engineering and systems integration
          </li>
          <li>
            <strong>Scope:</strong> Power, propulsion, communications, avionics,
            ADCS, thermal, and structural systems
          </li>
          <li>
            <strong>Deliverable:</strong> Machine-readable schemas consumable by
            software matching algorithms
          </li>
        </ul>
      </Section>

      <Section title="What I Did">
        <ul>
          <li>
            Extracted and normalized spacecraft subsystem data across seven
            report chapters, covering all major small satellite subsystems
          </li>
          <li>
            Reorganized fragmented technology tables into structured Excel-based
            schemas, enabling consistent filtering by form factor, maturity,
            vendor, and mission applicability
          </li>
          <li>
            Standardized vendor and subsystem classifications, resolving
            inconsistencies that would otherwise break downstream logic
          </li>
          <li>
            Collaborated directly with software development interns to resolve
            schema mismatches, naming conflicts, and integration issues between
            datasets and the web-based matching system
          </li>
          <li>
            Validated data completeness and accuracy to ensure no qualifying
            vendors or technologies were omitted—critical for algorithmic
            credibility
          </li>
        </ul>
      </Section>

      <Section title="Example Technical Challenge">
        <p>
          Chapters 2-7 used inconsistent vendor naming conventions (i.e., “Astro
          Digital,” “Astro Digital US,” and “Astro Digital Inc.”) across different
          tables. Normalization rules were designed to consolidate entities
          without losing geographic or organizational distinctions, preventing
          duplicate entries that would skew compatibility rankings.
        </p>
      </Section>

      <Section title="Outcome & Impact">
        <ul>
          <li>
            Converted a static, human-readable report into a machine-readable
            infrastructure
          </li>
          <li>
            Enabled rapid comparison of existing spacecraft technologies without
            manual research
          </li>
          <li>
            Established a foundation for tools in supporting universities,
            startups, and government mission designers
          </li>
          <li>
            Improved accessibility to NASA technology data while maintaining
            public-data compliance and full traceability
          </li>
        </ul>
      </Section>

      <Section title="Key Takeaways">
        <h3 className="mt-2 font-semibold">
          Data Structuring and Normalization for Engineering Applications
        </h3>
        <p>
          I developed the ability to convert unstructured, inconsistently
          formatted aerospace data into normalized schemas that support reliable
          filtering, comparison, and algorithmic matching. This required
          balancing technical accuracy with usability so the data could be
          consumed programmatically without losing engineering meaning.
        </p>

        <h3 className="mt-6 font-semibold">
          Systems-Level Thinking Across Spacecraft Subsystems
        </h3>
        <p>
          Working across power, propulsion, communications, avionics, ADCS,
          thermal, and structural systems reinforced architecture-level thinking
          rather than isolated component analysis. I gained an understanding of
          how subsystem constraints interact and how design decisions propagate
          through an entire mission.
        </p>

        <h3 className="mt-6 font-semibold">
          Cross-Functional Collaboration with Software Teams
        </h3>
        <p>
          I collaborated directly with software developers to resolve schema
          mismatches, naming conflicts, and data-model assumptions impacting
          system integration. This required translating aerospace domain
          knowledge into abstractions that software systems could reliably
          process.
        </p>

        <h3 className="mt-6 font-semibold">
          Translating Aerospace Engineering Data into Usable Technical Tools
        </h3>
        <p>
          I learned how to bridge dense engineering documentation and
          decision-support tools engineers can actually use. The work emphasized
          precision, traceability, and design intent over surface-level
          presentation.
        </p>

        <h3 className="mt-6 font-semibold">
          Operating Within Real NASA Constraints
        </h3>
        <p>
          All work was performed under real NASA constraints, including strict
          reliance on publicly available data, full traceability to source
          tables, and zero tolerance for misrepresentation. This reinforced the
          importance of accuracy, documentation discipline, and defensible
          engineering decisions in aerospace environments.
        </p>
      </Section>

      <Section title="Program Context">
        <p>
          This was an unofficial, remote summer internship coordinated through
          Dr. Craig Burkhard at NASA Ames Research Center, involving 14
          Northeastern students working on collaborative aerospace data projects.
        </p>
      </Section>
    </ProjectLayout>
  );
}
