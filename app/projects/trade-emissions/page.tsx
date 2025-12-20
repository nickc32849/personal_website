import Link from "next/link";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";

export default function TradeEmissionsProjectPage() {
  return (
    <ProjectLayout
      title="Trade Wars, Emissions, and Global Data Analysis"
      subtitle="Research Assistant — Northeastern University London (Economics Department)"
      tags={["Data analysis", "Econometrics", "DiD", "GVAR", "Data organization"]}
    >
      {/* Nice UX: a simple “back” link */}
      <div>
        <Link href="/projects" className="text-sm underline">
          ← Back to Projects
        </Link>
      </div>

      <Section title="Context">
        <p>
          I assisted research examining how U.S.-initiated trade wars affected global
          trade patterns and environmental outcomes, using cross-country datasets and
          empirical methods.
        </p>
      </Section>

      <Section title="Problem">
        <p>
          The analysis required structuring messy real-world datasets and using methods
          designed to isolate policy-driven effects from broader global trends.
        </p>
      </Section>

      <Section title="My Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Collected and organized emissions data, trade distances, and environmental
            regulations to evaluate cross-country impacts.
          </li>
          <li>
            Contributed to econometric modeling support, including difference-in-differences
            (DiD), and assisted a literature review on carbon leakage and the Pollution Haven
            Hypothesis.
          </li>
          <li>
            Compiled and organized financial data for Global Vector Autoregression (GVAR)
            analysis workflows.
          </li>
        </ul>
      </Section>

      <Section title="Tools & Skills">
        <ul className="list-disc space-y-2 pl-5">
          <li>Data cleaning and structure design for analysis</li>
          <li>Quantitative reasoning and causal inference concepts</li>
          <li>Documentation and reproducible research habits</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          Real outcomes depend heavily on correct assumptions and clean interfaces between
          data, models, and interpretation — the same mindset I apply to engineering systems.
        </p>
      </Section>
    </ProjectLayout>
  );
}
