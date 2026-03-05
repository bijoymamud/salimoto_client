
import { useState, useEffect, useRef } from "react";
import { IoIosEye } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function RecentContent() {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const tableData = [
        { id: 1, title: "Dua for Morning Protection", type: "Dua", category: "Morning Azkar", status: "Published", date: "Mar 3, 2026" },
        { id: 2, title: "The Virtue of Patience", type: "Hadith", category: "Ethics", status: "rejected", date: "Mar 3, 2026" },
        { id: 3, title: "Dua Before Sleep", type: "Dua", category: "Salah", status: "Published", date: "Mar 3, 2026" },
        { id: 4, title: "Dua for Morning Protection", type: "Dua", category: "Morning Azkar", status: "draft", date: "Mar 3, 2026" },
        { id: 5, title: "Dua for Morning Protection", type: "Dua", category: "Morning Azkar", status: "Published", date: "Mar 3, 2026" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = (id) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    return (
        <div>
            <div>
                <h2 className="text-[#1F1F1F] text-[18px] font-semibold">All Contents</h2>
                <p className="text-[#6A7282] text-[14px]">Latest updates to your content library</p>
            </div>

            <div className="pt-10">
                <table className="w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Title</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Type</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Category</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Status</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Date</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-center text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F9F9F9]">
                        {tableData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors relative hover:cursor-pointer">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{row.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500">
                                        {row.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-3 py-1 rounded-full capitalize text-white text-[11px] font-bold tracking-wider ${row.status === "Published" ? "bg-green-500" :
                                        row.status === "rejected" ? "bg-red-500" :
                                            "bg-yellow-500"
                                        }`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.date}</td>

                                {/* 3-DOT ACTION COLUMN */}
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="relative inline-block text-left" ref={activeMenu === row.id ? menuRef : null}>
                                        <button
                                            onClick={() => toggleMenu(row.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-all"
                                        >
                                            <BsThreeDots size={20} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeMenu === row.id && (
                                            <div className="absolute right-0 mt-2 top-8 z-[100] w-32 bg-white rounded-sm shadow-xl border border-gray-100 z-50 overflow-hidden py-1 animate-in fade-in zoom-in duration-200">
                                                <Link
                                                    to={`/content_details/${row.id}`}
                                                    state={{ row }}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-[#8C60F51A] hover:text-[#8C60F5] transition-colors"
                                                >
                                                    <IoIosEye size={18} /> View
                                                </Link>
                                                <button
                                                    onClick={() => navigate(`/edit_content/${row.id}`, { state: { row } })}
                                                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-[#8C60F51A] hover:text-[#8C60F5] transition-colors text-left"
                                                >
                                                    <FiEdit size={16} /> Edit
                                                </button>
                                            </div>
                                        )}
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