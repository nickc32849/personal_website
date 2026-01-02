import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function TradeWarsEmissionsGlobalDataAnalysisPage() {
  return (
    <ProjectLayout
      title="Trade Wars, Emissions, and Global Data Analysis"
      subtitle=""
      tags={[
        "Data Analysis",
        "Econometrics",
        "Research Collaboration",
        "Excel",
        "Statistical Modeling",
        "Data Collection",
        "Causal Inference",
        "Financial Data",
        "Environmental Economics"
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <p>
        Collaborated with an economics professor and two student researchers on a global
        econometric study analyzing how U.S.-initiated trade wars reshaped international trade
        flows and environmental outcomes. Built and validated large-scale datasets spanning all
        countries from 1970 to the present, integrating emissions data, trade distances,
        environmental regulation indices, and macro-financial variables. Supported
        difference-in-differences and Global Vector Autoregression (GVAR) modeling to identify
        causal effects of tariff exposure on emissions and trace how trade shocks propagated
        through global financial markets. The work expanded an initially BRICS-focused study
        into a comprehensive global analysis linking trade policy, supply-chain reconfiguration,
        and environmental spillovers.
      </p>

      {/* Divider between summary and rest of page */}
      <hr className="my-12 border-gray-700" />

      <Section title="The Challenge">
        <p>
          U.S.-initiated trade wars disrupted global supply chains, shifting production and
          transport routes to reroute across countries and sectors. The core question was whether
          these shifts increased carbon emissions by lengthening shipping distances and
          relocating pollution-intensive production toward countries with weaker environmental
          regulations.
        </p>
      </Section>

      <Section title="My Role">
        <p>
          Research Assistant to Dr. Mazen Diwani, collaborating with two other student researchers on a
          global economics research project. Focused on data pipeline development and econometric
          support, building analysis-ready datasets covering all countries from 1970 to the present and
          contributing to difference-in-differences (DiD) and Global Vector Autoregression (GVAR)
          modeling.
        </p>
      </Section>

      <Section title="Technical Contributions">
        <h3 className="font-semibold">Data Pipeline Development</h3>
        <ul className="list-disc pl-5">
          <li>Collaborated on building a global panel dataset (1970–present) spanning all countries</li>
          <li>Compiled historical CO₂ emissions data (total, sectoral, and intensity-based)</li>
          <li>Integrated bilateral trade distances and transport-related emissions proxies</li>
          <li>
            Collected environmental regulation and sustainability indices for cross-country
            comparison
          </li>
          <li>
            Gathered quarterly stock market indices for 30+ countries using Bloomberg and
            Datastream for Global Vector Autoregression (GVAR) modeling
          </li>
          <li>
            Organized financial variables (GDP, interest rates, exchange rates), prioritizing
            quarterly over monthly or annual frequency
          </li>
          <li>
            Structured datasets to support pre-trade war and post-trade war comparisons
            (1970-2017 vs. 2018-2021)
          </li>
        </ul>

        <p className="mt-4">
          This work expanded the project well beyond its original BRICS-only scope into a fully global,
          multi-decade dataset.
        </p>

        <h3 className="font-semibold mt-6">Econometric Analysis</h3>
        <ul className="list-disc pl-5">
          <li>
            Supported difference-in-differences (DiD) models to estimate the causal effect of U.S.
            tariff exposure on emissions
          </li>
          <li>Worked with treatment variables based on U.S. tariff rates by country and sector</li>
          <li>
            Integrated key controls, including GDP per capita, energy consumption, and population
          </li>
          <li>
            Contributed to the GVAR model preparation, analyzing how trade shocks propagated
            through global financial markets
          </li>
        </ul>

        <h3 className="font-semibold mt-6">Research &amp; Literature Review</h3>
        <ul className="list-disc pl-5">
          <li>
            Conducted a literature review on carbon leakage and the Pollution Haven Hypothesis
            (PHH)
          </li>
          <li>
            Evaluated whether trade and production shifted toward countries with weaker
            environmental regulations
          </li>
          <li>
            Analyzed the role of shipping distance in driving transport-related CO₂ emissions from
            rerouted trade flows
          </li>
        </ul>
      </Section>

      <Section title="Research Findings">
        <ul className="list-disc pl-5">
          <li>
            Global emissions increased 0.3-1.8% as production shifted away from U.S.-China corridors
            toward longer, more carbon-intensive routes
          </li>
          <li>
            Trade diversion toward BRICS countries (notably Brazil's agricultural exports and China's
            manufacturing) created measurable environmental spillovers
          </li>
          <li>
            Environmental regulation outcomes varied significantly—some countries (Brazil, China)
            improved performance while others (Russia) lagged
          </li>
        </ul>
      </Section>

      <Section title="Outcome">
        <p>
          This project produced a comprehensive, global analysis linking trade policy to environmental
          outcomes. My work enabled econometric modeling using 50+ years of data across all countries,
          transforming a narrow regional study into a generalizable global framework for analyzing
          trade-environment interactions.
        </p>
      </Section>

      <Section title="Key Takeaways">
        <p>
          Working on a multi-researcher econometric project taught me how to transform complex policy
          questions into testable hypotheses. Building the data pipeline from raw sources to
          analysis-ready datasets showed me the importance of systematic data validation—one
          misaligned time period could invalidate the entire difference-in-differences model.
        </p>
        <p className="mt-4">
          The project reinforced that environmental consequences don't exist in isolation. Trade policy
          decisions trigger cascading effects across supply chains, shipping routes, and regulatory
          environments. Quantifying these relationships requires combining economic theory with rigorous
          data work.
        </p>
      </Section>
    </ProjectLayout>
  );
}
