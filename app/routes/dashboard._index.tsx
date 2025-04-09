import type { Route } from "./+types/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Jobs Board" },
    { name: "description", content: "Your jobs board dashboard" },
  ];
}

export default function DashboardIndex() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Total Jobs</h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Applications</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Interviews</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Offers</h3>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Applications</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-600 rounded">
                <div>
                  <p className="font-medium">Senior Developer</p>
                  <p className="text-sm text-gray-400">Tech Corp</p>
                </div>
                <span className="px-2 py-1 bg-blue-600 rounded text-xs">Applied</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Upcoming Interviews</h2>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-600 rounded">
                <div>
                  <p className="font-medium">Frontend Developer</p>
                  <p className="text-sm text-gray-400">Web Solutions Inc</p>
                </div>
                <span className="px-2 py-1 bg-green-600 rounded text-xs">Tomorrow</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 