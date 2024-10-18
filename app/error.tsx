"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          We are working on fixing it.
        </p>
        <Link href="/" className="text-blue-600 hover:underline mt-8">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
