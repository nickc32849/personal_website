import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-base">
          Best way to reach me is email. I usually respond within 1&ndash;2
          days.
        </p>
      </header>

      <section className="mt-10 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Email</h2>
          <a
            href="mailto:carpenter.ni@northeastern.edu"
            className="hover:opacity-80 transition-opacity"
          >
            carpenter.ni@northeastern.edu
          </a>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">LinkedIn</h2>
          <a
            className="underline"
            href="https://www.linkedin.com/in/nicholas-carpenter-083649326"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">GitHub</h2>
          <a
            className="underline"
            href="https://github.com/nickc32849"
            target="_blank"
            rel="noreferrer"
          >
            View my projects on GitHub
          </a>
        </div>

        <div className="pt-2">
          <Link href="/projects" className="underline text-sm">
            View projects &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
