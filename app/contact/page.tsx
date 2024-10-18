export default async function Contact() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">Get In Touch</h1>
            <p className="text-lg font-semibold text-gray-600 mb-3 text-center">Reach out now, and let's <span className="text-blue-500">make your vision a reality.</span></p>
            <form>
                <label className="block mb-2 text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter Your Name"/>

                <label className="block mb-2 text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter Your Email"/>

                <label className="block mb-2 text-gray-700">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter Your Message"></textarea>

                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Send Message</button>
            </form>
        </div>
    );
}