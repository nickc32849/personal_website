import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NexusInvestmentFundPage() {
  return (
    <ProjectLayout
      title="Nexus Investment Fund: Energy Transfer LP Equity Research"
      subtitle="Junior Analyst • Spring 2025 • Northeastern University London FinTech Society"
      tags={[
        "Nexus Investment Fund",
        "Equity Research",
        "Financial Analysis",
        "Valuation",
        "Energy",
        "Pitching",
        "Team Project",
      ]}
    >
      <BackLink href="/projects" label="Back to Projects" />

      <Section title="Recruiter Skim">
        <p>
          Junior Analyst with the Nexus Investment Fund (Northeastern University
          London FinTech Society), where I worked on a four-person team conducting
          equity research on Energy Transfer LP (NYSE: ET). I contributed to company
          fundamentals, business model analysis, and financial efficiency metrics,
          including accounts receivable turnover (2021–2024), using Yahoo Finance
          and company filings. Our team produced a full equity report and live
          investor pitch recommending a Long Buy based on Energy Transfer’s
          fee-based revenue model, scale advantages, and valuation relative to
          peers.
        </p>
      </Section>

      <Section title="Overview">
        <p>
          As a Junior Analyst at Northeastern University London's Nexus Investment
          Fund, I collaborated on a four-person team to research and pitch Energy
          Transfer LP, a midstream energy company operating over 125,000 miles of
          pipelines across the U.S. The project entailed a written equity report and
          an investment pitch recommending a "Long Buy," based on the company's
          market leadership, stable fee-based revenue model, and strategic
          positioning in the Permian Basin.
        </p>
      </Section>

      <Section title="The Challenge">
        <h3 style={{ marginTop: 0 }}>Problem</h3>
        <p>
          Analyst teams were tasked with identifying an undervalued investment
          opportunity and presenting equity research to the fund's leaders. Our
          team evaluated Energy Transfer LP across multiple factors, including
          financial health, competitive positioning, industry trends, and risks, to
          determine whether the stock represented a worthy investment.
        </p>

        <h3>Constraints</h3>
        <ul>
          <li>
            Limited timeframe simulating realistic investment research conditions
          </li>
          <li>Four-person team with mixed finance experience levels</li>
          <li>
            Required professional-quality deliverables: a detailed equity report and
            investor pitch presentation
          </li>
          <li>
            Required a clear, defensible investment thesis backed by quantitative and
            qualitative analysis
          </li>
        </ul>
      </Section>

      <Section title="My Role & Contributions">
        <p>I was responsible for sections of the Company Overview, including:</p>

        <h3 style={{ marginTop: 0 }}>Basic Company Details</h3>
        <ul>
          <li>Name, ticker, market capitalization, and geographical presence</li>
          <li>Industry classification and sector positioning</li>
        </ul>

        <h3>Business Description</h3>
        <ul>
          <li>
            Primary products and services (pipeline transportation, storage,
            terminalling for natural gas, crude oil, NGLs, and refined products)
          </li>
          <li>Revenue streams and segment breakdown</li>
          <li>Core customer base and end markets</li>
        </ul>

        <h3>Financial Analysis</h3>
        <ul>
          <li>
            Calculated the accounts receivable turnover ratio for 2021-2024,
            analyzing collection efficiency trends
          </li>
          <li>
            Gathered financial data from Yahoo Finance and Energy Transfer's
            investor relations materials
          </li>
        </ul>

        <h3>Presentation</h3>
        <ul>
          <li>
            Delivered portions of our team's pitch to the fund’s leaders, explaining
            our company analysis and supporting our Long Buy recommendation
          </li>
        </ul>
      </Section>

      <Section title="Key Findings">
        <h3 style={{ marginTop: 0 }}>Market Position</h3>
        <ul>
          <li>
            Operates one of the largest midstream networks in the U.S., with 21%
            market share in gas pipeline transportation
          </li>
          <li>
            Strategic presence across all major U.S. producing basins, particularly
            dominant infrastructure in the Permian Basin
          </li>
        </ul>

        <h3>Financial Stability</h3>
        <ul>
          <li>
            90% of revenue from fee-based contracts, providing insulation from
            commodity price volatility
          </li>
          <li>2024 revenue of $82.67B (5.2% YoY growth)</li>
          <li>Adjusted EBITDA growth from $13.0B (2021) to $15.5B (2024)</li>
          <li>9% distribution yield with consistent quarterly increases</li>
        </ul>

        <h3>Valuation</h3>
        <ul>
          <li>
            Forward P/E of 10.76 compared to competitor Kinder Morgan's 20.53
          </li>
          <li>
            Enterprise Value/Revenue ratio of 1.52, indicating potential undervaluation
            relative to peers
          </li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <h3 style={{ marginTop: 0 }}>Equity Valuation Fundamentals</h3>
        <p>
          Understanding that company valuation requires examining multiple factors
          simultaneously, including financial metrics, competitive dynamics, industry
          trends, management quality, and macroeconomic conditions, rather than
          relying on just one indicator.
        </p>

        <h3>Financial Data Analysis</h3>
        <p>
          Practical experience gathering and interpreting financial statements,
          calculating ratios like accounts receivable turnover, and understanding what
          these metrics show about operational efficiency.
        </p>

        <h3>Cross-Functional Collaboration</h3>
        <p>
          Working with teammates, each responsible for different sections (industry
          analysis, valuation modeling, risk assessment), taught me how professional
          equity research teams divide and integrate their work.
        </p>

        <h3>Investment Communication</h3>
        <p>
          Translating complex financial analysis into a clear, persuasive pitch format;
          learning to balance technical detail with accessibility for the audience.
        </p>

        <h3>Research Methodology</h3>
        <p>
          Developing systematic approaches to company research, starting with publicly
          available sources (SEC filings, earnings calls, industry reports) and
          building a comprehensive picture piece by piece.
        </p>
      </Section>

      <Section title="Project Details">
        <ul>
          <li>
            <strong>Organization</strong> Nexus Investment Fund, Northeastern University
            London FinTech Society
          </li>
          <li>
            <strong>Role</strong> Junior Analyst
          </li>
          <li>
            <strong>Team Size</strong> 4 analysts
          </li>
          <li>
            <strong>Timeline</strong> Spring 2025
          </li>
          <li>
            <strong>Company Analyzed</strong> Energy Transfer LP (NYSE: ET)
          </li>
          <li>
            <strong>Recommendation</strong> Long Buy
          </li>
          <li>
            <strong>Deliverables</strong> Equity report, investor pitch presentation
          </li>
        </ul>
      </Section>

      <Section title="Tools & Resources Used">
        <ul>
          <li>Yahoo Finance (financial data, ratios, historical performance)</li>
          <li>
            Energy Transfer investor relations materials (10-K filings, earnings reports)
          </li>
          <li>Company website and press releases</li>
          <li>Industry research reports</li>
        </ul>
      </Section>
    </ProjectLayout>
  );
}
