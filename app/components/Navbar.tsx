import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">My Project</h1>
        <nav className="flex space-x-4">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/services" className="nav-link">
                Services
              </Link>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
        </nav>
      </div>
    </header>
  );
}
