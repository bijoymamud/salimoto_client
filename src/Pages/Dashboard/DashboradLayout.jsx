

import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { GoImage } from "react-icons/go";
import {
  LayoutDashboard,
  BookOpen,
  BookText,
  Headphones,
  Video,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import categoryIcon from "../../assets/category.png";
import mediaAdsIcon from "../../assets/imageMedia.png";
import logo from "../../assets/hisnii.png";
import { useAdmin } from "../../Hooks/UseAdmin";
import { NotPermit } from "../NotPermit/NotPermit";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { isAdmin, loading } = useAdmin();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={22} />,
      path: "/",
    },
    {
      name: "Dua Management",
      icon: <BookOpen size={22} />,
      path: "/dua_management",
    },
    {
      name: "Hadith Management",
      icon: <BookText size={22} />,
      path: "/hadith_management",
    },
    {
      name: "Audio Library",
      icon: <Headphones size={22} />,
      path: "/audio_library",
    },
    {
      name: "Video Library",
      icon: <Video size={22} />,
      path: "/video_library",
    },
    {
      name: "Media & Ads",
      icon: <img src={mediaAdsIcon} alt="media & ads" className="w-5 h-5" />,
      path: "/media_ads",
    },
    {
      name: "Categories",
      icon: <img src={categoryIcon} alt="Categories" className="w-5 h-5" />,
      path: "/categories",
    },
    {
      name: "Settings",
      icon: <Settings size={22} />,
      path: "/settings",
    },
  ];

  const checkIsActive = (itemPath, currentPath) => {
    if (itemPath === "/") {
      return (
        currentPath === "/" ||
        currentPath.startsWith("/content_details") ||
        currentPath.startsWith("/dua_details") ||
        currentPath.startsWith("/edit_content") ||
        currentPath.startsWith("/edit_dua") ||
        currentPath.startsWith("/add_dua") ||
        currentPath.startsWith("/add_hadith") ||
        currentPath.startsWith("/edit_hadith") ||
        currentPath.startsWith("/video_details")
      );
    }
    return currentPath.startsWith(itemPath);
  };

  // Find current item for header by checking reverse to match more specific routes first, 
  // or just filter to find the one that is active.
  const currentItem = [...menuItems].reverse().find((item) => checkIsActive(item.path, location.pathname));

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8C60F5]"></div>
      </div>
    );
  }

  if (!isAdmin) return <NotPermit />;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${isCollapsed ? "w-24" : "w-72"
          } bg-gradient-to-b from-[#8C60F5] to-[#4CA7EB] text-white transition-all duration-300 ease-in-out flex flex-col shrink-0`}
      >
        {/* Logo Section */}
        <div className={`h-24 flex items-center ${isCollapsed ? "justify-center" : "px-6"} mb-4 border-b-2 border-white/20`}>
          <div className="flex items-center gap-3">
            <div className="rounded-full flex items-center justify-center shrink-0">
              <img src={logo} alt="Hisnii Logo" className="h-[47px] w-[47px]" />
            </div>
            {!isCollapsed && (
              <span className="text-2xl font-bold tracking-wider uppercase truncate">
                Hisnii
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-4 py-5 overflow-y-auto custom-scrollbar">


          {menuItems.map((item) => {
            const isActive = checkIsActive(item.path, location.pathname);

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center transition-all duration-200 group rounded-full
                  ${isCollapsed ? "justify-center h-12 w-12 mx-auto" : "px-4 py-3 gap-4 w-full"}
                  ${isActive
                    ? "bg-gradient-to-b from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg"
                    : "hover:bg-white/10 text-white/90"
                  }`}
              >
                <span className={`shrink-0 ${isActive ? "text-white" : "text-white/80"}`}>
                  {item.icon}
                </span>
                {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* top bar */}
        <header className="h-16 bg-white border-b-2 border-gray-200 py-10  flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
            >
              {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
            </button>
            <h1 className="text-xl font-bold text-gray-800">
              {currentItem ? currentItem.name : "Management"}
              <p className="text-sm font-normal text-sm text-gray-500">Welcome back! Here's your content overview.</p>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right mr-2 hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">Hisnii</p>
              <p className="text-xs text-gray-500">hisniitest@gmail.com</p>
            </div>
            <div className="w-10 h-10 ">

              <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="user image" className="rounded-full" />

            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 lg:p-8 bg-[#F8FAFC]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}