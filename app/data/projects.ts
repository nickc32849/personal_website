export type Project = {
  slug: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "dc-power-analyzer",
    title: "Enhanced DC Power Analyzer",
    description:
      "Designing a precision DC measurement system with a custom shunt amplifier, Sallen-Key anti-aliasing filter, and programmable electronic load with closed-loop feedback control.",
  },
  {
    slug: "whack-a-mole",
    title: "Whack-A-Mole Embedded Arcade System",
    description:
      "Engineered an embedded arcade game using a Raspberry Pi Pico, programming state-based hit detection, LCD scoring, and a dual-battery power architecture for five servo motors.",
  },
  {
    slug: "nasa",
    title: "NASA Small Satellite Subsystem Matching Platform",
    description:
      "Extracted and structured 500+ spacecraft subsystem datasets from NASA's 461-page Small Satellite Report into query-ready formats for a part-matching application.",
  },
  {
    slug: "homebase",
    title: "HomeBase: Full-Stack Roommate Coordination App",
    description:
      "Built frontend sign-in and tasks pages in React/Next.js and a backend group join feature with FastAPI and PostgreSQL for an 8-person Forge Product Lab team.",
  },
  {
    slug: "sustainafill",
    title: "SustainaFill \u2014 Husky Startup Challenge (2nd Place)",
    description:
      "Developed a business plan and pitch for a campus sustainability platform, including market analysis across 4,000+ universities and 5-year revenue projections. Placed 2nd.",
  },
  {
    slug: "mvrhs-pop-up-store",
    title: "MVRHS Holiday Pop-Up Store \u2014 Store Manager",
    description:
      "Managed a student-run retail pop-up during Christmas in Edgartown, negotiating partnerships with 10+ local vendors, building a 30-person volunteer workforce, and overseeing $8,800+ in inventory across branded merchandise and consignment goods.",
  },
  {
    slug: "trade-emissions",
    title: "Trade Wars, Emissions, and Global Data Analysis",
    description:
      "Analyzed 10+ global trade and emissions datasets using difference-in-differences and GVAR modeling to quantify environmental impacts of U.S.-initiated trade wars.",
  },
  {
    slug: "nexus-investment-fund",
    title: "Nexus Investment Fund \u2014 Energy Transfer Equity Research",
    description:
      "Conducted equity research on a $52B midstream energy company, performing financial analysis, comparable company valuation, and risk modeling for a live investment pitch.",
  },
];
