import ProjectLayout from "../../components/ProjectLayout";

export default function SustainaFillPage() {
  return (
    <ProjectLayout
      title="SustainaFill"
      subtitle="Husky Startup Challenge - Northeastern University Oakland - 2nd Place"
      date="Fall 2024"
    >
      <p>
        SustainaFill is a campus sustainability platform concept I developed and
        pitched at Northeastern University Oakland's Husky Startup Challenge,
        where it placed second out of over 15 competing teams with a score of
        37/50. The project was entirely business strategy — problem definition,
        customer research, market analysis, revenue modeling, and scalability
        planning — not product development. No code was written. I built the
        full business case from scratch, including market sizing across 4,000+
        U.S. universities, tiered B2B pricing models, customer personas, cost
        structure breakdowns, and five-year profitability projections.
      </p>

      {/* Uncomment when you have pitch deck screenshots
      <Image
        src="/projects/sustainafill/solution-slide.png"
        alt="SustainaFill pitch deck solution overview"
        width={1200}
        height={800}
        className="rounded-lg border"
      />
      */}

      <h2 className="text-xl font-semibold">The Problem</h2>
      <p>
        Students want to use refillable water bottles, but they often don't know
        where campus refill stations are. This gap between available
        infrastructure and student awareness leads to over three million
        single-use plastic bottles consumed annually on a typical campus, with
        80% ending up as litter. The disconnect exists even at universities that
        have already invested in the infrastructure — at Villanova, disposable
        bottle usage remained high despite available alternatives, and at Brown,
        600 freshmen lacked nearby refill stations entirely. On the other hand,
        the data showed that when access is convenient, behavior changes: 87% of
        students at UC Davis preferred refill stations over traditional
        fountains, and a single refill station at FSU's library saved over
        215,000 disposable bottles from landfills.
      </p>

      <h2 className="text-xl font-semibold">The Solution</h2>
      <p>
        SustainaFill is a proposed mobile app that bridges this awareness gap
        with GPS-based refill station mapping, hydration reminders, nearby
        station alerts, and integration with campus ID systems. The key
        differentiator from existing solutions like the Tap app — which already
        offers station finding and hydration tracking — is SustainaFill's
        campus-specific focus: indoor navigation for building interiors,
        integration with university administrative systems, and a data analytics
        dashboard that gives administrators usage insights to inform where new
        stations should be placed. The platform creates value for multiple
        stakeholders: students gain convenience and save money, universities gain
        utilization data and sustainability metrics, and environmental impact
        improves as a natural byproduct.
      </p>

      <h2 className="text-xl font-semibold">Business Model</h2>
      <p>
        I designed a three-stream revenue model to align incentives across
        stakeholders. University partnerships would pay tiered annual licensing
        fees based on student population — $5,000/year for small colleges under
        5,000 students, $10,000 for mid-size universities, and $15,000 for large
        institutions above 15,000 students, with additional fees for
        customization and advanced analytics. Sponsored partnerships would
        generate revenue through eco-friendly brands running campus
        sustainability challenges, with a 20% revenue share on redeemed rewards.
        And aggregated, anonymized usage data could be packaged as reports sold
        to sustainability researchers and policymakers at $5,000 per report.
      </p>
      <p>
        On the cost side, initial app development was estimated at $100,000 with
        $5,000/month for ongoing maintenance, $2,000/month for cloud hosting,
        $15,000/month for marketing and campus ambassador programs, and roughly
        $10,500/month in administrative and support costs. The five-year
        projection showed a $200,000 net loss in year one as an investment phase
        (20 university partners, $200K revenue against $400K costs), turning
        profitable by year three with 100 partners generating $1.2 million in
        revenue against $800,000 in costs, and scaling to 250 partners by year
        five with $3 million in revenue and $1.5 million in net profit.
      </p>

      <h2 className="text-xl font-semibold">What I Took Away</h2>
      <p>
        The biggest lesson was customer-centric thinking — the target user wasn't
        just the sustainability-focused student, it was anyone frustrated by
        inconvenience. I built out a customer persona ("Environment-Conscious
        Emma," a 20-year-old Northeastern junior who owns a reusable bottle but
        doesn't know where the refill stations are) to ground every feature
        decision in real user behavior rather than assumptions. The judges scored
        problem identification and market analysis highest at 8/10 each,
        highlighting the clear understanding of the target audience and
        well-designed app visuals. Solution and business model each scored 7/10,
        with feedback suggesting I elaborate on specific sponsorship types and
        explore how in-app advertising could be integrated naturally — both areas
        I'd strengthen if I were to develop the concept further. Presenting a
        complete business case under time constraints and fielding questions on
        financials and competitive differentiation was some of the most useful
        public speaking practice I've had.
      </p>
    </ProjectLayout>
  );
}
