import React from "react";
import { FiUpload, FiSearch, FiEye, FiThumbsUp, FiShare2, FiVideo, FiEdit3, FiTrash2, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const stats = [
    { id: 1, label: "Total Videos", value: "5", sub: "4 Published", icon: <FiVideo />, color: "text-purple-500", bg: "bg-purple-50" },
    { id: 2, label: "Total Views", value: "104,734", sub: "All time", icon: <FiEye />, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 3, label: "Total Likes", value: "15,314", sub: "User engagement", icon: <FiThumbsUp />, color: "text-green-500", bg: "bg-green-50" },
    { id: 4, label: "Total Shares", value: "3,092", sub: "Content shared", icon: <FiShare2 />, color: "text-orange-500", bg: "bg-orange-50" },
];

const videos = [
    {
        id: 1,
        title: "The Beautiful Names of Allah",
        category: "Islamic Knowledge",
        status: "Published",
        views: "15,234",
        likes: "2,547",
        shares: "489",
        image: "https://img.freepik.com/premium-vector/eid-un-saeed-luxury-islamic-greeting-card-with-arabic-style-pattern-arch-border-frame_158840-771.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 2,
        title: "Stories of the Prophets - Prophet Ibrahim",
        category: "Islamic Knowledge",
        status: "Draft",
        views: "15,234",
        likes: "2,547",
        shares: "489",
        image: "https://cdng.europosters.eu/pod_public/1300/239571.jpg",
    },
];

export default function VideoLibrary() {
    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>

                </div>
                <Link to="/video_library/add_video"
                    className="bg-gradient-to-b shadow-md flex items-center gap-2  from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-sm font-semibold rounded-full hover:cursor-pointer"
                >
                    <span className="text-2xl py-2 font-light"><FiUpload className="h-5 w-5" /></span>Upload Video
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white p-5 rounded-2xl border border-gray-100 shadow-md 
    flex justify-between items-start cursor-pointer group 
    hover:shadow-lg transition-all duration-300"
                    >
                        <div>
                            <p className="text-xs text-gray-400 font-medium mb-1">
                                {stat.label}
                            </p>

                            <h3 className="text-3xl font-bold text-gray-800 
      group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>

                            <p className="text-[10px] text-gray-400 mt-1">
                                {stat.sub}
                            </p>
                        </div>

                        <div
                            className={`${stat.bg} ${stat.color} p-3 rounded-xl text-xl shadow-md 
      `}
                        >
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-[300px]">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search content..."
                        className="w-full pl-12 pr-4 shadow-md py-3 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-100"
                    />
                </div>
                <select className="px-6 py-3 shadow-md bg-white border border-gray-100 rounded-full text-sm text-gray-500 focus:outline-none">
                    <option>Select a status</option>
                    <option>Published</option>
                    <option>Draft</option>

                </select>
                <select className="px-6 py-3 bg-white border shadow-md border-gray-100 rounded-full text-sm text-gray-500 focus:outline-none">
                    <option>Select a category</option>
                    <option>Prayer Guide</option>
                    <option>Stories</option>
                    <option>Quran Reaction</option>
                </select>
            </div>

            {/* Video Grid */}

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-50 shadow-sm group relative">
                        <div className="relative h-80 overflow-hidden">
                            <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <Link
                                    to={`/video_library/edit_video/${video.id}`}
                                    className="p-3 bg-white text-[#4CA7EB] rounded-full hover:bg-[#4CA7EB] hover:text-white transition-all shadow-xl"
                                >
                                    <FiEdit size={20} />
                                </Link>
                                <button
                                    className="p-3 bg-white text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-xl"
                                >
                                    <FiTrash2 size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5 space-y-4">
                            <h4 className="font-bold text-gray-800 truncate text-[18px]">{video.title}</h4>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-purple-50 text-purple-500 border border-purple-100 uppercase">
                                    {video.category}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-[12px] font-bold uppercase ${video.status === 'Published' ? 'bg-green-50 text-green-500' : 'bg-gray-100 text-gray-500'}`}>
                                    {video.status}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-[16px] text-gray-400  pt-4">
                                <span className="flex items-center gap-1"><FiEye /> {video.views}</span>
                                <span className="flex items-center gap-1"><FiThumbsUp /> {video.likes}</span>
                                <span className="flex items-center gap-1"><FiShare2 /> {video.shares}</span>
                            </div>

                            <Link
                                to={`/video_library/video_details/${video.id}`}
                                state={{ video }}
                                className="bg-gradient-to-b shadow-md flex items-center gap-2 py-3 from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-[18px] flex items-center justify-center font-semibold rounded-full hover:cursor-pointer"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}