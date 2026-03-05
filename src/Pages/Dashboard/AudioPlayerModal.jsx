
import { IoClose } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

export default function AudioPlayerModal({ audio, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white w-[600px] rounded-2xl shadow-2xl p-6 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[20px] font-bold text-[#1F1F1F]">Audio Player</h3>
                    <button onClick={onClose} className="text-gray-400 hover:bg-gray-100 p-1 rounded-full hover:text-gray-600 transition-colors">
                        <IoClose size={24} />
                    </button>
                </div>

                {/* Info Card */}
                <div className="bg-[#F6F4FF] rounded-xl p-6 mb-8">
                    <h4 className="text-[18px] font-bold text-[#1F1F1F] mb-1">{audio.linked}</h4>
                    <p className="text-gray-400 text-sm mb-2">morning_protection_dua.mp3</p>
                    <p className="text-gray-400 text-sm">{audio.duration} • {audio.size}</p>
                </div>

                {/* Play Controls */}
                <div className="flex flex-col items-center gap-10">
                    <button className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8C60F5] to-[#4CA7EB] text-white shadow-lg hover:scale-105 transition-transform">
                        <FaPlay size={20} className="ml-1" />
                    </button>

                    {/* Progress Bar */}
                    <div className="w-full">
                        <div className="relative w-full h-1.5 bg-gray-100 rounded-full">
                            <div className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-[#8C60F5] to-[#4CA7EB] rounded-full"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
                            <span>0:00</span>
                            <span>{audio.duration}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}