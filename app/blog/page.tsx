import Link from "next/link";

export default function Blog() {
    return (
        <div className="container mx-auto p-6">
            <header className="bg-blue-500 text-white p-6 rounded-lg mb-6 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">MY BLOG</h1>
                <p className="text-lg mb-4 text-black">Exploring fresh ideas, insights, and experiences &#8209; dive in and discover more!</p>
                   
                   {/*Buttons*/}
                    <div className="space-x-4">
                    <Link href="/about" className="px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200">Learn More</Link>
                    <Link href="/contact" className="px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200">Contact</Link>
                    <Link href="/" className="px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200 ">Home</Link>
                </div>
            </header>

            {/* Newsletter Sign-up Form */}
            <div className="flex justify-between items-center bg-gray-100 rounded-lg mb-6">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sign Up to Our Newsletter</h3>
                </div>
                <div className="flex space-x-2 items-center">
                <form>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                    />
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                    />
                    
                    <button type="submit" className="px-4 py-2 bg-black text-white hover:bg-gray-800">
                        Subscribe
                    </button>
                    </form>
                </div>
            </div>

            {/* Blog Post Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/*First Blog Post*/}
            <article className="bg-white p-6 rounded-lg shadow-md transition transform hover:ring-4 hover:ring-gray-200 hover:scale-105">
                <h2 className="text-2xl font-semibold text-gray-800">Blog Post Title</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas in, eaque omnis officiis hic eum doloremque! Ipsam quos aliquid quia...</p>
                <Link href="/contact" className="text-blue-600 hover:underline">Get in touch</Link>
            </article>

            {/*Second Blog Post*/}
            <article className="bg-white p-6 rounded-lg shadow-md transition transform hover:ring-4 hover:ring-gray-200 hover:scale-105">
                <h2 className="text-2xl font-semibold text-gray-800">Blog Post Title</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio illum quibusdam laborum deleniti possimus, consequatur laudantium non recusandae totam cum...</p>
                <Link href="/contact" className="text-blue-600 hover:underline">Get in touch</Link>
            </article>
            
            {/*Third Blog Post*/}
            <article className="bg-white p-6 rounded-lg shadow-md transition transform hover:ring-4 hover:ring-gray-200 hover:scale-105">
                <h2 className="text-2xl font-semibold text-gray-800">Blog Post Title</h2>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic quam ex quasi facilis aut fugiat autem, id maiores cumque...</p>
                <Link href="/contact" className="text-blue-600 hover:underline">Get in touch</Link>
            </article>
                        
            {/*Fourth Blog Post*/}
            <article className="bg-white p-6 rounded-lg shadow-md transition transform hover:ring-4 hover:ring-gray-200 hover:scale-105">
                <h2 className="text-2xl font-semibold text-gray-800">Blog Post Title</h2>
                <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro beatae asperiores adipisci minima necessitatibus neque molestiae dolor sapiente illum similique...</p>
                <Link href="/contact" className="text-blue-600 hover:underline">Get in touch</Link>
            </article>
        </div>  
        </div>
    );
}