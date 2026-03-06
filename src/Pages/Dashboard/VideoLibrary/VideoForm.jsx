// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FiArrowLeft, FiUpload, FiYoutube, FiCheckCircle } from "react-icons/fi";

// export default function VideoForm() {
//     const { id } = useParams(); // If ID exists, we are editing
//     const navigate = useNavigate();
//     const isEditMode = Boolean(id);

//     const [formData, setFormData] = useState({
//         title: "",
//         url: "",
//         category: "",
//         description: "",
//         thumbnailUrl: "",
//         duration: "12:45",
//         isPublished: false
//     });

//     // Mock Fetch: In a real app, fetch data from your API using the ID
//     useEffect(() => {
//         if (isEditMode) {
//             // Simulated API call
//             setFormData({
//                 title: "The Beautiful Names of Allah",
//                 url: "https://youtube.com/watch?v=...",
//                 category: "Islamic Knowledge",
//                 description: "An in-depth exploration of the 99 names...",
//                 thumbnailUrl: "https://example.com/thumb.jpg",
//                 duration: "12:45",
//                 isPublished: true
//             });
//         }
//     }, [id, isEditMode]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(isEditMode ? "Updating Video..." : "Publishing New Video...", formData);
//         navigate("/dashboard/video_library");
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//                 <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
//                     <FiArrowLeft /> Back
//                 </button>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                     {isEditMode ? "Edit Video" : "Add New Video"}
//                 </h2>
//                 <div className="w-20"></div> {/* Spacer */}
//             </div>

//             <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Left Side: Main Info */}
//                 <div className="lg:col-span-2 space-y-6 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
//                     <div>
//                         <label className="block text-sm font-bold text-gray-700 mb-2">Video Title *</label>
//                         <input
//                             type="text"
//                             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-100 outline-none"
//                             placeholder="Enter video title"
//                             value={formData.title}
//                             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-bold text-gray-700 mb-2">Video URL *</label>
//                         <div className="relative">
//                             <FiYoutube className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                             <input
//                                 type="text"
//                                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-100 outline-none"
//                                 placeholder="https://youtube.com/watch?v=..."
//                                 value={formData.url}
//                                 onChange={(e) => setFormData({ ...formData, url: e.target.value })}
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
//                             <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none">
//                                 <option>Select category</option>
//                                 <option>Islamic Knowledge</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-bold text-gray-700 mb-2">Duration (mm:ss)</label>
//                             <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50" value={formData.duration} readOnly />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
//                         <textarea
//                             rows="4"
//                             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-100 outline-none"
//                             placeholder="Enter video description..."
//                             value={formData.description}
//                             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                         ></textarea>
//                     </div>
//                 </div>

//                 {/* Right Side: Settings */}
//                 <div className="space-y-6">
//                     <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
//                         <h3 className="font-bold mb-4 text-gray-500 text-xs uppercase tracking-wider">Publish Settings</h3>
//                         <div className="flex items-center justify-between py-2">
//                             <span className="text-sm font-medium">Publish Video</span>
//                             <input
//                                 type="checkbox"
//                                 checked={formData.isPublished}
//                                 onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
//                                 className="w-10 h-5 bg-gray-200 rounded-full appearance-none checked:bg-green-500 cursor-pointer transition-all relative after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 checked:after:left-5 after:transition-all"
//                             />
//                         </div>
//                     </div>

