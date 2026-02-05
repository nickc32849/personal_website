import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NASAPage() {
  return (
    <ProjectLayout
      title="NASA &mdash; Small Spacecraft Systems Virtual Institute"
      subtitle="Data Extraction &amp; Spacecraft Subsystem Analysis &bull; Summer 2025"
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
          During Summer 2025, I worked with NASA&apos;s Small Spacecraft
          Systems Virtual Institute (S3VI) at the Ames Research Center under
          Dr. Craig Burkhard, Deputy Director of S3VI. Our team of 15
          Northeastern interns was tasked with transforming NASA&apos;s 461-page{" "}
          <em>State of the Art of Small Spacecraft Technology</em> report from a
          static reference document into structured, query-ready data&mdash;the
          foundation for an interactive tool that would let mission designers
          search, filter, and compare spacecraft components in seconds instead of
          hours. My role focused on extracting, validating, and structuring the
          raw subsystem data that would feed this system.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="The Challenge">
        <p>
          NASA&apos;s <em>State of the Art</em> report is the aerospace
          industry&apos;s primary catalog of flight-ready small spacecraft
          technologies. Universities, commercial startups, and government
          agencies worldwide rely on it for mission planning. The problem was
          not a lack of data&mdash;it was usability. Hundreds of pages of vendor
          specifications were spread across inconsistent table formats with no
          centralized way to search, filter, or compare components. A mission
          designer looking for a compatible reaction wheel or power management
          system had to manually cross-reference dozens of tables across
          multiple chapters, a process that was slow, error-prone, and
          inaccessible to teams without deep institutional knowledge.
        </p>
        <p className="mt-4">
          The S3VI team set out to solve this by building what we internally
          called a &ldquo;dating app for space parts&rdquo;&mdash;a web
          platform where users could input their mission parameters and receive
          ranked, compatibility-scored component matches. Before any of that
          could happen, every vendor table in the report needed to be identified,
          extracted, validated, and structured into a database-ready format.
          That was my job.
        </p>
      </Section>

      <Section title="What I Did">
        <p>
          I was assigned pages 1 through 66 of the report, covering Chapters 2
          and 3&mdash;the hosted orbital service providers, complete small
          spacecraft platforms (from PocketQubes through ESPA-class vehicles),
          solar cells, solar arrays, battery packs, solid-state batteries, and
          power management and distribution systems (PMAD). My core task was to
          go through every table in these chapters and determine which ones were
          actual vendor/manufacturer tables with component specifications versus
          explanation or comparison tables that were not relevant to the
          database. This required careful judgment&mdash;some tables compared
          technologies conceptually while others listed specific products with
          measurable specs, and the distinction was not always obvious.
        </p>
        <p className="mt-4">
          For each qualifying vendor table, I cataloged the table title,
          number, and page range, then extracted the data into structured Excel
          schemas. This involved reorganizing fragmented information into
          consistent formats that could be filtered by form factor, vendor,
          technology maturity, and mission applicability. I resolved naming
          inconsistencies where the same organization appeared under different
          names across chapters, and I validated completeness to ensure no
          qualifying vendors or technologies were missed&mdash;a critical
          requirement since the database&apos;s credibility depended on
          comprehensive coverage.
        </p>
        <p className="mt-4">
          Beyond my assigned pages, I also contributed to the team&apos;s
          broader analysis of how the data should be cleaned for database
          ingestion. This included recommendations on removing reference
          columns that were only meaningful in the context of the original
          report, extracting headquarters information embedded in superscript
          text, and transforming qualitative fields (like mission heritage) into
          structured yes/no values that a matching algorithm could process. The
          data I prepared was handed off to the software team, who converted it
          from Excel to CSV to JSON to SQL for the web application&apos;s
          backend.
        </p>
      </Section>

      <Section title="What I Learned">
        <p>
          Working across the report required developing a working understanding
          of every major spacecraft subsystem. Through the background materials
          and the data itself, I studied how the Electrical Power System (EPS)
          generates, stores, and distributes power through solar arrays and
          Li-ion batteries; how Attitude Determination and Control Systems
          (ADCS) use star trackers, reaction wheels, and magnetorquers to
          maintain orientation; how propulsion systems range from simple cold gas
          thrusters to advanced Hall-effect electric propulsion; and how Command
          and Data Handling (CDH) acts as the central nervous system
          coordinating all subsystems. This systems-level perspective&mdash;
          understanding how components interact rather than viewing them in
          isolation&mdash;was one of the most valuable outcomes of the
          internship.
        </p>
        <p className="mt-4">
          The experience also reinforced the importance of data integrity in
          engineering contexts. Every entry I extracted had to be traceable back
          to its source table and page number, with zero tolerance for
          misrepresentation. Working with a cross-functional team of 15 interns
          spanning software development, data analysis, and business
          roles&mdash;coordinated remotely across time zones&mdash;taught me
          how to communicate technical requirements clearly and align my
          deliverables with what downstream systems actually needed.
        </p>
      </Section>

      <Section title="Outcome">
        <p>
          The structured data I extracted became part of the foundation for a
          searchable spacecraft component database, enabling programmatic
          comparison of technologies that previously required hours of manual
          cross-referencing. The vendor directory I helped build covered 65+
          tables spanning 13 chapters and seven subsystem categories: power,
          propulsion, guidance/navigation/control, structures, thermal,
          avionics, and communications. This data infrastructure now supports
          tools designed to help university research teams, commercial startups,
          and international space agencies make faster, more informed decisions
          during mission planning.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic">
        Summer 2025 internship at NASA Ames Research Center under Dr. Craig
        Burkhard, Deputy Director of the Small Spacecraft Systems Virtual
        Institute (S3VI). Remote collaboration with 15 Northeastern University
        students on aerospace data infrastructure for spacecraft technology
        matching.
      </p>
    </ProjectLayout>
  );
}
