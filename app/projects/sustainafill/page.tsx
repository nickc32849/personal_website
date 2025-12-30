import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function SustainaFillPage() {
  return (
    <ProjectLayout
      title="SustainaFill"
      subtitle="Husky Startup Challenge • Northeastern University Oakland • 🥈 2nd Place"
      tags={[
        "Startup Pitch",
        "Market Research",
        "Business Modeling",
        "Go-To-Market Strategy",
        "Sustainability",
        "Product Strategy",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      {/* One-paragraph summary */}
      <Section title="">
        <p>
          SustainaFill is a proposed mobile application designed to increase student use of campus
          water refill stations by addressing visibility and convenience issues. The concept combines
          real-time station mapping, hydration reminders, and campus system integration to reduce
          single-use plastic bottle consumption while saving students money. I developed and pitched
          this idea as part of Northeastern University Oakland’s Husky Startup Challenge, where it
          placed 2nd overall. The project focused on problem definition, market research, business
          modeling, and scalability—not product development.
        </p>
      </Section>

      {/* Divider between summary and rest of page */}
      <hr className="my-12 border-gray-700" />

      {/* Image (keep near top) */}
      <Section title="Pitch Visuals">
        <div className="space-y-3">
          <Image
            // Update this path to match your actual image in /public
            src="/images/sustainafill-montage.png"
            alt="SustainaFill pitch visuals"
            width={1200}
            height={800}
            className="rounded-lg border"
          />
          <p className="text-sm text-neutral-400">
            Screens from the SustainaFill pitch deck and proposed app flow.
          </p>
        </div>
      </Section>

      <Section title="The Challenge">
        <p>
          Designed a comprehensive startup pitch for a campus sustainability solution as part of NU
          Oakland&apos;s Husky Startup Challenge. The competition required developing a full business
          case—problem identification, customer research, market analysis, revenue model, and
          scalability strategy—without building the product itself.
        </p>
      </Section>

      <Section title="The Problem">
        <p>
          Students want to use refillable water bottles, but they often don’t know where the campus
          refill stations are. This disconnect between infrastructure and awareness results in:
        </p>
        <ul className="list-disc space-y-2 pl-5 mt-3">
          <li>3M+ single-use plastic bottles consumed annually on a typical campus</li>
          <li>80% of plastic bottles ending up as litter</li>
          <li>Unnecessary student spending on disposable water</li>
        </ul>
      </Section>

      <Section title="Real-World Evidence">
        <ul className="list-disc space-y-2 pl-5">
          <li>At Brown University, 600 freshmen lacked nearby refill access</li>
          <li>
            At Villanova University, disposable bottle usage remained high despite available refill
            stations
          </li>
        </ul>
      </Section>

      <Section title="The Solution">
        <p>
          SustainaFill is a proposed mobile app that bridges the awareness gap by making refill
          stations easier to find and use. The platform combines real-time GPS mapping, hydration
          reminders, and campus system integration to reduce plastic waste while saving students
          money.
        </p>
      </Section>

      <Section title="Key Differentiators">
        <ul className="list-disc space-y-2 pl-5">
          <li>Campus-specific focus with indoor navigation</li>
          <li>Integration with university ID systems</li>
          <li>Administrator dashboard with refill station usage and placement analytics</li>
          <li>Clear, multi-stakeholder value proposition (students, universities, environment)</li>
        </ul>
      </Section>

      <Section title="Business Strategy">
        <p>
          Developed a three-stream revenue model designed to align incentives across stakeholders:
        </p>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold">University Partnerships</h3>
            <p className="mt-1">
              Tiered annual licensing based on student population ($5K–$15K per campus)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Sponsored Partnerships</h3>
            <p className="mt-1">
              Revenue-sharing with eco-friendly and wellness brands through campus sustainability
              challenges
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Data Insights</h3>
            <p className="mt-1">
              Aggregated, anonymized usage reports sold to sustainability researchers and
              policymakers
            </p>
          </div>
        </div>
      </Section>

      <Section title="Projected Path to Profitability">
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
          <li>87% of UC Davis students prefer refill stations over traditional fountains</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Customer-Centric Thinking</h3>
            <p className="mt-1">
              The target user wasn’t just sustainability-focused students—it was anyone frustrated
              by inconvenience. Research and personas drove the solution, not assumptions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Business Model Design</h3>
            <p className="mt-1">
              Built a revenue strategy that works because incentives align: students gain
              convenience, universities gain data, and sustainability goals are advanced as a
              byproduct.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Scalability Planning</h3>
            <p className="mt-1">
              Mapped infrastructure, partnerships, and data strategy early, ensuring the concept
              could scale beyond a single campus without redesigning the core product.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Competition Results">
        <p>Score: 37 / 50 — 🥈 2nd Place</p>
      </Section>

      <Section title="Judge Feedback Highlights">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            “This is a great idea that effectively promotes hydration and sustainability while
            leveraging technology to make it easier for students to find refill stations on campus.”
          </li>
          <li>
            “The app images are well-designed and visually appealing, making it easy to understand
            how users would interact with the platform.”
          </li>
          <li>
            “The breakdown of the user profile is strong, showing a clear understanding of the
            target audience.”
          </li>
          <li>
            “I also appreciate the detailed phases of scalability—this shows strong planning and a
            clear roadmap for growth.”
          </li>
        </ul>
      </Section>

      <Section title="Growth Opportunity">
        <p>
          The revenue strategy could be strengthened by more clearly defining potential sponsorship
          partners and outlining how in-app advertising could be integrated in a way that feels
          natural and beneficial to users.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        SustainaFill was developed as a conceptual business pitch for the Husky Startup Challenge at
        Northeastern University (Fall 2024).
      </p>
    </ProjectLayout>
  );
}
