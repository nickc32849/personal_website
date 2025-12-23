import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-3xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Name */}
        <Link href="/" className="font-semibold tracking-tight">
          Nick Carpenter
        </Link>

        {/* Right: Nav */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/projects" className="hover:text-white underline-offset-4 hover:underline">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white underline-offset-4 hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:text-white underline-offset-4 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
