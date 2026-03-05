import { ArrowLeft, Edit3, Play } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const HadithDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const row = location.state?.row;


    //for handle loading
    // if (loading) {
    //     return (
    //         <div className="h-screen w-full flex items-center justify-center bg-white">
    //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8C60F5]"></div>
    //         </div>
    //     );
    // }

    if (!row) return <div className="p-8 text-gray-500">No data found.</div>;

    return (
        <div className=" mx-auto space-y-6">
            {/* Top Navigation Row */}
            <div className="flex items-center justify-end">
                <div className="flex items-center justify-center hover:bg-gray-100 border-2 border-gray-200 w-[100px] h-[40px] rounded-full">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 text-[#8C60F5] font-semibold hover:opacity-80 transition-all"
                    >
                        <ArrowLeft size={20} /> Back
                    </button>

                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-[#1F1F1F]">{row.title}</h1>
                    <div className="flex gap-3">
                        <span className="px-4 py-1.5 rounded-full border-2 text-[12px] border-gray-200 font-medium text-[#1F1F1F]">
                            {row.category}
                        </span>
                        {row.status && (
                            <span className="px-4 flex items-center justify-center py-1.5 rounded-full bg-green-50 text-green-500 text-[12px] font-bold uppercase">
                                {row.status}
                            </span>
                        )}
                    </div>
                </div>

                {/* Audio Player Section */}
                <div className="mt-8 bg-[#F8F9FF] rounded-2xl p-6 flex items-center gap-6 border border-gray-50">
                    <button className="w-12 h-12 bg-[#8C60F5] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <Play fill="currentColor" size={20} />
                    </button>
                    <div className="flex-1 space-y-1">
                        <div className="flex justify-between text-[11px] font-bold text-[#8C60F5] uppercase tracking-wider">
                            <span>Audio Recitation</span>
                            <span className="text-gray-400 font-normal">0:34</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#8C60F5] to-[#4CA7EB] w-[40%]" />
                        </div>
                    </div>
                </div>

                {/* Text Sections */}
                <div className="mt-12 space-y-10 text-center">
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Arabic Text</p>
                        <p className="text-4xl font-bold leading-relaxed text-[#1F1F1F] font-arabic italic" dir="rtl">
                            بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                        </p>
                    </div>

                    <div className="text-left border-t border-gray-50 pt-10">
                        <p className="text-[18px] font-bold text-[#1F1F1F] mb-3">English Translation</p>
                        <p className="text-gray-600 leading-relaxed italic">
                            "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Hearing, The All-Knowing."
                        </p>
                    </div>
                </div>

                {/* Reference Box */}
                <div className="mt-10 bg-[#4CA7EB0D]/5 rounded-xl p-6  ">
                    <p className="text-[14px] font-bold text-[#4CA7EB] uppercase tracking-wider mb-2">Reference</p>
                    <p className="text-gray-700 font-medium italic text-sm">Sahih Bukhari 6114, Sahih Muslim 2609</p>
                </div>
            </div>
        </div>
    );
};