import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";
import Image from "next/image";

export default function WhackAMolePage() {
  return (
    <ProjectLayout
      title="Whack-A-Mole Arcade Game"
      subtitle="Cornerstone of Engineering 1 &bull; Fall 2025"
      tags={[
        "Raspberry Pi Pico",
        "Python",
        "Embedded Systems",
        "Circuit Design",
        "Prototyping",
        "Laser Cutting",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      <Section title="">
        <p>
          For the semester-long project in my Cornerstone of Engineering 1
          course, my team of four designed and built a fully functional
          Whack-A-Mole arcade game powered by a Raspberry Pi Pico. Three moles
          pop up at random intervals, and the player has 30 seconds to hit as
          many as possible using large arcade buttons. An LCD displays the
          score in real time, and a tiered prize system awards bronze, silver,
          or gold based on the final count. We showcased the game at
          Northeastern&apos;s Fall 2025 Engineering Expo, where it drew
          consistent crowds and competitive repeat players.
        </p>
      </Section>

      {/* TODO: Replace src with your actual image paths */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src="/images/whack-a-mole/expo.jpg"
          alt="Team presenting the finished Whack-A-Mole game at the Engineering Expo"
          width={600}
          height={450}
          className="rounded-lg"
        />
        <Image
          src="/images/whack-a-mole/breadboard.jpg"
          alt="Early prototyping with Raspberry Pi Pico, servo motors, and buttons on a breadboard"
          width={600}
          height={450}
          className="rounded-lg"
        />
      </div>

      <hr className="my-12 border-gray-700" />

      <Section title="My Role">
        <p>
          I led the electronics and score-keeping side of the project. My main
          contribution was programming the Pico to detect whether the player
          pressed a specific button while its corresponding mole was in the
          raised position&mdash;and only then. A hit while the mole was down,
          or while a different mole was up, would not count. Getting this logic
          right with a single servo and button was straightforward, but scaling
          it to three independent moles running on randomized timers introduced
          real complexity in how the code tracked state across multiple inputs
          simultaneously.
        </p>
        <p className="mt-4">
          I also wired and programmed the LCD to display the live score and
          integrated it alongside three large servo motors and arcade buttons on
          a shared breadboard. We ran into a power issue early on&mdash;the Pico
          alone could not supply enough current for three large servos, which
          actually fried our first Pico. We solved this by adding two external
          battery packs sourced from FYELIC. Coordinating all of that wiring
          under the game&apos;s wooden frame, where a single unplugged jumper
          wire was difficult to trace, was one of the more tedious challenges
          of the build.
        </p>
      </Section>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src="/images/whack-a-mole/prototype-1.jpg"
          alt="Initial single-servo prototype with Raspberry Pi Pico on a breadboard"
          width={600}
          height={450}
          className="rounded-lg"
        />
        <Image
          src="/images/whack-a-mole/team.jpg"
          alt="The team with the finished game"
          width={600}
          height={450}
          className="rounded-lg"
        />
      </div>

      <hr className="my-12 border-gray-700" />

      <Section title="How It Came Together">
        <p>
          The game evolved through four milestones over the semester. We started
          with a single servo lifting a cardboard cylinder while a tiny Pico
          button registered hits&mdash;barely a game, but enough to validate the
          core logic. By the second milestone, playtesters told us the moles
          stayed up too long and that the small Pico buttons needed to be
          replaced with real arcade buttons that could take a hit. We iterated
          from there: upgrading to three large servo motors for more torque,
          swapping in arcade-sized buttons, adding an LCD for live scoring, and
          building the enclosure from laser-cut wood with a spray-painted
          finish and vinyl-cut logo.
        </p>
        <p className="mt-4">
          Drew and Ricky handled the physical construction&mdash;laser cutting,
          spray painting, and assembling the frame&mdash;while Liam and I built
          the electronics. The final product was sturdy, portable, and visually
          eye-catching. At the Expo, groups of students would huddle around
          trying to beat each other&apos;s scores. Only two players managed to
          reach 19 out of a possible 30 points, which they were genuinely proud
          of.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic">
        Cornerstone of Engineering 1 (GE 1501), Fall 2025. Built with Nick
        Carpenter, Liam Stoops, Drew Bancroft, and Ricky Yang. Showcased at
        Northeastern&apos;s Fall 2025 Engineering Expo.
      </p>
    </ProjectLayout>
  );
}
