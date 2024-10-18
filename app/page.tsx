import Link from "next/link";
export default function Home() {
  return (
    <section className="bg-gray-50 text-center py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to MyProject
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover amazing features and an exceptional user experience.
        </p>
        <Link
          href="/about"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
