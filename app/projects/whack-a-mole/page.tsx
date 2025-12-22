import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function WhackAMoleProjectPage() {
  return (
    <ProjectLayout
      title="Whack-a-Mole Arcade Game"
      subtitle="Cornerstone of Engineering 1 — Raspberry Pi Pico–based interactive system built for a public expo"
      tags={[
        "Embedded systems",
        "Raspberry Pi Pico",
        "Hardware–software integration",
        "Servos",
        "State-based logic",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Context">
        <p>
          As part of Northeastern’s Cornerstone of Engineering 1 course, my team designed
          and built a Whack-a-Mole style arcade game for a public Carnival / Expo.
          The system needed to be engaging, reliable, and able to withstand repeated
          play without supervision.
        </p>
      </Section>

      <Section title="Team">
        <div className="space-y-4">
          <Image
            src="/images/whack-a-mole-team.png"
            alt="Whack-a-Mole Cornerstone Engineering team at the Expo"
            width={800}
            height={450}
            className="mx-auto rounded-lg border"
          />
          <p className="text-sm text-center">
            Whack-a-Mole project team at the Cornerstone Engineering Expo.
          </p>
        </div>
      </Section>

      <Section title="System Overview">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Controller:</strong> Raspberry Pi Pico running MicroPython
          </li>
          <li>
            <strong>Actuation:</strong> Three servo motors controlling pop-up moles
          </li>
          <li>
            <strong>Inputs:</strong> Three physical player buttons (one per mole)
          </li>
          <li>
            <strong>Outputs:</strong> LCD score display and visual game feedback
          </li>
          <li>
            <strong>Game Logic:</strong> Timed 30-second game with tiered scoring
          </li>
        </ul>
      </Section>

      <Section title="My Role">
        <p>
          I was responsible for the <strong>electronics and score-keeping system</strong>.
          My focus was ensuring that button presses were only counted as valid hits when
          the corresponding mole was actively raised, and that the score was displayed
          reliably throughout gameplay.
        </p>
      </Section>

      <Section title="Key Technical Challenges">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Designing hit-detection logic that only awarded points when a button was
            pressed while its corresponding mole was physically raised.
          </li>
          <li>
            Coordinating three servo motors so physical position accurately reflected
            software state.
          </li>
          <li>
            Debugging power failures after the Pico could not reliably drive multiple
            servos simultaneously.
          </li>
          <li>
            Integrating external battery packs to stabilize power delivery and restore
            LCD functionality.
          </li>
          <li>
            Managing dense breadboard wiring for servos, buttons, LCD, and power under
            tight physical constraints.
          </li>
        </ul>
      </Section>

      <Section title="What I Built">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Button hit-detection logic tied directly to real-time servo state
          </li>
          <li>
            Score-keeping system that incremented only on valid hits
          </li>
          <li>
            LCD interface displaying live score throughout the game
          </li>
          <li>
            Integrated wiring and power distribution for all electronic components
          </li>
        </ul>
      </Section>

      <Section title="Outcome">
        <p>
          The final system was fully functional, visually engaging, and robust enough
          for continuous public play at the Expo. Multiple players reached the highest
          scoring tier, confirming that the game was fair, responsive, and reliable.
        </p>
      </Section>

      <Section title="Artifacts">
        <ul className="list-disc space-y-2 pl-5">
          <li>Photos of early and final prototypes (included in course report)</li>
          <li>MicroPython control logic and wiring diagrams (available upon request)</li>
          <li>Public demo at Northeastern Cornerstone Engineering Expo</li>
        </ul>
      </Section>

      <Section title="What I Learned">
        <p>
          This project reinforced that hardware–software systems succeed or fail at
          their interfaces. Correct logic alone is not sufficient — timing, power
          delivery, and physical wiring all directly affect system reliability.
        </p>
      </Section>
    </ProjectLayout>
  );
}
