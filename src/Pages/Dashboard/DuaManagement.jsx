import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function DuaManagement() {
    const navigate = useNavigate();

    // Mock data matching the headers in your image
    const [tableData, setTableData] = useState([
        { id: 1, title: "Dua for Morning Protection", category: "Morning Azkar", arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...", audio: "Available", published: true },
        { id: 2, title: "The Virtue of Patience", category: "Morning Azkar", arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...", audio: "Missing", published: false },
        { id: 3, title: "Dua Before Sleep", category: "Morning Azkar", arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...", audio: "Available", published: true },
        { id: 4, title: "Dua for Morning Protection", category: "Morning Azkar", arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...", audio: "Missing", published: false },
        { id: 5, title: "Dua for Morning Protection", category: "Morning Azkar", arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...", audio: "Available", published: true },
    ]);

    const handleToggle = (id) => {
        setTableData(prev => prev.map(item =>
            item.id === id ? { ...item, published: !item.published } : item
        ));
    };

    return (
        <div className="w-full p-2">
            {/* Header with Add Button matching image_831564.png */}
            <div className="flex justify-between items-center mb-10">
                <div>

                </div>
                <button
                    onClick={() => navigate("/dua_management/add_dua")}
                    className="bg-gradient-to-b shadow-md flex items-center gap-2 from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-sm font-semibold rounded-full hover:cursor-pointer"
                >
                    <span className="text-2xl font-light">+</span>Add New Dua
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white  overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-50">
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Dua Title</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Category</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Arabic Preview</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Audio Status</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Published</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {tableData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors relative hover:cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{row.title}</td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.category}</td>
                                {/* Arabic Preview with RTL support */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" dir="rtl">
                                    {row.arabic}
                                </td>
                                {/* Audio Status Badge */}
                                <td className="px-6 py-5">
                                    <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide ${row.audio === "Available"
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                        }`}>
                                        {row.audio}
                                    </span>
                                </td>

                                {/* Toggle Switch */}
                                <td className="px-6 py-5">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={row.published}
                                            onChange={() => handleToggle(row.id)}
                                        />

                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer 
                                            peer-checked:bg-green-500
                                            after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                                            after:bg-white after:border after:rounded-full after:h-5 after:w-5
                                            after:transition-all
                                            peer-checked:after:translate-x-full">
                                        </div>
                                    </label>
                                </td>

                                {/* Actions Icons (Eye, Edit, Trash) */}
                                <td className="px-6 py-5">
                                    <div className="flex items-center justify-center gap-4">
                                        <Link
                                            to={`/dua_management/dua_details/${row.id}`}
                                            className="p-1.5 text-[#8C60F5] hover:bg-[#8C60F512] rounded-full transition-all"
                                            title="View"
                                            state={{ row }}
                                        >
                                            <IoIosEye size={22} />
                                        </Link>
                                        <Link
                                            to={`/dua_management/edit_dua/${row.id}`}
                                            className="p-1.5 text-[#4CA7EB] hover:bg-[#4CA7EB12] rounded-full transition-all"
                                            title="Edit"
                                            state={{ row }}
                                        >
                                            <FiEdit size={18} />
                                        </Link>
                                        <button
                                            className="p-1.5 text-[#EF4444] hover:bg-[#EF444412] rounded-full transition-all"
                                            title="Delete"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}