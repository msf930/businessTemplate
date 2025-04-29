export default function BlogGridSkeleton() {
    return (
        <div className="p-4 rounded-2xl shadow-md bg-gray-100 w-full max-w-md animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
    );
}