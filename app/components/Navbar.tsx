import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-3xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Name / Home link */}
        <Link href="/" className="font-semibold">
          Nick Carpenter
        </Link>

        {/* Navigation links */}
        <div className="flex gap-4 text-sm">
          <Link href="/projects" className="underline">
            Projects
          </Link>
          <Link href="/about" className="underline">
            About
          </Link>
          <Link href="/contact" className="underline">
            Contact
          </Link>
          {/* Add later if/when you want */}
          {/* <Link href="/resume" className="underline">
            Resume
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
