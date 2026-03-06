import {
    ArrowLeft, Trash2, ExternalLink,
    TrendingUp, Play, Eye, ThumbsUp, Share2,
    TrendingUpIcon,
    Users2Icon
} from 'lucide-react';
import { FiEdit } from 'react-icons/fi';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function VideoDetails() {
    const id = useParams();
    const location = useLocation()
    const navigate = useNavigate();
    const video = location.state?.video;
    console.log(video, 'video from library')

    const dailyViews = [
        { date: 'Feb 28', views: 1234, width: '25%' },
        { date: 'Mar 1', views: 2156, width: '45%' },
        { date: 'Mar 2', views: 3421, width: '75%' },
        { date: 'Mar 3', views: 4789, width: '100%' },
        { date: 'Mar 4', views: 3634, width: '80%' },
    ];

    const analyticsStats = [
        {
            label: "Engagement Rate",
            value: "18.5%",
            icon: <TrendingUpIcon size={24} />,
            bg: "bg-[#8C60F5]/5",
            iconBg: "bg-[#8C60F5]/10",
            color: "text-[#8C60F5]",
        },
        {
            label: "Avg. Watch Time",
            value: "8:32",
            icon: <Users2Icon size={24} />,
            bg: "bg-[#4CA7EB]/5",
            iconBg: "bg-[#4CA7EB]/10",
            color: "text-[#4CA7EB]",
        },
        {
            label: "Completion Rate",
            value: "67%",
            icon: <Play size={24} />,
            bg: "bg-[#18D1830D]/5",
            iconBg: "bg-[#18D1831A]/10",
            color: "text-[#18D183]",
        },
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
                    <Link
                        to={`/video_library/edit_video/${video?.id}`}
                        className="flex items-center px-4 py-2 bg-white border border-[#E5E7EB] rounded-full text-sm font-medium hover:bg-slate-50">
                        <FiEdit size={16} className="mr-2" /> Edit
                    </Link>
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
                                <button className="flex items-center px-4 py-3 bg-[#8C60F5] text-white rounded-full text-[16px] font-medium  shadow-lg">
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
                        <h3 className="flex items-center  font-bold mb-6 !text-[20px]">
                            <TrendingUp size={24} className="mr-2 text-indigo-500 " /> Daily Views (Last 5 Days)
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

                        <div className="flex flex-col gap-4">
                            {analyticsStats.map((item, i) => (
                                <div key={i} className={`flex items-center p-4 py-6 ${item.bg} rounded-2xl`}>

                                    <div
                                        className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center ${item.color} mr-4`}
                                    >
                                        {item.icon}
                                    </div>

                                    <div>
                                        <div className="text-xs text-slate-500 font-medium">
                                            {item.label}
                                        </div>

                                        <div className={`text-xl font-bold ${item.color}`}>
                                            {item.value}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

