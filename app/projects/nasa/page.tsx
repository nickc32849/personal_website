import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";

export default function NasaProjectPage() {
  return (
    <ProjectLayout
      title="NASA Small Satellite Subsystem Matching Platform"
      subtitle="Internship project supporting access to data from NASA’s annual State-of-the-Art Small Satellite Report."
      tags={["Data structuring", "Platform integration", "Collaboration", "Retrieval design"]}
    >
      <Section title="Context">
        <p>
          I worked on an aerospace subsystem matching team to support universities,
          startups, and government partners in finding and using spacecraft technology
          data more efficiently.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          The underlying datasets from the Small Satellite Report were complex and not
          organized for quick retrieval or easy integration into a software platform.
          This made it harder for external partners to access the information they
          needed.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Translated and reorganized complex spacecraft technology datasets into
            streamlined Excel-based retrieval categories to improve accessibility.
          </li>
          <li>
            Designed structures that made it easier to search, compare, and retrieve
            subsystem information.
          </li>
          <li>
            Partnered with software development interns to resolve compatibility issues
            and ensure the data structure integrated cleanly with the platform.
          </li>
        </ul>
      </Section>

      <Section title="Tools & Skills">
        <ul className="list-disc space-y-2 pl-5">
          <li>Data organization & categorization (information architecture)</li>
          <li>Excel workflows for structured retrieval</li>
          <li>Cross-team technical communication</li>
          <li>Integration mindset: making data “fit” downstream systems</li>
        </ul>
      </Section>

      <Section title="Outcome">
        <p>
          Improved usability of the retrieval structure and helped ensure the dataset
          could be integrated without breaking compatibility across the platform.
        </p>
      </Section>

      <Section title="What I Learned">
        <p>
          Data structure decisions directly shape usability and integration success.
          Even when the data is correct, a system can fail if the format doesn’t match
          how downstream tools and users actually work.
        </p>
      </Section>
    </ProjectLayout>
  );
}
