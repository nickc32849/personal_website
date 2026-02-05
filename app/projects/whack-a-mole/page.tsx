import Image from "next/image";
import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function WhackAMolePage() {
  return (
    <ProjectLayout
      title="Whack-A-Mole Embedded Arcade System"
      subtitle="Cornerstone of Engineering 1 (GE 1501) &bull; Fall 2025"
      tags={[
        "Raspberry Pi Pico",
        "MicroPython",
        "Embedded Systems",
        "Power Management",
        "Hardware\u2013Software Integration",
        "Circuit Design",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          For Northeastern&apos;s first-year engineering course, I led the
          electronics and scoring logic for a fully functional Whack-a-Mole
          arcade game built for a public expo. The system used a Raspberry Pi
          Pico running MicroPython to coordinate five servo-driven moles,
          real-time button-based hit detection, and an LCD score display within
          a 30-second game loop. I designed a state-based hit-detection
          algorithm to prevent false scoring, integrated power and wiring for
          all electronic components, and resolved voltage dropout failures by
          implementing a dual-battery power architecture. The game ran reliably
          throughout the Engineering Expo.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="Project Overview">
        <p>
          My four-person team designed and built a fully functional Whack-a-Mole
          arcade game for Northeastern&apos;s end-of-semester Engineering Expo.
          The system uses a Raspberry Pi Pico to control randomly actuated
          moles, challenging players to test their reflexes within a 30-second
          time limit. The game was designed to be fast-paced, portable, and
          challenging but winnable.
        </p>
      </Section>

      <Section title="Team Photo">
        <div className="space-y-3">
          <Image
            src="/images/whack-a-mole-team.png"
            alt="Whack-a-Mole project team at Engineering Expo"
            width={1200}
            height={800}
            className="rounded-lg border"
          />
        </div>
      </Section>

      <Section title="My Role: Electronics &amp; Scoring Logic">
        <p>
          I owned the electronics architecture and all scoring logic. My
          specific contributions:
        </p>
        <ul className="list-disc space-y-2 pl-5 mt-3">
          <li>
            Programmed state-based hit-detection logic so the Pico only
            registered button presses when the corresponding mole was actively
            raised&mdash;preventing false scores from random or mistimed inputs
          </li>
          <li>
            Integrated an LCD to display scores in real time, with a tiered
            reward system (Gold/Silver/Bronze) to encourage competitive
            replayability
          </li>
          <li>
            Coordinated five servo motors, three physical buttons, and an LCD
            display through a single Raspberry Pi Pico
          </li>
          <li>
            Diagnosed and resolved power delivery failures: the Pico alone could
            not drive multiple servos and the LCD simultaneously, causing
            voltage dropouts during testing. Implemented a dual-battery
            architecture that eliminated 100% of power failures
          </li>
          <li>
            Managed all wiring and power distribution across components mounted
            beneath the enclosure, where troubleshooting access was limited
          </li>
        </ul>
      </Section>

      <Section title="Technical Challenges">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Power management:</strong> The most significant challenge.
            Voltage dropouts under load caused servo jitter and LCD blanking. I
            traced the root cause to insufficient current delivery from the
            Pico&apos;s USB power alone and redesigned the power architecture
            with dedicated external battery packs for the servo motors
          </li>
          <li>
            <strong>Hit detection timing:</strong> Servo actuation, game state,
            and button polling had to stay synchronized. I used state flags to
            track which moles were active and only credited hits during valid
            windows
          </li>
          <li>
            <strong>Servo calibration:</strong> Each servo required individual
            angle tuning through iterative testing to align mechanical motion
            with the physical enclosure cutouts
          </li>
        </ul>
      </Section>

      <Section title="Results">
        <p>
          The game ran reliably throughout the Engineering Expo and was
          consistently praised for its visual appeal and engaging gameplay. The
          short timer and competitive scoring tiers created high-energy
          atmosphere, with groups actively competing for top scores. Only two
          players reached the peak score of 19, confirming the difficulty
          balance was right.
        </p>
      </Section>

      <Section title="Key Takeaways">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Embedded systems programming with real-time hardware coordination
          </li>
          <li>
            Power management and debugging for multi-component electronic
            systems
          </li>
          <li>Hardware&ndash;software integration under physical constraints</li>
          <li>
            Iterative testing and debugging when hardware issues take longer
            than expected&mdash;always build in buffer time
          </li>
        </ul>
      </Section>

      <Section title="Team">
        <p>
          4-person team with collaborative development across electronics,
          construction, and fabrication. I led electronics and scoring logic;
          teammates handled laser cutting, enclosure assembly, and visual
          design.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic">
        Completed as part of Cornerstone of Engineering 1 (GE 1501)
        Carnival/Arcade Game group project at Northeastern University.
      </p>
    </ProjectLayout>
  );
}
