export type Project = {
  slug: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
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
