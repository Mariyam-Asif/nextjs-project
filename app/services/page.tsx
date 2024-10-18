import Link from "next/link";

export default function Services() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        What I Deliver
      </h2>
      <p className="text-xl text-center font-semibold mb-6">
        Extraordinary Web Innovations &#8209; Turning Your Vision into Dynamic
        Realities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-500 rounded-lg shadow-lg transition transform hover:ring-4 hover:ring-blue-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Web Development
          </h3>
          <p className="text-white">
            I build responsive, fast, and accessible websites tailored to your
            needs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:ring-4 hover:ring-blue-400 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-500 mb-8">
            App Design
          </h3>
          <p className="text-blue-500">
            I specialize in creating visually stunning, highly intuitive, and
            user-friendly interfaces.
          </p>
        </div>
        <div className="p-6 bg-blue-500 rounded-lg shadow-lg transition transform hover:ring-4 hover:ring-blue-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-4">
            SEO Optimization
          </h3>
          <p className="text-white">
            Increase your online visibility and drive more traffic to your site.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:ring-4 hover:ring-blue-400 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-500 mb-8">
            Content Writing
          </h3>
          <p className="text-blue-500">
            Engaging and SEO-optimized content to enhance your brand&apos;s
            message and reach.
          </p>
        </div>
        <div className="p-6 bg-blue-500 rounded-lg shadow-lg transition transform hover:ring-4 hover:ring-blue-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Digital Marketing
          </h3>
          <p className="text-white">
            Comprehensive digital marketing strategies to boost your online
            presence and drive sales.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg transition transform hover:ring-4 hover:ring-blue-400 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-500 mb-8">
            E-commerce Solutions
          </h3>
          <p className="text-blue-500">
            Tailored e-commerce platforms to help you sell online seamlessly and
            effectively.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-3 text-center">
          <Link
            href="/contact"
            className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-700 inline-block"
          >
            Let&apos;s build something extraordinary together!
          </Link>
        </div>
      </div>
    </section>
  );
}
