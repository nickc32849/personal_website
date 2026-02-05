import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function SustainaFillPage() {
  return (
    <ProjectLayout
      title="SustainaFill"
      subtitle="Husky Startup Challenge &bull; NU Oakland &bull; 2nd Place &bull; Fall 2024"
      tags={[
        "Startup Pitch",
        "Market Research",
        "Business Modeling",
        "Financial Projections",
        "Public Speaking",
        "Product Strategy",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          SustainaFill is a campus sustainability platform concept I developed
          and pitched at Northeastern University Oakland&apos;s Husky Startup
          Challenge, where it placed 2nd out of 15+ competing teams. The
          project focused entirely on business strategy&mdash;problem
          definition, customer research, market analysis, revenue modeling, and
          scalability planning&mdash;not product development. I built the full
          business case including market sizing across 4,000+ U.S. universities,
          tiered B2B pricing models, customer personas, and 5-year profitability
          projections.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="Pitch Visuals">
        <div className="space-y-3">
          <Image
            src="/images/sustainafill-solution.png"
            alt="SustainaFill solution overview slide"
            width={1200}
            height={800}
            className="rounded-lg border"
          />
          <p className="text-sm text-neutral-400">
            Slides from the SustainaFill pitch deck and proposed app flow.
          </p>
        </div>
      </Section>

      <Section title="The Problem">
        <p>
          Students want to use refillable water bottles, but they often
          don&apos;t know where campus refill stations are. This gap between
          available infrastructure and student awareness leads to 3M+
          single-use plastic bottles consumed annually on a typical campus, with
          80% ending up as litter. The disconnect exists even at universities
          that have already invested in refill stations&mdash;at Villanova,
          disposable bottle usage remained high despite available infrastructure.
        </p>
      </Section>

      <Section title="The Solution">
        <p>
          SustainaFill is a proposed mobile app that bridges this awareness gap
          with GPS-based refill station mapping, hydration reminders, and
          integration with campus ID systems. The platform creates value for
          multiple stakeholders: students gain convenience, universities gain
          usage data and sustainability metrics, and environmental impact
          improves as a natural byproduct.
        </p>
      </Section>

      <Section title="Business Strategy">
        <p>
          I developed a three-stream revenue model designed to align incentives
          across stakeholders:
        </p>
        <ul className="list-disc space-y-2 pl-5 mt-3">
          <li>
            <strong>University partnerships:</strong> Tiered annual licensing
            based on student population ($5K&ndash;$15K per campus)
          </li>
          <li>
            <strong>Sponsored partnerships:</strong> Revenue-sharing with
            eco-friendly and wellness brands through campus sustainability
            challenges
          </li>
          <li>
            <strong>Data insights:</strong> Aggregated, anonymized usage reports
            for sustainability researchers and policymakers
          </li>
        </ul>
      </Section>

      <Section title="Market Validation">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            19.6M college students across 4,000+ U.S. institutions
          </li>
          <li>300+ colleges have already installed refill stations</li>
          <li>
            91% of students surveyed would switch to reusable bottles with
            convenient access
          </li>
          <li>
            Projected path: ~20 university partners in Year 1, scaling to ~250
            partners with $1.5M net profit by Year 5
          </li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Customer-centric thinking:</strong> The target user
            wasn&apos;t just sustainability-focused students&mdash;it was anyone
            frustrated by inconvenience. Research and personas drove the
            solution, not assumptions
          </li>
          <li>
            <strong>Revenue model design:</strong> Building a strategy where
            incentives naturally align across students, universities, and
            sponsors&mdash;rather than forcing monetization onto a single
            stakeholder
          </li>
          <li>
            <strong>Scalability planning:</strong> Mapping infrastructure,
            partnerships, and data strategy early so the concept could scale
            beyond a single campus without redesigning the core product
          </li>
          <li>
            <strong>Live pitch delivery:</strong> Presenting a complete business
            case to judges under time constraints, fielding questions on
            financials and competitive differentiation
          </li>
        </ul>
      </Section>

      <Section title="Competition Results">
        <p>
          Score: 37/50 &mdash; 2nd Place. Judges highlighted the clear
          understanding of the target audience, well-designed app visuals, and
          strong scalability roadmap.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        SustainaFill was developed as a conceptual business pitch for the Husky
        Startup Challenge at Northeastern University Oakland (Fall 2024). No
        product was built&mdash;the project focused entirely on business
        strategy, market research, and pitch delivery.
      </p>
    </ProjectLayout>
  );
}
