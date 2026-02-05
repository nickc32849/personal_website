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
        where it placed second out of over 15 competing teams. The project was
        entirely business strategy — problem definition, customer research,
        market analysis, revenue modeling, and scalability planning — not product
        development. No code was written. I built the full business case from
        scratch, including market sizing across 4,000+ U.S. universities, tiered
        B2B pricing models, customer personas, and five-year profitability
        projections.
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
        have already invested in refill stations — at Villanova, for example,
        disposable bottle usage remained high despite available infrastructure.
      </p>

      <h2 className="text-xl font-semibold">The Solution and Business Model</h2>
      <p>
        SustainaFill is a proposed mobile app that bridges this awareness gap
        with GPS-based refill station mapping, hydration reminders, and
        integration with campus ID systems. The platform creates value for
        multiple stakeholders: students gain convenience, universities gain usage
        data and sustainability metrics, and environmental impact improves as a
        natural byproduct.
      </p>
      <p>
        I designed a three-stream revenue model to align incentives across those
        stakeholders. University partnerships would pay tiered annual licensing
        fees based on student population ($5K-$15K per campus). Sponsored
        partnerships would generate revenue-sharing with eco-friendly and
        wellness brands through campus sustainability challenges. And aggregated,
        anonymized usage data could be packaged as insights for sustainability
        researchers and policymakers. The market validation was strong: 19.6
        million college students across 4,000+ institutions, over 300 colleges
        with refill stations already installed, and 91% of surveyed students
        saying they'd switch to reusable bottles with convenient access. The
        projected path was roughly 20 university partners in year one, scaling to
        around 250 partners with $1.5 million in net profit by year five.
      </p>

      <h2 className="text-xl font-semibold">What I Took Away</h2>
      <p>
        The biggest lesson was customer-centric thinking — the target user wasn't
        just the sustainability-focused student, it was anyone frustrated by
        inconvenience. Research and personas drove the solution, not assumptions.
        Building the revenue model taught me how to design a strategy where
        incentives naturally align across students, universities, and sponsors
        rather than forcing monetization onto a single stakeholder. And
        presenting the full business case to judges under time constraints, then
        fielding questions on financials and competitive differentiation, was
        some of the most useful public speaking practice I've had. Final score
        was 37/50, with judges highlighting the clear understanding of the target
        audience, well-designed app visuals, and strong scalability roadmap.
      </p>
    </ProjectLayout>
  );
}
