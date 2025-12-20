import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function TradeEmissionsProjectPage() {
  return (
    <ProjectLayout
      title="Trade Wars, Emissions, and Global Data Analysis"
      subtitle="Research Assistant — Northeastern University London (Economics Department)"
      tags={[
        "Data analysis",
        "Econometrics",
        "Difference-in-differences",
        "GVAR",
        "Data cleaning",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Context">
        <p>
          I assisted research examining how U.S.-initiated trade wars affected global
          trade patterns and environmental outcomes using cross-country datasets.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          Real-world economic data is messy and confounded, requiring careful structure
          and assumptions to isolate causal effects.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Collected and organized emissions, trade distance, and regulatory datasets.
          </li>
          <li>
            Supported econometric modeling, including difference-in-differences
            analysis.
          </li>
          <li>
            Compiled financial data for Global Vector Autoregression (GVAR) workflows.
          </li>
        </ul>
      </Section>

      <Section title="Tools & Skills">
        <ul className="list-disc space-y-2 pl-5">
          <li>Data cleaning and structuring</li>
          <li>Quantitative reasoning and causal inference</li>
          <li>Reproducible research practices</li>
        </ul>
      </Section>

      <Section title="Artifacts">
        <ul className="list-disc space-y-2 pl-5">
          <li>Method summaries (DiD and GVAR)</li>
          <li>Research notes available upon request</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          Reliable conclusions require clean interfaces between data, models, and
          interpretation — just like engineering systems.
        </p>
      </Section>
    </ProjectLayout>
  );
}
