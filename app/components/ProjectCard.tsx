import Link from "next/link";

type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
};

export default function ProjectCard({ href, title, description }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-lg border p-4 hover:bg-gray-50"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
    </Link>
  );
}
