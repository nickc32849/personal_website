import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function WhackAMolePage() {
  return (
    <ProjectLayout
      title="Whack-a-Mole: Cornerstone Engineering Group Project"
      subtitle="Cornerstone of Engineering 1 (GE 1501) • Northeastern University"
      tags={[
        "Raspberry Pi Pico",
        "MicroPython",
        "Embedded systems",
        "Circuit Design",
        "Power Management",
        "Hardware–Software Integration",
        "Team Project",
      ]}
    >
      <BackLink href="/projects" label="← Back to Projects" />

      <Section title="Project Overview">
        <p>
          For Northeastern’s first-year engineering course, my team designed and built a fully
          functional Whack-a-Mole game for a carnival/arcade-themed project for a public expo. The
          game features three randomly popping moles controlled by a Raspberry Pi Pico, challenging
          players to test their reflexes within a 30-second time limit.
        </p>
        <p className="mt-4">
          The game was designed to be fast-paced, visually engaging, portable, and winnable,
          meeting all engineering and gameplay constraints set by the course.
        </p>
      </Section>

      {/* Team Photo (kept in the most natural spot: after overview) */}
      <Section title="Team">
        <div className="space-y-3">
          <Image
            src="/images/whack-a-mole-team.png"
            alt="Whack-a-Mole project team"
            width={1200}
            height={800}
            className="rounded-lg border"
          />
          <p className="text-sm">Whack-a-Mole project team at the Cornerstone Engineering Expo.</p>
        </div>
      </Section>

      <Section title="Game Mechanics">
        <p>
          Players have 30 seconds to score as many points as possible by hitting the correct button
          when its corresponding mole pops up. Each successful hit adds 1 point to the score, which
          is displayed in real time on an LCD screen. The game features a tiered reward system:
        </p>
        <ul className="list-disc space-y-2 pl-5 mt-4">
          <li>🥇 Gold Tier: 18+ points</li>
          <li>🥈 Silver Tier: 13-17 points</li>
          <li>🥉 Bronze Tier: 8-12 points</li>
        </ul>
      </Section>

      <Section title="System Overview">
        <ul className="list-disc space-y-2 pl-5">
          <li>Controller: Raspberry Pi Pico running MicroPython</li>
          <li>Actuation: Three servo motors controlling pop-up moles</li>
          <li>Inputs: Three physical player buttons (one per mole)</li>
          <li>Outputs: LCD score display and visual game feedback</li>
          <li>Game Logic: Timed 30-second game with tiered scoring</li>
        </ul>
      </Section>

      <Section title="My Role">
        <p>
          I was responsible for the electronics and scoring logic, focusing on reliable hit
          detection and feedback.
        </p>
        <p className="mt-4">Specifically, I:</p>
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>
            Programmed the Raspberry Pi Pico to detect button presses only when the corresponding
            mole was active.
          </li>
          <li>Coordinated hit detection across three independent servo motors and buttons.</li>
          <li>
            Debugged power failures after the Pico could not reliably drive multiple servo motors
            and the LCD simultaneously.
          </li>
          <li>Implemented the LCD live score display system throughout the game.</li>
          <li>Integrated wiring and power distribution for all electronic components.</li>
        </ul>
        <p className="mt-4">
          This required careful coordination between hardware, software, and physical constraints.
        </p>
      </Section>

      <Section title="Technical Challenges">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Hit Detection Logic:</strong> Developed a system to accurately detect button
            presses only when the corresponding mole was up, not when down or when a different mole
            was active.
          </li>
          <li>
            <strong>Integrating 3 Servo Motors:</strong> Required precise angle calibration through
            iterative testing.
          </li>
          <li>
            <strong>Power Management:</strong> Debugged power failures after the Pico could not
            reliably drive the three servo motors and the LCD simultaneously. Implemented two
            battery packs.
          </li>
          <li>
            <strong>Wiring Complexity:</strong> Managed breadboard connections for three servo
            motors, three buttons, an LCD, and two battery packs. Troubleshooting was challenging
            with components mounted under the game box.
          </li>
        </ul>
      </Section>

      <Section title="Design & Fabrication">
        <ul className="list-disc space-y-2 pl-5">
          <li>Laser-cut wooden enclosure</li>
          <li>Spray-painted finish for stage presence</li>
          <li>Vinyl-cut labels and visuals</li>
          <li>Breadboard-based electronics mounted inside the enclosure</li>
          <li>Fully portable: one person can carry the entire system</li>
        </ul>
      </Section>

      <Section title="Results & Reception">
        <p>
          The game was a hit at the FYE Expo. Players consistently commented on its visual appeal
          and engaging gameplay. The 30-second timer and competitive scoring tiers created a fun
          atmosphere, with groups competing to achieve the highest scores. Only two players reached
          the impressive score of 19 points during the event.
        </p>
      </Section>

      <Section title="Key Takeaways">
        <p>This project taught me:</p>
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>Practical experience with Raspberry Pi Pico and MicroPython programming</li>
          <li>Circuit integration and power management for multi-component systems</li>
          <li>The importance of iterative testing and design flexibility</li>
          <li>Effective team collaboration and communication under deadline pressure</li>
          <li>How to debug hardware-software integration issues</li>
        </ul>

        <p className="mt-4">
          Looking back, I would have allocated more buffer time in my schedule for unexpected
          technical challenges, as debugging often took significantly longer than anticipated.
          However, strong team communication and mutual support helped us overcome each obstacle.
        </p>

        <hr className="mt-8 mb-4 border-gray-700" />

        <p className="italic">
          This project was completed as part of the Cornerstone of Engineering 1 (GE 1501)
          Carnival/Arcade Game group project, where students designed, prototyped, and built fully
          functional carnival games from scratch.
        </p>

      </Section>
    </ProjectLayout>
  );
}
