import ProjectLayout from "../../components/ProjectLayout";

export default function DCPowerAnalyzerPage() {
  return (
    <ProjectLayout
      title="Enhanced DC Power Analyzer"
      subtitle="Personal Project - In Progress"
      date="Spring 2026"
    >
      <p>
        I'm designing and building a precision DC power measurement instrument
        to characterize power supplies and battery systems. Rather than relying
        on an off-the-shelf INA219 sensor module, I'm designing a custom analog
        signal chain from discrete components — a shunt amplifier using the
        INA180A3 with Kelvin sensing for sub-milliamp current resolution, a
        second-order Sallen-Key anti-aliasing filter with characterized
        frequency response, and a programmable electronic load using op-amp
        feedback control of a power MOSFET. The system runs on a Raspberry Pi
        Pico with real-time OLED display and SD card logging.
      </p>

      {/* Uncomment when you have photos/schematics
      <Image
        src="/projects/dc-power-analyzer/schematic.png"
        alt="DC Power Analyzer system schematic"
        width={900}
        height={500}
        className="rounded-lg"
      />
      */}

      <h2 className="text-xl font-semibold">Why This Project</h2>
      <p>
        Most sophomore EE students haven't taken Circuits and Signals yet. I
        wanted to get ahead by teaching myself the core concepts — transfer
        functions, Bode plots, feedback control, frequency response — through a
        hands-on project rather than waiting for the coursework. A DC power
        analyzer gave me a vehicle to learn all of these while building
        something directly relevant to power electronics, test equipment design,
        and system validation.
      </p>

      <h2 className="text-xl font-semibold">System Architecture</h2>
      <p>
        The system has four major subsystems. The first is a custom shunt
        amplifier — a discrete current-sense circuit using the INA180A3 with a
        50 milliohm Kelvin shunt resistor, replacing the integrated INA219 so I
        can learn differential amplifier design, common-mode rejection, and
        gain-bandwidth tradeoffs firsthand. The second is a Sallen-Key
        anti-aliasing filter, a second-order active low-pass filter designed
        with a calculated cutoff frequency and characterized through Bode plot
        measurements on real test equipment. This is the core Circuits and
        Signals demonstration — transfer functions in the s-domain applied to a
        real system.
      </p>
      <p>
        The third subsystem is a programmable electronic load, where an op-amp
        feedback loop holds a power MOSFET in its linear region to regulate
        current. This demonstrates negative feedback control, transient step
        response, thermal management, and safe operating area analysis. The
        fourth is the microcontroller and data acquisition layer — a Raspberry
        Pi Pico samples the analog front-end through its ADC, displays
        real-time voltage, current, and power on an OLED, and logs data to an
        SD card for post-analysis.
      </p>

      <h2 className="text-xl font-semibold">Tools and Equipment</h2>
      <p>
        I'm using LTspice for circuit simulation and AC analysis, KiCad for
        schematic capture and PCB layout, and MicroPython for the Pico
        firmware. All bench work — oscilloscope measurements, function generator
        testing, PCB milling, and 3D printing — is done at Northeastern's EXP
        Makerspace. The full project is documented in a GitHub repository with
        schematics, simulation files, firmware, and build progress.
      </p>

      <h2 className="text-xl font-semibold">Current Status</h2>
      <p>
        Components are ordered and arriving. LTspice simulations for the RC
        filter and shunt amplifier stage are underway, and the KiCad project is
        initialized with the GitHub repository set up for version control and
        documentation. Next steps are breadboard prototyping of the shunt
        amplifier and filter stages, followed by bench characterization against
        simulation predictions.
      </p>
    </ProjectLayout>
  );
}
