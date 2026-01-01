import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NASAPage() {
  return (
    <ProjectLayout
      title="NASA — Small Spacecraft Systems Virtual Institute"
      subtitle="Aerospace Subsystem Matching • Data Engineering & Systems Integration"
    >
      <BackLink href="/projects" label="Back to Projects" />

      {/* Recruiter Skim */}
      <Section title="">
        <p>
          During Summer 2025, I worked with NASA’s Small Spacecraft Systems
          Virtual Institute to transform the State-of-the-Art Small Spacecraft
          Technology Report from a static, human-readable document into
          structured, machine-readable data that could support real engineering
          decisions. I focused on data engineering and systems integration across
          power, propulsion, communications, avionics, ADCS, thermal, and
          structural subsystems, extracting and normalizing fragmented tables
          into consistent schemas consumable by software matching algorithms.
          My work resolved vendor naming inconsistencies, standardized subsystem
          classifications, and ensured data completeness and traceability,
          enabling ranked, compatibility-based subsystem selection without
          manual research. I collaborated directly with software developers to
          align data models with system requirements, operating under real NASA
          constraints including public-data compliance, accuracy, and
          auditability.
        </p>
      </Section>

      <hr className="my-10 border-neutral-700" />

      {/* Project Overview */}
      <Section title="Project Overview">
        <p>
          During Summer 2025, I worked with NASA&apos;s Small Spacecraft Systems
          Virtual Institute to re-engineer how the aerospace industry accesses
          the State-of-the-Art Small Spacecraft Technology Report—NASA&apos;s
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

      {/* Problem */}
      <Section title="Problem">
        <p>Mission designers currently must:</p>
        <ul>
          <li>Manually scan hundreds of pages to compare subsystems</li>
          <li>Interpret inconsistent vendor naming and table structures</li>
          <li>Cross-reference specifications scattered across disconnected chapters</li>
        </ul>
        <p>
          This makes subsystem selection slow, error-prone, and inaccessible to
          teams without deep institutional expertise.
        </p>
      </Section>

      {/* Technical Contribution */}
      <Section title="Technical Contribution">
        <p>
          I worked on the Aerospace Subsystem Matching effort—internally described
          as a “dating app for space parts.” The goal was to allow users to input
          mission requirements and receive ranked, compatibility-scored
          subsystem options derived directly from NASA’s official data.
        </p>
        <ul>
          <li><strong>Focus:</strong> Data engineering and systems integration</li>
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

      {/* What I Did */}
      <Section title="What I Did">
        <ul>
          <li>
            Extracted and normalized spacecraft subsystem data across seven
            report chapters, covering all major SmallSat subsystems
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
            schema mismatches, naming conflicts, and integration issues with the
            web-based matching system
          </li>
          <li>
            Validated data completeness and accuracy to ensure no qualifying
            vendors or technologies were omitted—critical for algorithmic
            credibility
          </li>
        </ul>
      </Section>

      {/* Example Technical Challenge */}
      <Section title="Example Technical Challenge">
        <p>
          Chapters 2–7 used inconsistent vendor naming conventions (e.g.
          “Astro Digital,” “Astro Digital US,” and “Astro Digital Inc.”) across
          different tables. I designed normalization rules to consolidate
          entities while preserving organizational and geographic distinctions,
          preventing duplicate records that would skew compatibility rankings.
        </p>
      </Section>

      {/* Outcome & Impact */}
      <Section title="Outcome & Impact">
        <ul>
          <li>
            Converted a static, human-readable report into machine-readable
            infrastructure
          </li>
          <li>
            Enabled rapid, programmatic comparison of existing spacecraft
            technologies without manual research
          </li>
          <li>
            Established a foundation for tools supporting universities, startups,
            and government mission designers
          </li>
          <li>
            Improved accessibility to NASA technology data while maintaining
            public-data compliance and full traceability
          </li>
        </ul>
      </Section>

      {/* Key Takeaways */}
      <Section title="Key Takeaways">
        <p>
          <strong>Data Structuring and Normalization for Engineering Applications</strong>
          <br />
          I developed the ability to convert unstructured, inconsistently
          formatted aerospace data into normalized schemas that support reliable
          filtering, comparison, and algorithmic matching.
        </p>

        <p>
          <strong>Systems-Level Thinking Across Spacecraft Subsystems</strong>
          <br />
          Working across power, propulsion, communications, avionics, ADCS,
          thermal, and structural systems reinforced architecture-level thinking
          rather than isolated component analysis.
        </p>

        <p>
          <strong>Cross-Functional Collaboration with Software Teams</strong>
          <br />
          I collaborated directly with software developers to resolve schema
          mismatches, naming conflicts, and data-model assumptions impacting
          system integration.
        </p>

        <p>
          <strong>Translating Aerospace Engineering Data into Usable Technical Tools</strong>
          <br />
          I learned how to bridge dense engineering documentation and
          decision-support tools engineers can actually use.
        </p>

        <p>
          <strong>Operating Within Real NASA Constraints</strong>
          <br />
          All work was performed under real NASA constraints, including strict
          reliance on publicly available data, full traceability to source
          tables, and zero tolerance for misrepresentation.
        </p>

        <hr className="my-10 border-neutral-700" />

        <p className="italic">
          This was an unofficial, remote summer internship coordinated at NASA
          Ames Research Center, involving 14 Northeastern students working on
          collaborative aerospace data projects.
        </p>
      </Section>
    </ProjectLayout>
  );
}
