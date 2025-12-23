import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-3xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Home */}
        <Link href="/" className="font-semibold tracking-tight">
          Nick Carpenter
        </Link>

        {/* Right: Nav */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/projects" className="underline underline-offset-4">
            Projects
          </Link>
          <Link href="/about" className="underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
