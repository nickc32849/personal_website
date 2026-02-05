import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function DCPowerAnalyzerPage() {
  return (
    <ProjectLayout
      title="Enhanced DC Power Analyzer"
      subtitle="Personal Project &bull; In Progress (Spring 2026)"
      tags={[
        "Analog Circuit Design",
        "LTspice",
        "KiCad",
        "Raspberry Pi Pico",
        "MicroPython",
        "Power Electronics",
        "Control Systems",
        "Signal Processing",
        "PCB Design",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          I&apos;m designing and building a precision DC power measurement
          instrument to characterize power supplies and battery systems. Rather
          than relying on an off-the-shelf INA219 sensor module, I&apos;m
          designing a custom analog signal chain from discrete
          components&mdash;a shunt amplifier using the INA180A3 with Kelvin
          sensing for sub-milliamp current resolution, a second-order
          Sallen-Key anti-aliasing filter with characterized frequency response,
          and a programmable electronic load using op-amp feedback control of a
          power MOSFET. The system runs on a Raspberry Pi Pico with real-time
          OLED display and SD card logging.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="Why This Project">
        <p>
          Most sophomore EE students haven&apos;t taken Circuits &amp; Signals
          yet. I wanted to get ahead by teaching myself the core
          concepts&mdash;transfer functions, Bode plots, feedback control,
          frequency response&mdash;through a hands-on project rather than
          waiting for the coursework. A DC power analyzer gave me a vehicle to
          learn all of these while building something directly relevant to power
          electronics, test equipment design, and system validation.
        </p>
      </Section>

      <Section title="System Architecture">
        <p>The system has four major subsystems:</p>
        <ul className="list-disc space-y-2 pl-5 mt-2">
          <li>
            <strong>Custom shunt amplifier:</strong> A discrete current-sense
            circuit using the INA180A3 with a 50m&Omega; Kelvin shunt resistor,
            replacing the integrated INA219 to learn differential amplifier
            design, common-mode rejection, and gain-bandwidth tradeoffs
            firsthand
          </li>
          <li>
            <strong>Sallen-Key anti-aliasing filter:</strong> A second-order
            active low-pass filter designed with calculated cutoff frequency,
            characterized through Bode plot measurements on real test equipment.
            This is the core Circuits &amp; Signals demonstration&mdash;transfer
            functions in the s-domain applied to a real system
          </li>
          <li>
            <strong>Programmable electronic load:</strong> An op-amp feedback
            loop holds a power MOSFET in its linear region to regulate current,
            demonstrating negative feedback control, transient step response,
            thermal management, and safe operating area analysis
          </li>
          <li>
            <strong>Microcontroller and data acquisition:</strong> A Raspberry
            Pi Pico samples the analog front-end through its ADC, displays
            real-time voltage, current, and power on an OLED, and logs data to
            an SD card for post-analysis
          </li>
        </ul>
      </Section>

      <Section title="What I&apos;m Learning">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Instrumentation amplifier design and precision analog layout
          </li>
          <li>Transfer functions, Bode plots, and frequency response analysis</li>
          <li>Negative feedback control and closed-loop stability</li>
          <li>Thermal management and safe operating area calculations</li>
          <li>PCB design for precision analog circuits using KiCad</li>
          <li>
            LTspice simulation validated against bench measurements using
            oscilloscopes and function generators
          </li>
        </ul>
      </Section>

      <Section title="Tools &amp; Equipment">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Simulation:</strong> LTspice for circuit simulation and AC
            analysis
          </li>
          <li>
            <strong>PCB Design:</strong> KiCad for schematic capture and board
            layout
          </li>
          <li>
            <strong>Firmware:</strong> MicroPython on Raspberry Pi Pico
          </li>
          <li>
            <strong>Test Equipment:</strong> Oscilloscope, function generator,
            and multimeter at Northeastern&apos;s EXP Makerspace
          </li>
          <li>
            <strong>Fabrication:</strong> PCB milling and 3D printing at EXP
            Makerspace
          </li>
          <li>
            <strong>Documentation:</strong> GitHub repository with schematics,
            simulation files, firmware, and build progress
          </li>
        </ul>
      </Section>

      <Section title="Current Status">
        <p>
          Components ordered and arriving. LTspice simulations for the RC filter
          and shunt amplifier stage are underway. KiCad project initialized with
          GitHub repository for version control and documentation. Next steps
          are breadboard prototyping of the shunt amplifier and filter stages,
          followed by bench characterization against simulation predictions.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic">
        This is an independent project designed to build Circuits &amp; Signals
        fundamentals through hands-on implementation before taking the
        prerequisite coursework.
      </p>
    </ProjectLayout>
  );
}
