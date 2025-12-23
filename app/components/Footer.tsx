import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-8 text-sm text-gray-600">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nick Carpenter</p>

        <div className="flex gap-4">
          <Link href="/projects" className="underline">
            Projects
          </Link>
          <Link href="/about" className="underline">
            About
          </Link>
          <Link href="/contact" className="underline">
            Contact
          </Link>
          {/* Optional later */}
          {/* <Link href="/resume" className="underline">
            Resume
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
