


import React, { useState } from 'react';
import { FiEdit3, FiTrash2, FiPlus, FiX, FiEdit } from "react-icons/fi";

export default function Category() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusActive, setStatusActive] = useState(true);

    const categories = [
        { id: 1, name: "The Virtue of Patience", totalContent: "Dua for Morning Protection", type: "Dua", status: "Active", order: 1 },
        { id: 2, name: "Hadith on Kindness", totalContent: "Dua for Morning Protection", type: "Hadith", status: "Active", order: 4 },
        { id: 3, name: "The Importance of Prayer", totalContent: "Dua for Morning Protection", type: "Dua", status: "Inactive", order: 2 },
        { id: 4, name: "Charity and Its Rewards", totalContent: "Dua for Morning Protection", type: "Hadith", status: "Active", order: 1 },
    ];

    return (
        <div className="min-h-screen relative">
            {/* Header Section */}
            <div className="flex justify-end mb-8">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-b shadow-md flex  items-center py-3 gap-2 from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-base font-semibold rounded-full hover:cursor-pointer"
                >
                    <FiPlus size={18} /> Add Category
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-50">
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider uppercase tracking-wider">Category Name</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider uppercase tracking-wider">Total Content</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider text-center uppercase tracking-wider">Status</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider text-center uppercase tracking-wider">Sort Order</th>
                            <th className="px-6 border-b border-gray-200 py-3 text-left text-[16px] font-semibold border-[#F9F9F9] uppercase tracking-wider text-right uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {categories.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 hover:cursor-pointer transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{item.name}</td>
                                <td className="px-6 py-5 text-sm text-gray-500">
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-[#4A5565] text-[14px]'>{item.totalContent}</span>
                                        <span className='border  w-[80px] py-1 rounded-full text-center text-[#1F1F1F]'>{item?.type}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <span className={`px-4 py-1 w-[80px] border text-[14px] rounded-full text-[11px] font-bold ${item.status === 'Active' ? 'bg-[#E6F9F4] text-[#00B69B]' : 'bg-[#F2F4F7] text-[#667085]'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-center text-sm text-gray-500">{item.order}</td>
                                <td className="px-6 py-5 text-right">
                                    <div className="flex items-center justify-end gap-3 text-gray-400">
                                        <FiEdit className="cursor-pointer hover:text-blue-500" size={18} />
                                        <FiTrash2 className="cursor-pointer hover:text-red-500" size={18} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL OVERLAY MATCHING image_ea4d99.png */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
                    <div className="bg-white w-full max-w-[580px] rounded-[28px] p-10 shadow-2xl relative animate-in fade-in zoom-in duration-200">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-8 top-8 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <FiX size={24} />
                        </button>

                        <h2 className="text-[24px] font-bold text-[#1F1F1F] mb-8">Add New Category</h2>

                        <div className="space-y-8">
                            {/* Input Field */}
                            <div>
                                <label className="block text-[15px] font-bold text-[#1F1F1F] mb-3">
                                    Category Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter category name"
                                    className="w-full px-5 py-4 bg-[#F8F9FB] rounded-full border-2 outline-none text-[#1F1F1F] placeholder:text-gray-400 focus:ring-2 focus:ring-[#24C3F3]/20 transition-all"
                                />
                            </div>

                            {/* Status Toggle matching design */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[15px] font-bold text-[#1F1F1F]">Status</p>
                                    <p className={`text-[13px] mt-0.5 ${statusActive ? 'text-[#00B69B]' : 'text-gray-400'}`}>
                                        {statusActive ? 'Active' : 'Inactive'}
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer "
                                        checked={statusActive}
                                        onChange={() => setStatusActive(!statusActive)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer 
                                            peer-checked:bg-green-500
                                            after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                                            after:bg-white after:border after:rounded-full after:h-5 after:w-5
                                            after:transition-all
                                            peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>

                            {/* Footer Buttons */}
                            <div className="flex items-center justify-end gap-4 pt-6">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-12 py-3 hover:bg-red-100 text-base  border-2 border-gray-300 text-gray-800 rounded-full font-bold text-gray-600 hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gradient-to-b shadow-md flex  items-center py-3 gap-2 from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-base font-semibold rounded-full hover:cursor-pointer">
                                    Save Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}