
function DashboardSkeleton() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[250px] h-screen bg-white p-4 border-r">
          <div className="h-10 w-32 bg-gray-200 animate-pulse rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 w-3/5 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="absolute bottom-6 left-6 h-10 w-20 bg-gray-200 animate-pulse rounded"></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="h-8 w-40 bg-gray-200 animate-pulse rounded"></div>
            <div className="flex gap-4">
              <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-8 w-28 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card Skeleton */}
            <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">
              <div className="h-5 w-32 bg-gray-200 mb-3 rounded"></div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-40 w-full bg-gray-200 rounded"></div>
            </div>

            {/* Repeat card */}
            <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">
              <div className="h-5 w-32 bg-gray-200 mb-3 rounded"></div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-40 w-full bg-gray-200 rounded"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">
              <div className="h-5 w-32 bg-gray-200 mb-3 rounded"></div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-40 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSkeleton;