//                     <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 text-center">
//                         <h3 className="font-bold mb-4 text-left text-gray-500 text-xs uppercase tracking-wider">Thumbnail</h3>
//                         <div className="border-2 border-dashed border-gray-100 rounded-2xl p-8 hover:bg-purple-50 transition-colors cursor-pointer group">
//                             <FiUpload className="mx-auto text-3xl text-purple-400 group-hover:scale-110 transition-transform mb-2" />
//                             <p className="text-sm font-bold text-gray-700">Click to upload</p>
//                             <p className="text-[10px] text-gray-400 mt-1">PNG, JPG up to 5MB</p>
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-gradient-to-b from-[#18D1E3] to-[#4CA7EB] text-white py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
//                     >
//                         {isEditMode ? "Save Changes" : "Publish Video"}
//                     </button>
//                     <button type="button" onClick={() => navigate(-1)} className="w-full py-4 text-gray-400 font-bold">Cancel</button>
//                 </div>
//             </form>
//         </div>
//     );
// }


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//     FiArrowLeft, FiExternalLink, FiUpload,
//     FiTrash2, FiSave, FiInfo, FiClock, FiCalendar
// } from "react-icons/fi";

// export default function VideoForm() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const isEdit = Boolean(id);

//     // State matching the fields in image_ec399f.png
//     const [formData, setFormData] = useState({
//         title: "The Beautiful Names of Allah",
//         url: "https://youtube.com/watch?v=Asma-ul-Husna",
//         category: "Islamic Knowledge",
//         description: "An in-depth exploration of the 99 beautiful names of Allah (Asma ul Husna) and their meanings.",
//         thumbnailUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577a50&fit=crop",
//         duration: "12:45",
//         isPublished: true,
//         scheduleDate: ""
//     });

//     return (
//         <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-10">
//             {/* Top Navigation */}
//             <div className="max-w-[1200px] mx-auto mb-8">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-all mb-4"
//                 >
//                     <FiArrowLeft /> <span className="text-sm font-medium">Back</span>
//                 </button>
//                 <h1 className="text-[28px] font-bold text-[#1F1F1F]">
//                     {isEdit ? "Edit Video" : "Add New Video"}
//                 </h1>
//                 <p className="text-gray-400 text-sm">Add video via YouTube link with metadata</p>
//             </div>

//             <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

//                 {/* LEFT COLUMN: MAIN FORM (image_ec399f.png) */}
//                 <div className="lg:col-span-8 space-y-6">

//                     {/* Thumbnail Preview Card */}
//                     <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
//                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Thumbnail Preview</h3>
//                         <div className="relative rounded-2xl overflow-hidden aspect-video border border-gray-100">
//                             <img
//                                 src={formData.thumbnailUrl}
//                                 alt="Preview"
//                                 className="w-full h-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-black/10"></div>
//                         </div>

//                         <div className="mt-6 space-y-4">
//                             <div>
//                                 <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Duration (mm:ss)</label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         readOnly
//                                         value={formData.duration}
//                                         className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none text-gray-500 outline-none"
//                                     />
//                                     <FiClock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                                 </div>
//                                 <p className="text-[11px] text-gray-400 mt-1">Optional: Auto-detected from YouTube</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Form Fields Card */}
//                     <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm space-y-6">
//                         <div>
//                             <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Video Title *</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter video title"
//                                 className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-100"
//                                 value={formData.title}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Video URL *</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     placeholder="https://youtube.com/watch?v=..."
//                                     className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-100 pr-12"
//                                     value={formData.url}
//                                 />
//                                 <FiExternalLink className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                             </div>
//                             <p className="text-[11px] text-gray-400 mt-1">Paste the full YouTube video URL to embed the video</p>
//                         </div>

//                         <div>
//                             <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Category *</label>
//                             <select className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none appearance-none">
//                                 <option>{formData.category}</option>
//                                 <option>Prayer Guide</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Description</label>
//                             <textarea
//                                 rows="5"
//                                 placeholder="Enter video description..."
//                                 className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none resize-none"
//                                 value={formData.description}
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Custom Thumbnail URL (Optional)</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none pr-12"
//                                     value={formData.thumbnailUrl}
//                                 />
//                                 <FiUpload className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                             </div>
//                             <p className="text-[11px] text-gray-400 mt-1">Leave empty to use auto-generated YouTube thumbnail</p>
//                         </div>
//                     </div>

//                     {/* Video Statistics (image_ec399f.png footer) */}
//                     {isEdit && (
//                         <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
//                             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Video Statistics</h3>
//                             <div className="grid grid-cols-3 gap-4">
//                                 <div className="text-center">
//                                     <p className="text-2xl font-bold text-[#1F1F1F]">15,234</p>
//                                     <p className="text-[11px] text-gray-400 font-medium">Total Views</p>
//                                 </div>
//                                 <div className="text-center border-x border-gray-100">
//                                     <p className="text-2xl font-bold text-[#1F1F1F]">2,547</p>
//                                     <p className="text-[11px] text-gray-400 font-medium">Total Likes</p>
//                                 </div>
//                                 <div className="text-center">
//                                     <p className="text-2xl font-bold text-[#1F1F1F]">489</p>
//                                     <p className="text-[11px] text-gray-400 font-medium">Total Shares</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Metadata Card */}
//                     {isEdit && (
//                         <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm space-y-4">
//                             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Metadata</h3>
//                             <div className="flex justify-between items-center text-sm text-gray-600">
//                                 <span className="flex items-center gap-2"><FiClock size={14} /> Created</span>
//                                 <span className="font-medium text-[#1F1F1F]">Feb 28, 2026, 10:30 AM</span>
//                             </div>
//                             <div className="flex justify-between items-center text-sm text-gray-600">
//                                 <span className="flex items-center gap-2"><FiCalendar size={14} /> Last Updated</span>
//                                 <span className="font-medium text-[#1F1F1F]">Feb 28, 2026, 10:30 AM</span>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* RIGHT COLUMN: SIDEBAR (image_ec399f.png) */}
//                 <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-10">

//                     {/* Action Buttons */}
//                     <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-3">
//                         <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#8C60F5] text-white rounded-full font-bold shadow-lg shadow-purple-100 hover:bg-[#7a4ee3] transition-all">
//                             <FiSave /> Save Changes
//                         </button>
//                         <button
//                             onClick={() => navigate(-1)}
//                             className="w-full py-4 bg-[#F8F9FA] text-gray-500 rounded-full font-bold hover:bg-gray-100 transition-all"
//                         >
//                             Cancel
//                         </button>
//                     </div>

//                     {/* Publish Settings */}
//                     <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
//                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Publish Settings</h3>

//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <p className="text-[13px] font-bold text-[#1F1F1F]">Publish Video</p>
//                                 <p className="text-[11px] text-gray-400">Make video visible to users</p>
//                             </div>
//                             <label className="relative inline-flex items-center cursor-pointer">
//                                 <input
//                                     type="checkbox"
//                                     className="sr-only peer"
//                                     checked={formData.isPublished}
//                                     onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
//                                 />
//                                 <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#8C60F5] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
//                             </label>
//                         </div>

//                         <div>
//                             <label className="block text-[13px] font-bold text-[#1F1F1F] mb-2">Schedule Publication</label>
//                             <div className="relative">
//                                 <input
//                                     type="date"
//                                     className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none text-sm text-gray-400 outline-none"
//                                 />
//                             </div>
//                             <p className="text-[11px] text-gray-400 mt-1">Optional: Set future publish date</p>
//                         </div>
//                     </div>

//                     {/* Danger Zone */}
//                     {isEdit && (
//                         <div className="bg-[#FFF5F5] p-6 rounded-[24px] border border-red-50 space-y-4">
//                             <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest">Danger Zone</h3>
//                             <p className="text-[11px] text-red-400/80 leading-relaxed">
//                                 Once you delete a video, there is no going back. Please be certain.
//                             </p>
//                             <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#FF3B30] text-white rounded-full font-bold shadow-lg shadow-red-100 hover:bg-red-600 transition-all">
//                                 <FiTrash2 /> Delete Video
//                             </button>
//                         </div>
//                     )}

//                     {/* YouTube Integration Info */}
//                     <div className="bg-[#F0F7FF] p-6 rounded-[24px] border border-blue-50">
//                         <div className="flex gap-3">
//                             <FiInfo className="text-blue-500 mt-1" size={20} />
//                             <div className="space-y-1">
//                                 <p className="text-[13px] font-bold text-blue-900">YouTube Integration</p>
//                                 <p className="text-[11px] text-blue-800/70 leading-relaxed">
//                                     Videos are embedded from YouTube. Ensure the video is public or unlisted. Stats are tracked separately in the admin panel.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FiArrowLeft, FiExternalLink, FiUpload,
    FiTrash2, FiVideo, FiInfo, FiClock, FiCalendar
} from "react-icons/fi";

