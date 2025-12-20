type Tag = string;

type ProjectLayoutProps = {
  title: string;
  subtitle?: string;
  tags?: Tag[];
  children: React.ReactNode;
};

export default function ProjectLayout({
  title,
  subtitle,
  tags = [],
  children,
}: ProjectLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">{title}</h1>

        {subtitle ? <p className="text-base">{subtitle}</p> : null}

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <section className="mt-10 space-y-10">{children}</section>
    </main>
  );
}
