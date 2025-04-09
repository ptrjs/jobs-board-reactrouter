import { Link, useLocation } from "react-router";

export function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/jobs", label: "Jobs", icon: "💼" },
    { path: "/applications", label: "Applications", icon: "📝" },
    { path: "/profile", label: "Profile", icon: "👤" },
    { path: "/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="bg-gray-800 w-64 min-h-screen fixed left-0 top-0 pt-16">
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-100">Jobs Board</h2>
          <p className="text-gray-400 text-sm">Find your dream job here!</p>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 