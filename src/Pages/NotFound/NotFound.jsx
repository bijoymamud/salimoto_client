import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import notFound from "../../assets/NotFound.json";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Lottie Animation Container */}
        <div className="relative md:mb-8 transform hover:scale-105 transition-transform duration-500">
          <div className="w-64  drop-shadow-2xl">
            <Lottie animationData={notFound} loop={true} />
          </div>
          {/* Theme-matched Glow Effect */}
          <div className="absolute inset-0 bg-[#8C60F5] opacity-10 blur-[100px] -z-10 rounded-full"></div>
        </div>

        <div className="space-y-4 mb-8">
          {/* Gradient Text for 404 */}
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-b from-[#8C60F5] to-[#4CA7EB] bg-clip-text text-transparent tracking-tight">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 max-w-2xl md:max-w-xl mx-auto md:text-lg text-sm font-medium leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
            Don't worry, you can find your way back using the buttons below.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-10  py-3 bg-gradient-to-r from-[#18D1E3] to-[#4CA7EB] text-white uppercase font-bold md:rounded-full rounded-lg shadow-lg shadow-cyan-200 hover:shadow-cyan-300 hover:-translate-y-1 transition-all duration-300"
          >
            Go To Dashboard
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-10  py-3 border-2 border-[#8C60F5] uppercase text-[#8C60F5] font-bold md:rounded-full rounded-lg hover:bg-[#8C60F5]/5 transition-all duration-300"
          >
            Previous Page
          </button>
        </div>

        {/* Quick Links with Theme Colors */}
        <div className="md:mt-16 mt-10 pt-6 border-t border-gray-200 w-full max-w-md">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">
            Quick Navigation
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "Dashboard", to: "/" },
              { label: "Dua Management", to: "/dua" },
              { label: "Settings", to: "/settings" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-semibold text-[#8C60F5] hover:text-[#4CA7EB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;