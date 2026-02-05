import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NASAPage() {
  return (
    <ProjectLayout
      title="NASA &mdash; Small Spacecraft Systems Virtual Institute"
      subtitle="Data Extraction &amp; Systems Integration &bull; Summer 2025"
      tags={[
        "NASA",
        "Aerospace Systems",
        "Small Satellites",
        "Microsoft Excel",
        "Data Analysis",
        "Technical Documentation",
        "Cross-Functional Collaboration",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          During Summer 2025, I worked with NASA&apos;s Small Spacecraft Systems
          Virtual Institute (S3VI) to transform the 461-page State of the Art
          of Small Spacecraft Technology report from a static document into
          structured, query-ready data. I extracted and organized technical
          specifications from 65+ vendor tables across seven spacecraft
          subsystem categories, cataloging them into Excel-based schemas that
          the software development team could consume for a part-matching web
          application. I collaborated with a cross-functional team of 15 interns
          spanning software, data, and business roles.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="Project Overview">
        <p>
          NASA&apos;s State of the Art report is the aerospace industry&apos;s
          primary catalog of flight-ready spacecraft technologies, used by
          universities, startups, and government agencies for mission planning.
          The problem was not a lack of data but usability&mdash;hundreds of
          pages of high-value subsystem specifications spread across
          inconsistent table formats, making real engineering comparisons slow
          and error-prone.
        </p>
        <p className="mt-4">
          The S3VI team was building a subsystem matching platform&mdash;
          internally described as a &ldquo;dating app for space
          parts&rdquo;&mdash;that would let users input mission requirements and
          receive ranked, compatibility-scored component options. My role was
          preparing the data layer that made this possible.
        </p>
      </Section>

      <Section title="What I Did">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Extracted and cataloged spacecraft subsystem data across seven
            report chapters covering power systems, propulsion, communications,
            avionics, ADCS, thermal, and structural systems
          </li>
          <li>
            Reorganized fragmented vendor tables into structured Excel schemas,
            enabling consistent filtering by form factor, technology maturity,
            vendor, and mission applicability
          </li>
          <li>
            Resolved vendor naming inconsistencies across chapters (e.g.
            &ldquo;Astro Digital,&rdquo; &ldquo;Astro Digital US,&rdquo; and
            &ldquo;Astro Digital Inc.&rdquo;) by designing normalization rules
            that consolidated entities without losing organizational distinctions
          </li>
          <li>
            Validated data completeness and accuracy to ensure no qualifying
            vendors or technologies were omitted&mdash;critical for algorithmic
            credibility downstream
          </li>
          <li>
            Collaborated directly with software development interns to align
            data models with system requirements, resolving schema mismatches
            and naming conflicts
          </li>
        </ul>
      </Section>

      <Section title="Outcome">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Converted a static, human-readable report into structured data
            infrastructure consumable by matching algorithms
          </li>
          <li>
            Enabled programmatic comparison of spacecraft technologies without
            manual cross-referencing
          </li>
          <li>
            Established a data foundation for tools supporting university,
            startup, and government mission designers
          </li>
        </ul>
      </Section>

      <Section title="Key Takeaways">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Data structuring for engineering applications:</strong>{" "}
            Converting unstructured aerospace documentation into normalized,
            reliable schemas
          </li>
          <li>
            <strong>Systems-level thinking:</strong> Working across all major
            spacecraft subsystems reinforced architecture-level reasoning rather
            than isolated component analysis
          </li>
          <li>
            <strong>Cross-functional collaboration:</strong> Bridging data work
            and software development, translating between what the report
            contained and what the application needed
          </li>
          <li>
            <strong>Operating under real constraints:</strong> Strict reliance
            on publicly available data, full traceability to source tables, and
            zero tolerance for misrepresentation
          </li>
        </ul>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic">
        Remote summer internship coordinated through NASA Ames Research Center,
        involving 15 Northeastern students working on collaborative aerospace
        data projects for the Small Spacecraft Systems Virtual Institute.
      </p>
    </ProjectLayout>
  );
}
