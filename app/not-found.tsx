import Link from "next/link";

export default function NotFound(){
return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Go Back Home</Link>
    </div>
)}