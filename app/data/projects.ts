export type Project = {
  slug: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "whack-a-mole",
    title: "Whack-a-Mole Game",
    description:
      'Built an interactive "Whack-a-Mole"-style system as a team project, integrating hardware, software, and iterative testing.',
  },
  {
    slug: "husky-startup-challenge",
    title: "SustainaFill — Husky Startup Challenge (2nd Place)",
    description:
      "Second-place startup pitch at Northeastern University Oakland proposing a campus-focused sustainability and hydration platform.",
  },
  {
    slug: "nasa",
    title: "NASA Small Satellite Subsystem Matching Platform",
    description:
      "Reorganized spacecraft technology datasets into retrieval categories and supported platform integration.",
  },
  {
    slug: "homebase",
    title: "HomeBase: Full-Stack Roommate Coordination App",
    description:
      "Built features across the stack with Next.js, FastAPI, PostgreSQL, Docker, and JWT authentication.",
  },
  {
    slug: "trade-emissions",
    title: "Trade Wars, Emissions, and Global Data Analysis",
    description:
      "Research assistant work using cross-country datasets, difference-in-differences, and GVAR-related data preparation.",
  },
];
