import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";

export default function TradeEmissionsProjectPage() {
  return (
    <ProjectLayout
      title="Trade Wars, Emissions, and Global Data Analysis"
      subtitle="Research Assistant — Northeastern University London (Economics Department)"
      tags={["Data analysis", "Econometrics", "Difference-in-differences", "GVAR", "Excel"]}
    >
      <Section title="Context">
        <p>
          I assisted research examining how U.S.-initiated trade wars affected global
          trade patterns and environmental outcomes, using cross-country datasets and
          empirical methods.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          Global trade and environmental outcomes are influenced by multiple confounding
          factors. The project required carefully structured datasets and methods to
          isolate policy-driven effects (e.g., trade restrictions) from broader trends.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Collected and organized emissions data, trade distances, and environmental
            regulations to evaluate cross-country impacts.
          </li>
          <li>
            Contributed to econometric modeling, including supporting a
            difference-in-differences analysis and literature review on carbon leakage
            and the Pollution Haven Hypothesis.
          </li>
          <li>
            Compiled and organized financial data for Global Vector Autoregression
            (GVAR) analysis.
          </li>
        </ul>
      </Section>

      <Section title="Tools & Skills">
        <ul className="list-disc space-y-2 pl-5">
          <li>Data cleaning and structuring for analysis</li>
          <li>Quantitative reasoning and causal inference concepts</li>
          <li>Research workflows: documentation, reproducibility, and review</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          Working with large real-world datasets reinforced the importance of careful
          data structure, assumptions, and validation — the same mindset required when
          designing reliable engineering systems.
        </p>
      </Section>
    </ProjectLayout>
  );
}
