import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function NexusInvestmentFundPage() {
  return (
    <ProjectLayout
      title="Nexus Investment Fund: Energy Transfer LP Equity Research"
      subtitle="Junior Analyst &bull; NU London FinTech Society &bull; Spring 2025"
      tags={[
        "Equity Research",
        "Financial Analysis",
        "Valuation",
        "Microsoft Excel",
        "Data Analysis",
        "Public Speaking",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          As a Junior Analyst with the Nexus Investment Fund (Northeastern
          University London FinTech Society), I worked on a four-person team
          conducting equity research on Energy Transfer LP (NYSE: ET), a $52B
          midstream energy infrastructure company operating 125,000+ miles of
          pipeline across the U.S. I contributed to the company overview,
          business model analysis, and financial efficiency metrics. Our team
          produced a full equity report and live investor pitch recommending a
          Long Buy position based on Energy Transfer&apos;s fee-based revenue
          model, scale advantages, and valuation discount relative to peers.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="The Challenge">
        <p>
          Analyst teams were tasked with identifying an undervalued investment
          opportunity and presenting equity research to the fund&apos;s
          leadership. Our team evaluated Energy Transfer across financial
          health, competitive positioning, industry trends, and risk factors to
          build a defensible investment thesis&mdash;all within a compressed
          timeline simulating real investment research conditions.
        </p>
      </Section>

      <Section title="My Contributions">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Company overview:</strong> Researched and wrote sections
            covering Energy Transfer&apos;s business model, revenue streams,
            segment breakdown, core customer base, and geographic presence
            across U.S. producing basins
          </li>
          <li>
            <strong>Financial analysis:</strong> Calculated accounts receivable
            turnover ratios for 2021&ndash;2024 to analyze collection
            efficiency trends, using Yahoo Finance and Energy Transfer&apos;s
            investor relations filings
          </li>
          <li>
            <strong>Live pitch delivery:</strong> Presented the company analysis
            and business model sections of our team&apos;s investor pitch,
            supporting the Long Buy recommendation
          </li>
        </ul>
      </Section>

      <Section title="Key Findings">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            One of the largest midstream networks in the U.S. with 21% market
            share in gas pipeline transportation and dominant Permian Basin
            infrastructure
          </li>
          <li>
            90% of revenue from fee-based contracts, insulating the business
            from commodity price volatility
          </li>
          <li>
            2024 revenue of $82.67B (5.2% YoY growth) with adjusted EBITDA
            growing from $13.0B to $15.5B over 2021&ndash;2024
          </li>
          <li>
            Forward P/E of 10.76 vs. competitor Kinder Morgan at 20.53,
            suggesting potential undervaluation relative to peers
          </li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Equity valuation fundamentals:</strong> Company valuation
            requires examining financial metrics, competitive dynamics, industry
            trends, and macroeconomic conditions simultaneously rather than
            relying on any single indicator
          </li>
          <li>
            <strong>Financial data analysis:</strong> Practical experience
            gathering and interpreting financial statements, calculating
            efficiency ratios, and understanding what those metrics reveal
            about operational performance
          </li>
          <li>
            <strong>Investment communication:</strong> Translating complex
            financial analysis into a clear, persuasive pitch&mdash;balancing
            technical detail with accessibility for the audience
          </li>
          <li>
            <strong>Team-based research:</strong> Dividing a comprehensive
            equity report across four analysts (company overview, industry
            analysis, valuation modeling, risk assessment) and integrating the
            pieces into a cohesive deliverable
          </li>
        </ul>
      </Section>

      <Section title="Project Details">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Organization:</strong> Nexus Investment Fund, NU London
            FinTech Society
          </li>
          <li>
            <strong>Team:</strong> 4 analysts
          </li>
          <li>
            <strong>Company:</strong> Energy Transfer LP (NYSE: ET)
          </li>
          <li>
            <strong>Recommendation:</strong> Long Buy
          </li>
          <li>
            <strong>Deliverables:</strong> Equity report and live investor
            pitch presentation
          </li>
        </ul>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        Completed as a Junior Analyst with the Nexus Investment Fund through
        Northeastern University London&apos;s FinTech Society (Spring 2025).
      </p>
    </ProjectLayout>
  );
}
