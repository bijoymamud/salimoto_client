// import React from 'react'

// export const VideoDetails = () => {
//     return (
//         <div>VideoDetails</div>
//     )
// }


import React from 'react';
import {
    ArrowLeft, Edit2, Trash2, ExternalLink,
    TrendingUp, Users, Play, Eye, ThumbsUp, Share2
} from 'lucide-react';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function VideoDetails() {
    const navigate = useNavigate();
    const dailyViews = [
        { date: 'Feb 28', views: 1234, width: '25%' },
        { date: 'Mar 1', views: 2156, width: '45%' },
        { date: 'Mar 2', views: 3421, width: '75%' },
        { date: 'Mar 3', views: 4789, width: '100%' },
        { date: 'Mar 4', views: 3634, width: '80%' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-6  text-slate-700">
            {/* Top Navigation */}
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center px-4 py-2 bg-white border border-[#E5E7EB] rounded-full text-sm font-medium hover:bg-slate-50">
                    <ArrowLeft size={18} className="mr-2" /> Back
                </button>
                <div className="flex gap-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-[#E5E7EB] rounded-full text-sm font-medium hover:bg-slate-50">
                        <FiEdit size={16} className="mr-2" /> Edit
                    </button>
                    <button className="flex items-center px-4 py-2 bg-white border border-red-100 text-red-500 rounded-full text-sm font-medium hover:bg-red-50">
                        <Trash2 size={16} className="mr-2" /> Delete
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column: Main Content */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Video Preview Card */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                        <div className="relative aspect-video bg-slate-200">
                            <div className="w-full aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/EFUSvjts3HQ"
                                    title="YouTube video player"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                <button className="w-16 h-16 bg-indigo-500/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:scale-105 transition">
                                    <Play fill="currentColor" size={28} className="ml-1" />
                                </button>
                            </div> */}
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-800">The Beautiful Names of Allah</h1>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full uppercase tracking-wider">Islamic Knowledge</span>
                                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full uppercase tracking-wider">Published</span>
                                        <span className="text-slate-400 text-sm ml-2">12:45</span>
                                    </div>
                                </div>
                                <button className="flex items-center px-4 py-3 bg-[#8C60F5] text-white rounded-full text-sm font-medium  shadow-lg">
                                    <ExternalLink size={18} className="me-2" />  Open in YouTube
                                </button>
                            </div>

                            <div className="grid grid-cols-3 border-y border-slate-100 py-6 mb-4">
                                <div className="text-center border-r border-slate-100">
                                    <div className="flex items-center justify-center text-slate-400 mb-1"><Eye size={16} className="mr-2" /> Views</div>
                                    <div className="text-xl font-bold">15,234</div>
                                </div>
                                <div className="text-center border-r border-slate-100">
                                    <div className="flex items-center justify-center text-slate-400 mb-1"><ThumbsUp size={16} className="mr-2" /> Likes</div>
                                    <div className="text-xl font-bold">2,547</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center text-slate-400 mb-1"><Share2 size={16} className="mr-2" /> Shares</div>
                                    <div className="text-xl font-bold">489</div>
                                </div>
                            </div>

                            <div className="text-slate-400 text-sm mb-2 italic">Published on February 28, 2026</div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                An in-depth exploration of the 99 beautiful names of Allah (Asma ul Husna) and their meanings.
                                Understanding these names helps us develop a deeper connection with our Creator and enhances our worship and daily life.
                            </p>
                        </div>
                    </div>

                    {/* Daily Views Chart Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h3 className="flex items-center text-lg font-bold mb-6">
                            <TrendingUp size={20} className="mr-2 text-indigo-500" /> Daily Views (Last 5 Days)
                        </h3>
                        <div className="space-y-4">
                            {dailyViews.map((item) => (
                                <div key={item.date} className="flex items-center gap-4">
                                    <div className="w-16 text-sm text-slate-500 font-medium">{item.date}</div>
                                    <div className="flex-1 bg-slate-100 h-8 rounded-full overflow-hidden relative">
                                        <div
                                            className="h-full bg-[#8C60F5]/20 border-r-4 border-[#8C60F5] py-3 text-[#8C60F5] rounded-full flex items-center px-4"
                                            style={{ width: item.width }}
                                        >
                                            <span className="text-xs font-bold text-indigo-600">{item.views.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Performance Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Performance</h3>

                        <div className="space-y-4">
                            {/* Engagement Rate */}
                            <div className="flex items-center p-4 bg-[#8C60F50D]/5 rounded-2xl">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mr-4">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Engagement Rate</div>
                                    <div className="text-xl font-bold text-indigo-600">18.5%</div>
                                </div>
                            </div>

                            {/* Avg. Watch Time */}
                            <div className="flex items-center p-4 bg-[#4CA7EB0D]/5 rounded-2xl">
                                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mr-4">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Avg. Watch Time</div>
                                    <div className="text-xl font-bold text-sky-600">8:32</div>
                                </div>
                            </div>

                            {/* Completion Rate */}
                            <div className="flex items-center p-4 bg-[#18D1830D]/5 rounded-2xl">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mr-4">
                                    <Play size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Completion Rate</div>
                                    <div className="text-xl font-bold text-emerald-600">67%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

