import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function WhackAMolePage() {
  return (
    <ProjectLayout
      title="Whack-a-Mole Game"
      subtitle="Cornerstone of Engineering 1 (GE 1501) • Northeastern University"
      tags={[
        "Raspberry Pi Pico",
        "MicroPython",
        "Embedded Systems",
        "Power Management",
        "Hardware–Software Integration",
        "Team Project",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      {/* One-paragraph summary */}
      <Section title="">
        <p>
          For Northeastern University’s first-year engineering course, I led the electronics and
          scoring logic for a fully functional Whack-a-Mole arcade game built for a public expo.
          The system used a Raspberry Pi Pico (running MicroPython) to coordinate three servo-driven
          moles, real-time button-based hit detection, and an LCD score display within a 30-second
          game loop. I implemented state-based logic to prevent false scoring, integrated power and
          wiring for multiple servos and an LCD, and resolved power-delivery failures by redesigning
          the system with external battery packs. The game ran reliably throughout the expo and was
          praised for its fast-paced, competitive gameplay, demonstrating hands-on experience with
          embedded systems, hardware–software integration, and real-world debugging.
        </p>
      </Section>

      {/* Divider between summary and rest of page */}
      <hr className="my-12 border-gray-700" />

      <Section title="Project Overview">
        <p>
          For Northeastern University’s first-year engineering course, my team designed and built a
          fully functional Whack-a-Mole arcade game for a public expo. The system uses a Raspberry
          Pi Pico to control three randomly actuated moles, challenging players to test their
          reflexes within a 30-second time limit.
        </p>
        <p className="mt-4">
          The game was intentionally designed to be fast-paced, visually engaging, portable, and
          winnable, satisfying both technical and gameplay constraints.
        </p>
      </Section>

      {/* Team Photo — best placement: after overview */}
      <Section title="Team Photo">
        <div className="space-y-3">
          <Image
            src="/images/whack-a-mole-team.png"
            alt="Whack-a-Mole project team"
            width={1200}
            height={800}
            className="rounded-lg border"
          />
        </div>
      </Section>

      <Section title="Game Mechanics">
        <ul className="list-disc space-y-2 pl-5">
          <li>Players have 30 seconds to score as many points as possible</li>
          <li>
            A point is awarded only when the correct button is pressed while its corresponding mole
            is raised
          </li>
          <li>Scores are displayed in real time on an LCD</li>
          <li>
            Tiered reward structure encourages competition and replayability:
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li>🥇 Gold: 18+ points</li>
              <li>🥈 Silver: 13–17 points</li>
              <li>🥉 Bronze: 8–12 points</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title="System Overview">
        <ul className="list-disc space-y-2 pl-5">
          <li>Controller: Raspberry Pi Pico (MicroPython)</li>
          <li>Actuation: Three servo motors driving pop-up moles</li>
          <li>Inputs: Three physical buttons (one per mole)</li>
          <li>Outputs: LCD score display and visual feedback</li>
          <li>Game Logic: Timed round with tiered scoring</li>
        </ul>
      </Section>

      <Section title="My Role — Electronics & Scoring Logic">
        <p>
          I led the electronics architecture and scoring logic, focusing on accurate hit detection
          and real-time feedback.
        </p>

        <p className="mt-4 font-semibold">Key contributions:</p>
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>Programmed the Pico to register button presses only when the correct mole was active</li>
          <li>Coordinated hit detection across three independent servo motors and buttons</li>
          <li>
            Debugged power failures when the Pico could not reliably drive multiple servo motors and
            an LCD
          </li>
          <li>Implemented a live LCD score display</li>
          <li>
            Integrated and organized wiring and power distribution across all electronic components
          </li>
        </ul>

        <p className="mt-4">
          This work required tight coordination between software logic, hardware behavior, and
          physical constraints.
        </p>
      </Section>

      <Section title="Technical Challenges">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Hit Detection Logic:</strong> Implemented state-based logic to prevent false
            scoring when moles were down or mismatched buttons were pressed.
          </li>
          <li>
            <strong>Servo Motor Integration:</strong> Required precise angle calibration through
            iterative testing to align mechanical motion with the enclosure.
          </li>
          <li>
            <strong>Power Management:</strong> The Pico alone could not support three servos and an
            LCD; resolved by introducing two external battery packs.
          </li>
          <li>
            <strong>Wiring Complexity:</strong> Managed dense breadboard connections for servos,
            buttons, LCD, and power. Troubleshooting became significantly harder once components
            were mounted beneath the enclosure.
          </li>
        </ul>
      </Section>

      <Section title="Design & Fabrication">
        <ul className="list-disc space-y-2 pl-5">
          <li>Laser-cut wooden enclosure</li>
          <li>Spray-painted finish for strong stage presence</li>
          <li>Vinyl-cut labels and visuals</li>
          <li>Breadboard-based electronics mounted internally</li>
          <li>Fully portable — one person can carry the entire system</li>
        </ul>
      </Section>

      <Section title="Results & Reception">
        <p>
          The game ran reliably throughout the First-Year Engineering Expo and was consistently
          praised for its visual appeal and engaging gameplay. The short timer and competitive
          scoring tiers created a high-energy atmosphere, with groups actively competing for top
          scores. Only two players reached the peak score of 19, reinforcing that the game was
          challenging but fair.
        </p>
      </Section>

      <Section title="Key Takeaways">
        <ul className="list-disc space-y-2 pl-5">
          <li>Embedded programming using Raspberry Pi Pico and MicroPython</li>
          <li>Power management for multi-component electronic systems</li>
          <li>Hardware–software integration and debugging</li>
          <li>Iterative testing under real-world constraints</li>
          <li>Collaborative engineering under deadline pressure</li>
        </ul>

        <p className="mt-4">
          In hindsight, I would allocate more buffer time for debugging, as hardware issues
          consistently took longer than expected. That said, strong team communication and
          coordination allowed us to overcome each obstacle efficiently.
        </p>
      </Section>

      {/* Team section ABOVE the final divider */}
      <Section title="Team">
        <p>
          4-person team with collaborative development across electronics, construction, and
          fabrication.
        </p>
      </Section>

      {/* Final divider + italic course context */}
      <hr className="my-12 border-gray-700" />

      <p className="italic">
        Completed as part of the Cornerstone of Engineering 1 (GE 1501) Carnival/Arcade Game group
        project.
      </p>
    </ProjectLayout>
  );
}
