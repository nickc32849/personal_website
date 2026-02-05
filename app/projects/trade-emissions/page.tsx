import ProjectLayout from "../../components/ProjectLayout";

export default function EconResearchPage() {
  return (
    <ProjectLayout
      title="Trade Wars & Environmental Impact"
      subtitle="Undergraduate Research Assistant - Northeastern University London"
      date="May - August 2025"
    >
      <p>
        During my semester at Northeastern's London campus, I joined Professor
        Mazen Diwani's research team in the Economics Department to investigate a
        question at the intersection of trade policy and climate science: when the
        U.S. launched tariffs against China and other major trading partners, did
        the resulting shifts in global supply chains actually make carbon emissions
        worse? The project — formally titled "Trade Wars, BRICS Responses, and the
        Environmental Consequences of Shifting Trade Patterns" — set out to answer
        that using econometric methods, and my job was building the dataset that
        would make the analysis possible.
      </p>

      {/* Uncomment and update src when you have screenshots
      <Image
        src="/projects/trade-emissions/spreadsheet.png"
        alt="Trade Wars dataset in Excel showing country-year observations"
        width={900}
        height={500}
        className="rounded-lg"
      />
      */}

      <h2 className="text-xl font-semibold">My Role</h2>
      <p>
        I collected and organized macroeconomic and environmental data from over a
        dozen sources — the World Bank, IMF, IEA, EDGAR emissions database, WHO
        Air Quality Database, and the World Integrated Trade Solution (WITS),
        among others — and structured everything into a single panel dataset in
        Excel. The final spreadsheet tracked 32 variables across 206 countries
        spanning decades of data, with the core analysis window covering 2015-2021
        to compare pre- and post-trade war periods. Variables ranged from total and
        transport-sector CO2 emissions to PM2.5 air quality indices, renewable
        energy shares, GDP, trade values, tariff exposure rates, and carbon
        intensity breakdowns across seven high-emission sectors including steel,
        chemicals, agriculture, and fossil fuel exports.
      </p>
      <p>
        A big part of the work was tracking down reliable data for each variable
        across every country-year combination, reconciling inconsistencies between
        sources, and structuring the spreadsheet so it could feed directly into the
        difference-in-differences econometric models the research was built around.
        I also compiled trade agreement participation data — RCEP, Belt and Road,
        CPTPP — and calculated trade war exposure metrics using weighted average
        tariff rates from WITS, classifying countries as high or low exposure based
        on whether they fell above or below the median tariff threshold.
      </p>

      <h2 className="text-xl font-semibold">What I Took Away</h2>
      <p>
        This project gave me hands-on experience with large-scale quantitative
        research and showed me how messy real-world data can be — country naming
        conventions differ between databases, time series have gaps, and units
        aren't always consistent. Working through those challenges taught me a lot
        about data integrity and why careful structuring matters long before any
        statistical model gets run. It also deepened my understanding of how trade
        policy, emissions, and economic development interact, which complements
        both my Business Administration minor and my engineering focus on
        sustainability and energy systems.
      </p>
    </ProjectLayout>
  );
}
