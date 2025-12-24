import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto max-w-3xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            Nick Carpenter
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/projects"
              className="hover:opacity-80 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:opacity-80 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
