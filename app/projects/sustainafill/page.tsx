import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function HuskyStartupChallengePage() {
  return (
    <ProjectLayout
      title="SustainaFill — Husky Startup Challenge"
      subtitle="Second Place • Northeastern University Oakland • Fall 2024"
      tags={[
        "Product Design",
        "Systems Thinking",
        "Market Analysis",
        "Sustainability",
        "Startup Pitch",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Context">
        <p>
          SustainaFill is a proposed mobile application designed to increase student use of
          campus water refill stations by addressing visibility and convenience issues. The
          concept combines real-time station mapping, hydration reminders, and campus
          system integration to reduce single-use plastic bottle consumption while saving
          students money. I developed and pitched this idea as part of Northeastern
          University Oakland’s Husky Startup Challenge, where it placed{" "}
          <strong>2nd overall</strong>. The project focused on problem definition, market
          research, business modeling, and scalability—not product development.
        </p>
      </Section>

      <Section title="Pitch Slide">
        <div className="space-y-3">
          <Image
            src="/images/sustainafill-solution.png"
            alt="SustainaFill solution slide from Demo Day pitch deck"
            width={1200}
            height={675}
            className="rounded-lg border"
          />
          <p className="text-sm">
            Demo Day slide: proposed app concept and feature set.
          </p>
        </div>
      </Section>

      <Section title="The Challenge">
        <p>
          Designed a comprehensive startup pitch for a campus sustainability solution as
          part of NU Oakland&apos;s Husky Startup Challenge. The competition required
          developing a full business case—problem identification, customer research,
          market analysis, revenue model, and scalability strategy—without building the
          product itself.
        </p>
      </Section>

      <Section title="The Problem">
        <p>
          Students want to use refillable water bottles, but they often don’t know where
          the campus refill stations are. This disconnect between infrastructure and
          awareness results in:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>3M+ single-use plastic bottles consumed annually on a typical campus</li>
          <li>80% of plastic bottles ending up as litter</li>
          <li>Unnecessary student spending on disposable water</li>
        </ul>

        <p className="mt-4 font-medium">Real-world evidence</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>At Brown University, 600 freshmen lacked nearby refill access</li>
          <li>
            At Villanova University, disposable bottle usage remained high despite
            available refill stations
          </li>
        </ul>
      </Section>

      <Section title="The Solution">
        <p>
          SustainaFill is a proposed mobile app that bridges the awareness gap by making
          refill stations easier to find and use. The platform combines real-time GPS
          mapping, hydration reminders, and campus system integration to reduce plastic
          waste while saving students money.
        </p>
      </Section>

      <Section title="Key Differentiators">
        <ul className="list-disc space-y-2 pl-5">
          <li>Campus-specific focus with indoor navigation</li>
          <li>Integration with university ID systems</li>
          <li>Administrator dashboard with refill station usage and placement analytics</li>
          <li>
            Clear, multi-stakeholder value proposition (students, universities,
            environment)
          </li>
        </ul>
      </Section>

      <Section title="Business Strategy">
        <p>
          Developed a three-stream revenue model designed to align incentives across
          stakeholders:
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium">University Partnerships</p>
            <p className="text-sm text-zinc-500">
              Tiered annual licensing based on student population ($5K–$15K per campus)
            </p>
          </div>

          <div>
            <p className="font-medium">Sponsored Partnerships</p>
            <p className="text-sm text-zinc-500">
              Revenue-sharing with eco-friendly and wellness brands through campus
              sustainability challenges
            </p>
          </div>

          <div>
            <p className="font-medium">Data Insights</p>
            <p className="text-sm text-zinc-500">
              Aggregated, anonymized usage reports sold to sustainability researchers and
              policymakers
            </p>
          </div>
        </div>

        <p className="mt-6 font-medium">Projected Path to Profitability</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Year 1: Investment phase with ~20 university partners</li>
          <li>Year 5: Scale to ~250 partners with $1.5M projected net profit</li>
        </ul>
      </Section>

      <Section title="Market Validation">
        <ul className="list-disc space-y-2 pl-5">
          <li>19.6M college students across 4,000+ U.S. institutions</li>
          <li>300+ colleges already installed refill stations</li>
          <li>91% of students would switch to reusable bottles with convenient access</li>
          <li>
            87% of UC Davis students prefer refill stations over traditional fountains
          </li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <div className="space-y-4">
          <div>
            <p className="font-medium">Customer-centric thinking</p>
            <p className="text-sm text-zinc-500">
              The target user wasn’t just sustainability-focused students—it was anyone
              frustrated by inconvenience. Research and personas drove the solution, not
              assumptions.
            </p>
          </div>

          <div>
            <p className="font-medium">Business model design</p>
            <p className="text-sm text-zinc-500">
              Built a revenue strategy that works because incentives align: students gain
              convenience, universities gain data, and sustainability goals are advanced
              as a byproduct.
            </p>
          </div>

          <div>
            <p className="font-medium">Scalability planning</p>
            <p className="text-sm text-zinc-500">
              Mapped infrastructure, partnerships, and data strategy early, ensuring the
              concept could scale beyond a single campus without redesigning the core
              product.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Competition Results">
        <p>
          <strong>Score:</strong> 37 / 50 — <strong>🥈 2nd Place</strong>
        </p>

        <p className="mt-4 font-medium">Judge Feedback Highlights</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            “This is a great idea that effectively promotes hydration and sustainability
            while leveraging technology to make it easier for students to find refill
            stations on campus.”
          </li>
          <li>
            “The app images are well-designed and visually appealing, making it easy to
            understand how users would interact with the platform.”
          </li>
          <li>
            “The breakdown of the user profile is strong, showing a clear understanding
            of the target audience.”
          </li>
          <li>
            “I also appreciate the detailed phases of scalability—this shows strong
            planning and a clear roadmap for growth.”
          </li>
        </ul>

        <p className="mt-4 font-medium">Growth Opportunity</p>
        <p className="text-sm text-zinc-500">
          The revenue strategy could be strengthened by more clearly defining potential
          sponsorship partners and outlining how in-app advertising could be integrated
          in a way that feels natural and beneficial to users.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          SustainaFill was developed as a conceptual business pitch for the Husky Startup
          Challenge at Northeastern University (Fall 2024).
        </p>
      </Section>
    </ProjectLayout>
  );
}
