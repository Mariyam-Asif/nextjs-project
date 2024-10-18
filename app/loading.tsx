export default function Loading(){
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        <p className="ml-4 text-gray-600">Loading...</p>
    </div>
    )
}