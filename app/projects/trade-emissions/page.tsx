import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function TradeWarsEmissionsGlobalDataAnalysisPage() {
  return (
    <ProjectLayout
      title="Trade Wars, Emissions, and Global Data Analysis"
      subtitle="Undergraduate Research Assistant &bull; Northeastern University London &bull; Summer 2025"
      tags={[
        "Data Analysis",
        "Econometrics",
        "Excel",
        "Stata",
        "Statistical Modeling",
        "Research",
        "Large-Scale Datasets",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          I served as an undergraduate research assistant to Dr. Mazen Diwani at
          Northeastern University London, working with two other student
          researchers on a global econometric study analyzing how U.S.-initiated
          trade wars reshaped international trade flows and environmental
          outcomes. I built and validated large-scale datasets spanning all
          countries from 1970 to present, integrating emissions data, trade
          distances, environmental regulation indices, and macro-financial
          variables. The work supported difference-in-differences and Global
          Vector Autoregression (GVAR) modeling to identify causal effects of
          tariff exposure on carbon emissions.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="The Research Question">
        <p>
          When U.S.-initiated trade wars disrupted global supply chains,
          production and shipping routes shifted across countries and sectors.
          The core question was whether these shifts increased carbon emissions
          by lengthening shipping distances and relocating pollution-intensive
          production toward countries with weaker environmental regulations.
        </p>
      </Section>

      <Section title="My Role">
        <p>
          I focused on data pipeline development and econometric
          support&mdash;building the analysis-ready datasets that made the
          modeling possible.
        </p>
      </Section>

      <Section title="What I Did">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Built a global panel dataset (1970&ndash;present) spanning all
            countries, compiling historical CO&#8322; emissions data (total,
            sectoral, and intensity-based)
          </li>
          <li>
            Integrated bilateral trade distances, transport-related emissions
            proxies, and environmental regulation indices for cross-country
            comparison
          </li>
          <li>
            Gathered quarterly stock market indices for 30+ countries using
            Bloomberg and Datastream for the GVAR modeling component
          </li>
          <li>
            Organized financial variables (GDP, interest rates, exchange rates),
            prioritizing quarterly frequency for model consistency
          </li>
          <li>
            Structured all datasets to support pre-trade-war vs.
            post-trade-war comparisons (1970&ndash;2017 vs. 2018&ndash;2021)
          </li>
          <li>
            Supported difference-in-differences models estimating the causal
            effect of U.S. tariff exposure on emissions, integrating controls
            for GDP per capita, energy consumption, and population
          </li>
          <li>
            Expanded the project from its original BRICS-only scope into a
            fully global, multi-decade analysis
          </li>
        </ul>
      </Section>

      <Section title="Key Findings">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Global emissions increased 0.3&ndash;1.8% as production shifted
            away from U.S.-China corridors toward longer, more
            carbon-intensive routes
          </li>
          <li>
            Trade diversion toward BRICS countries created measurable
            environmental spillovers, particularly in Brazil&apos;s agricultural
            exports and China&apos;s manufacturing
          </li>
          <li>
            Environmental regulation outcomes varied
            significantly&mdash;some countries improved performance while
            others lagged
          </li>
        </ul>
      </Section>

      <Section title="Key Takeaways">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Building reliable data pipelines from raw sources to
            analysis-ready datasets&mdash;one misaligned time period could
            invalidate the entire difference-in-differences model
          </li>
          <li>
            Working with datasets containing 50,000+ observations across
            multiple decades and all countries
          </li>
          <li>
            Translating complex policy questions into testable hypotheses with
            rigorous quantitative methods
          </li>
          <li>
            Collaborating within a multi-researcher team where each
            person&apos;s data work directly affected downstream modeling
          </li>
        </ul>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        Undergraduate research conducted at Northeastern University London under
        Dr. Mazen Diwani, supporting a peer-reviewed publication on carbon
        leakage and trade policy.
      </p>
    </ProjectLayout>
  );
}
