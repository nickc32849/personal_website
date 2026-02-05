type ProjectLayoutProps = {
  title: string;
  subtitle?: string;
  date?: string;
  children: React.ReactNode;
};

export default function ProjectLayout({
  title,
  subtitle,
  date,
  children,
}: ProjectLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle ? <p className="text-base">{subtitle}</p> : null}
        {date ? <p className="text-sm text-neutral-500">{date}</p> : null}
      </header>

      <section className="mt-10 space-y-6">{children}</section>
    </main>
  );
}