export default function VideoForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState({
        title: "",
        url: "",
        category: "",
        description: "",
        thumbnailUrl: "",
        duration: "12:45",
        isPublished: false,
        scheduleDate: ""
    });

    // Mock data for Edit Mode matching image_ec399f.png
    useEffect(() => {
        if (isEdit) {
            setFormData({
                title: "The Beautiful Names of Allah",
                url: "https://youtube.com/watch?v=Asma-ul-Husna",
                category: "Islamic Knowledge",
                description: "An in-depth exploration of the 99 beautiful names of Allah...",
                thumbnailUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577a50",
                duration: "12:45",
                isPublished: true,
            });
        }
    }, [id, isEdit]);

    return (
        <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-10  text-[#1F1F1F]">
            {/* Page Header */}
            <div className=" mx-auto mb-8">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-700 mb-2 transition-all">
                    <FiArrowLeft size={18} /> <span className="text-sm font-medium">Back</span>
                </button>
                <h1 className="text-[28px] font-bold">{isEdit ? "Edit Video" : "Add New Video"}</h1>
                <p className="text-gray-400 text-sm">Add video via YouTube link with metadata</p>
            </div>

            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* LEFT COLUMN: PRIMARY FORM */}
                <div className="lg:col-span-8 space-y-6">

                    {/* Thumbnail Preview (Only shown in Edit Mode or if URL exists) */}
                    {isEdit && (
                        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm">
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Thumbnail Preview</p>
                            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-inner">
                                <img src={formData.thumbnailUrl} className="w-full h-full object-cover" alt="Preview" />
                            </div>
                        </div>
                    )}

                    {/* Form Content */}
                    <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm space-y-6">
                        <div>
                            <label className="block text-[13px] font-bold mb-2">Video Title *</label>
                            <input type="text" className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-100 transition-all" placeholder="Enter video title" value={formData.title} />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold mb-2">Video URL *</label>
                            <div className="relative">
                                <input type="text" className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none pr-12" placeholder="https://youtube.com/watch?v=..." value={formData.url} />
                                <FiExternalLink className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <p className="text-[11px] text-gray-400 mt-1">Paste the full YouTube video URL to embed the video</p>
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold mb-2">Category *</label>
                            <select className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none appearance-none">
                                <option>{formData.category || "Select category"}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold mb-2">Description</label>
                            <textarea rows="5" className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none resize-none" placeholder="Enter video description..." value={formData.description} />
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold mb-2">Custom Thumbnail URL (Optional)</label>
                            <div className="relative">
                                <input type="text" className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none outline-none pr-12" value={formData.thumbnailUrl} />
                                <FiUpload className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <p className="text-[11px] text-gray-400 mt-1">Leave empty to use auto-generated YouTube thumbnail</p>
                        </div>

                        <div>
                            <label className="block text-[13px] font-bold mb-2">Duration (mm:ss)</label>
                            <input type="text" readOnly className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none text-gray-400 outline-none" value={formData.duration} />
                            <p className="text-[11px] text-gray-400 mt-1">Optional: Auto-detected from YouTube</p>
                        </div>
                    </div>

                    {/* Video Stats (Only in Edit Mode) */}
                    {isEdit && (
                        <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Video Statistics</p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold">15,234</p>
                                    <p className="text-[11px] text-gray-400">Total Views</p>
                                </div>
                                <div className="text-center border-x border-gray-100">
                                    <p className="text-2xl font-bold">2,547</p>
                                    <p className="text-[11px] text-gray-400">Total Likes</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold">489</p>
                                    <p className="text-[11px] text-gray-400">Total Shares</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: SIDEBAR */}
                <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-10">

                    {/* Action Buttons */}
                    <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-3 text-center">
                        <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#8C60F5] text-white rounded-full font-bold shadow-lg shadow-purple-100 hover:opacity-90 transition-all">
                            <FiVideo /> {isEdit ? "Save Changes" : "Save as Draft"}
                        </button>
                        <button onClick={() => navigate(-1)} className="w-full py-4 bg-[#F8F9FA] text-gray-500 rounded-full font-bold hover:bg-gray-100 transition-all">
                            Cancel
                        </button>
                    </div>

                    {/* Publish Settings */}
                    <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Publish Settings</h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[13px] font-bold">Publish Video</p>
                                <p className="text-[11px] text-gray-400">Make video visible to users</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={formData.isPublished} onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })} />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#8C60F5] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold mb-2">Schedule Publication</label>
                            <input type="date" className="w-full px-4 py-3 bg-[#F4F7FA] rounded-xl border-none text-sm text-gray-400 outline-none" />
                            <p className="text-[11px] text-gray-400 mt-1">Optional: Set future publish date</p>
                        </div>
                    </div>

                    {/* Danger Zone (Edit Only) */}
                    {isEdit && (
                        <div className="bg-[#FFF5F5] p-6 rounded-[24px] border border-red-50">
                            <h3 className="text-xs font-bold text-red-400 uppercase mb-4 tracking-widest">Danger Zone</h3>
                            <p className="text-[11px] text-red-400/80 mb-4 leading-relaxed">Once you delete a video, there is no going back. Please be certain.</p>
                            <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#FF3B30] text-white rounded-full font-bold shadow-lg shadow-red-100 hover:bg-red-600 transition-all">
                                <FiTrash2 /> Delete Video
                            </button>
                        </div>
                    )}

                    {/* Helper Note */}
                    <div className="bg-[#F0F7FF] p-6 rounded-[24px] border border-blue-50 flex gap-3">
                        <FiInfo className="text-blue-500 mt-1" size={20} />
                        <div className="space-y-1">
                            <p className="text-[13px] font-bold text-blue-900">YouTube Integration</p>
                            <p className="text-[11px] text-blue-800/70 leading-relaxed">Videos are embedded from YouTube. Ensure the video is public or unlisted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}