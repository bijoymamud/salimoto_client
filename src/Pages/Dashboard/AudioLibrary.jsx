import { useState } from "react";
import { FaPlay, FaDownload, FaRegTrashAlt } from "react-icons/fa";
import AudioPlayerModal from "./AudioPlayerModal";

const audioData = [
    { id: 1, name: "The Virtue of Patience", linked: "Dua for Morning Protection", type: "Dua", duration: "0:34", size: "1.2 MB", date: "Mar 1, 2026", file: "patience.mp3" },
    { id: 2, name: "Hadith on Kindness", linked: "Dua for Morning Protection", type: "Hadith", duration: "0:34", size: "1.2 MB", date: "Mar 1, 2026", file: "kindness.mp3" },
    { id: 3, name: "The Importance of Prayer", linked: "Dua for Morning Protection", type: "Dua", duration: "0:34", size: "1.2 MB", date: "Mar 1, 2026", file: "prayer.mp3" },
    { id: 4, name: "Charity and Its Rewards", linked: "Dua for Morning Protection", type: "Hadith", duration: "0:34", size: "1.2 MB", date: "Mar 1, 2026", file: "charity.mp3" },
];

export default function AudioLibrary() {
    const [selectedAudio, setSelectedAudio] = useState(null);

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-[#1F1F1F] text-sm border-b border-gray-100">
                        <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Audio Name</th>
                        <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Linked Content</th>
                        <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Duration</th>
                        <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">File Size</th>
                        <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Upload Date</th>
                        <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {audioData.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors relative hover:cursor-pointer">
                            <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-700">{item.name}</td>
                            <td className="px-4 py-4">
                                <div className="text-sm text-gray-600 mb-1 text-[#4A5565]">{item.linked}</div>
                                <span className="px-3 py-0.5 text-[11px] border border-gray-200 font-bold rounded-full text-[#1F1F1F]">
                                    {item.type}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-500">{item.duration}</td>
                            <td className="px-4 py-3 text-sm text-gray-500">{item.size}</td>
                            <td className="px-4 py-3 text-sm text-gray-500">{item.date}</td>
                            <td className="px-4 py-3">
                                <div className="flex items-center justify-end gap-6">
                                    <button
                                        onClick={() => setSelectedAudio(item)}
                                        className="flex items-center gap-2 text-[#8C60F5] font-semibold text-sm hover:opacity-80"
                                    >
                                        <FaPlay size={12} /> Play
                                    </button>
                                    <button className="flex items-center gap-2 text-[#10B981] font-semibold text-sm hover:opacity-80">
                                        <FaDownload size={14} /> Download
                                    </button>
                                    <button className="text-[#EF4444] hover:opacity-80">
                                        <FaRegTrashAlt size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Audio Modal */}
            {selectedAudio && (
                <AudioPlayerModal
                    audio={selectedAudio}
                    onClose={() => setSelectedAudio(null)}
                />
            )}
        </div>
    );
}