import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";
import Image from "next/image";

export default function NASAPage() {
  return (
    <ProjectLayout
      title="NASA &mdash; Small Spacecraft Systems Virtual Institute"
      subtitle="Data Extraction &amp; Spacecraft Subsystem Analysis &bull; Summer 2025"
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      <Section title="">
        <p>
          During Summer 2025, I interned with NASA&apos;s Small Spacecraft
          Systems Virtual Institute (S3VI) at the Ames Research Center under
          Dr. Craig Burkhard. Our team of 15 Northeastern interns was building
          what we called a &ldquo;dating app for space parts&rdquo;&mdash;a web
          platform that would let mission designers input their requirements and
          get matched with compatible spacecraft components, ranked by
          compatibility. The data behind it all came from NASA&apos;s 461-page{" "}
          <em>State of the Art of Small Spacecraft Technology</em> report, which
          catalogs flight-ready technologies across every major subsystem but
          had no centralized way to search or compare them.
        </p>
      </Section>

      {/* TODO: Replace src with your actual image paths */}
      {/*
      <div className="my-8">
        <Image
          src="/images/nasa/soa-report.jpg"
          alt="NASA State of the Art of Small Spacecraft Technology report"
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>
      */}

      <hr className="my-12 border-gray-700" />

      <Section title="My Role">
        <p>
          I was assigned pages 1 through 66 of the report, covering spacecraft
          platforms ranging from PocketQubes to ESPA-class vehicles, plus power
          subsystems including solar cells, battery packs, and power management
          and distribution systems. My job was to go through every table in
          these chapters and determine which ones were actual vendor tables with
          product specifications versus explanation or comparison
          tables&mdash;a distinction that was not always obvious and required
          careful judgment. For each qualifying table, I extracted the data into
          structured Excel schemas that could be filtered by form factor,
          vendor, technology maturity, and mission applicability.
        </p>
        <p className="mt-4">
          I also resolved naming inconsistencies where the same organization
          appeared under different names across chapters, validated completeness
          to ensure no vendors were missed, and contributed recommendations on
          cleaning the data for database ingestion&mdash;things like removing
          reference columns, extracting headquarters information from
          superscript text, and transforming qualitative fields into structured
          values a matching algorithm could process. The data I prepared was
          handed off to the software team, who converted it from Excel to CSV
          to JSON to SQL for the web application&apos;s backend.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="What I Took Away">
        <p>
          Working across the report gave me a working understanding of every
          major spacecraft subsystem&mdash;how EPS generates and distributes
          power, how ADCS uses star trackers and reaction wheels to maintain
          orientation, how propulsion ranges from cold gas thrusters to
          Hall-effect drives, and how CDH coordinates it all. That systems-level
          perspective, combined with the discipline of traceable, accurate data
          extraction in an engineering context, was the most valuable part of
          the experience. The structured data I helped build now supports tools
          designed to help universities, startups, and international space
          agencies make faster decisions during mission planning.
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
