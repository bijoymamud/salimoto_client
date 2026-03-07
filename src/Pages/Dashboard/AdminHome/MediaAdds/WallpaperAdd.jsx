

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { FiUploadCloud, FiCalendar, FiX, FiChevronDown } from "react-icons/fi";

// export default function WallpaperAdd() {
//     const [activeTab, setActiveTab] = useState('Wallpapers');
//     const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null);

//     const { register, handleSubmit, reset } = useForm();

//     const allMedia = [
//         { id: 1, title: "Ramadan Night", date: "Mar 1", size: "2.3 MB", type: "Wallpapers", img: "https://i.pinimg.com/736x/c4/8b/4c/c48b4c587471996210ee0f9bbaa3c568.jpg" },
//         { id: 2, title: "Mosque Interior", date: "Mar 1", size: "2.3 MB", type: "Wallpapers", img: "https://w0.peakpx.com/wallpaper/291/668/HD-wallpaper-allah-athkar-god-iphone-islam-islamic-landscape-love-muslim-nature.jpg" },
//         { id: 3, title: "Kaaba Sunset", date: "Mar 1", size: "2.3 MB", type: "Wallpapers", img: "https://i.pinimg.com/originals/e8/6f/91/e86f9124b5501ce5dc58e3e36ecb3531.jpg" },
//         { id: 4, title: "Special Eid Offer", date: "Mar 5", size: "1.5 MB", type: "Ads", img: "https://img.freepik.com/free-vector/ramadan-kareem-sale-banner-template_23-2148873041.jpg" },
//     ];

//     // Filter data based on the active tab
//     const filteredData = allMedia.filter(item => item.type === activeTab);

//     const onUploadSubmit = (data) => {
//         console.log("Uploaded Data:", data);
//         setIsUploadModalOpen(false);
//         reset();
//     };

//     return (
//         <div className="p-6 bg-[#FBFBFF]">
//             {/* Header & Tabs */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
//                 <div role="tablist" className="tabs tabs-bordered flex gap-8 border-none">
//                     {['Wallpapers', 'Ads'].map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className={`text-[15px] font-bold pb-4 border-b-2 px-2 transition-all ${activeTab === tab ? 'text-[#24C3F3] border-[#24C3F3]' : 'text-gray-400 border-transparent'
//                                 }`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 <button
//                     onClick={() => setIsUploadModalOpen(true)}
//                     className="bg-gradient-to-b from-[#18D1E3] to-[#4CA7EB] text-white px-8 py-3 text-sm font-semibold rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
//                 >
//                     <FiUploadCloud size={20} /> Upload Images
//                 </button>
//             </div>

//             {/* Content Grid - Now uses filteredData */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredData.length > 0 ? (
//                     filteredData.map((item) => (
//                         <div
//                             key={item.id}
//                             onClick={() => setSelectedImage(item)}
//                             className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all animate-in fade-in duration-300"
//                         >
//                             <div className="aspect-[4/3] h-80 overflow-hidden">
//                                 <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                             </div>
//                             <div className="p-6">
//                                 <h3 className="text-[17px] font-bold text-[#1F1F1F] mb-3">{item.title}</h3>
//                                 <div className="flex justify-between items-center mb-4">
//                                     <span className="text-xs text-gray-400 font-medium">Type:</span>
//                                     <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${item.type === 'Wallpapers' ? 'bg-[#F5F3FF] text-[#8C60F5]' : 'bg-[#E6F9F4] text-[#00B69B]'
//                                         }`}>
//                                         {item.type === 'Wallpapers' ? 'Wallpaper' : 'Advertisement'}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between items-center text-gray-400 text-[11px]">
//                                     <div className="flex items-center gap-1.5"><FiCalendar size={14} /><span>{item.date}</span></div>
//                                     <span>{item.size}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-span-full py-20 text-center text-gray-400 font-medium">
//                         No {activeTab} found.
//                     </div>
//                 )}
//             </div>

//             {/* MODAL 1: UPLOAD NEW IMAGE */}
//             {isUploadModalOpen && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
//                     <div className="bg-white w-full max-w-[600px] rounded-[28px] p-10 shadow-2xl relative">
//                         <button onClick={() => setIsUploadModalOpen(false)} className="absolute right-8 top-8 text-gray-400"><FiX size={24} /></button>

//                         <h2 className="text-[20px] font-bold text-[#1F1F1F]">Upload New Image</h2>
//                         <p className="text-gray-400 text-[13px] mb-8">Add a new wallpaper or advertisement image to the app.</p>

//                         <form onSubmit={handleSubmit(onUploadSubmit)} className="space-y-6">
//                             <div>
//                                 <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Image Name</label>
//                                 <input {...register("imageName", { required: true })} placeholder="Enter image name" className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-[14px] outline-none text-sm border border-transparent focus:border-[#24C3F3]" />
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Image Type</label>
//                                 <select {...register("imageType")} className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-[14px] outline-none text-sm appearance-none border border-transparent focus:border-[#24C3F3]">
//                                     <option value="Wallpapers">Wallpaper</option>
//                                     <option value="Ads">Ads</option>
//                                 </select>
//                                 <FiChevronDown className="absolute right-5 bottom-4 text-gray-400 pointer-events-none" />
//                             </div>

//                             <div>
//                                 <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Upload Image</label>
//                                 <div className="border-2 border-dashed border-gray-100 rounded-[20px] p-12 flex flex-col items-center justify-center bg-[#FBFBFF]">
//                                     <div className="text-[#24C3F3] mb-4"><FiUploadCloud size={48} /></div>
//                                     <p className="text-[#24C3F3] font-bold text-sm">Drag & Drop Image</p>
//                                     <p className="text-gray-300 text-xs my-2 italic">or</p>
//                                     <button type="button" className="px-6 py-2 border border-gray-200 rounded-full text-[13px] font-bold text-gray-600 hover:bg-white transition-all">Click to Upload</button>
//                                     <p className="text-gray-300 text-[11px] mt-4 font-medium uppercase">Supported: JPG / PNG • Max 5MB</p>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4 pt-4">
//                                 <button type="button" onClick={() => setIsUploadModalOpen(false)} className="flex-1 py-3.5 border border-gray-100 rounded-full font-bold text-gray-500 hover:bg-gray-50 transition-all">Cancel</button>
//                                 <button type="submit" className="flex-1 py-3.5 bg-gradient-to-r from-[#24C3F3] to-[#4CA7EB] text-white font-bold rounded-full shadow-lg shadow-blue-100 hover:opacity-90 transition-all">Upload</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* MODAL 2: IMAGE PREVIEW */}
//             {selectedImage && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all" onClick={() => setSelectedImage(null)}>
//                     <div className="bg-white w-full max-w-[700px] rounded-[32px] p-8 shadow-2xl relative animate-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
//                         <button onClick={() => setSelectedImage(null)} className="absolute right-8 top-8 text-gray-400 hover:text-gray-600"><FiX size={24} /></button>

//                         <div className="mb-6">
//                             <h2 className="text-[22px] font-bold text-[#1F1F1F]">{selectedImage.title}</h2>
//                             <p className="text-gray-400 text-[13px] mt-1 font-medium italic">
//                                 {selectedImage.type === 'Wallpapers' ? 'Wallpaper' : 'Advertisement'} • Uploaded {selectedImage.date} • {selectedImage.size}
//                             </p>
//                         </div>

//                         <div className="rounded-[24px] overflow-hidden aspect-[16/10] shadow-inner bg-gray-50">
//                             <img src={selectedImage.img} alt={selectedImage.title} className="w-full h-full object-cover" />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FiUploadCloud, FiCalendar, FiX, FiChevronDown, FiImage } from "react-icons/fi";

export default function WallpaperAdd() {
    const [activeTab, setActiveTab] = useState('Wallpapers');
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // New States for dynamic data
    const [mediaList, setMediaList] = useState([
        { id: 1, title: "Ramadan Night", date: "Mar 1", size: "2.3 MB", type: "Wallpapers", img: "https://i.pinimg.com/736x/c4/8b/4c/c48b4c587471996210ee0f9bbaa3c568.jpg" },
        { id: 2, title: "Mosque Interior", date: "Mar 1", size: "2.3 MB", type: "Wallpapers", img: "https://w0.peakpx.com/wallpaper/291/668/HD-wallpaper-allah-athkar-god-iphone-islam-islamic-landscape-love-muslim-nature.jpg" },
        { id: 3, title: "Kaaba Sunset", date: "Mar 1", size: "2.3 MB", type: "Wallpapers", img: "https://i.pinimg.com/originals/e8/6f/91/e86f9124b5501ce5dc58e3e36ecb3531.jpg" },
        { id: 4, title: "Special Eid Offer", date: "Mar 5", size: "1.5 MB", type: "Ads", img: "https://img.freepik.com/free-vector/ramadan-kareem-sale-banner-template_23-2148873041.jpg" },
    ]);

    const [previewFile, setPreviewFile] = useState(null);
    const fileInputRef = useRef(null);

    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues: { imageType: 'Wallpapers' }
    });

    // Filter based on state
    const filteredData = mediaList.filter(item => item.type === activeTab);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onUploadSubmit = (data) => {
        const newItem = {
            id: Date.now(),
            title: data.imageName,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            size: "New",
            type: data.imageType,
            img: previewFile || "https://via.placeholder.com/400x300",
        };

        setMediaList([newItem, ...mediaList]);
        setIsUploadModalOpen(false);
        setPreviewFile(null);
        reset();
    };

    return (
        <div className="">
            {/* Header & Tabs */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div role="tablist" className="tabs tabs-bordered flex gap-8 border-none">
                    {['Wallpapers', 'Ads'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[15px] font-bold text-base pb-4 border-b-2 px-2 transition-all ${activeTab === tab ? 'text-[#24C3F3] border-[#24C3F3]' : 'text-gray-400 border-transparent'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="bg-gradient-to-b from-[#18D1E3] to-[#4CA7EB] text-white px-8 py-3 text-sm font-semibold rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
                >
                    <FiUploadCloud size={20} /> Upload Images
                </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item)}
                            className="bg-white rounded-[24px] overflow-hidden shadow-md border border-gray-100 group cursor-pointer hover:shadow-md transition-all animate-in fade-in duration-300"
                        >
                            <div className="aspect-[4/3] h-80 overflow-hidden bg-gray-100">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-[17px] font-bold text-[#1F1F1F] mb-3">{item.title}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs text-gray-400 font-medium">Type:</span>
                                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${item.type === 'Wallpapers' ? 'bg-[#F5F3FF] text-[#8C60F5]' : 'bg-[#E6F9F4] text-[#00B69B]'}`}>
                                        {item.type === 'Wallpapers' ? 'Wallpaper' : 'Advertisement'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-gray-400 text-[11px]">
                                    <div className="flex items-center gap-1.5"><FiCalendar size={14} /><span>{item.date}</span></div>
                                    <span>{item.size}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-400 font-medium italic">
                        No {activeTab} available. Start by uploading one!
                    </div>
                )}
            </div>

            {/* Upload New Image */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-[600px] rounded-[28px] p-10 shadow-2xl relative animate-in zoom-in duration-200">
                        <button onClick={() => { setIsUploadModalOpen(false); setPreviewFile(null); }} className="absolute right-8 top-8 text-gray-400 hover:text-red-500"><FiX size={24} /></button>

                        <h2 className="text-[20px] font-bold text-[#1F1F1F]">Upload New Image</h2>
                        <p className="text-gray-400 text-[13px] mb-8">Add a new wallpaper or advertisement image to the app.</p>

                        <form onSubmit={handleSubmit(onUploadSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Image Name</label>
                                <input {...register("imageName", { required: true })}
                                    placeholder="Enter image name"
                                    className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-[14px] border border-[#E5E7EB] outline-none text-sm focus:border-[#24C3F3]" />
                            </div>

                            <div className="relative">
                                <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Image Type</label>
                                <select {...register("imageType")} className="w-full px-5 py-3.5 bg-[#F8F9FB] rounded-[14px] outline-none text-sm appearance-none border border-[#E5E7EB] focus:border-[#24C3F3]">
                                    <option value="Wallpapers">Wallpaper</option>
                                    <option value="Ads">Ads</option>
                                </select>
                                <FiChevronDown className="absolute right-5 bottom-4 text-gray-400 pointer-events-none" />
                            </div>

                            <div>
                                <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Upload Image</label>

                                {/* Hidden Input */}
                                <input type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden" />

                                <div
                                    onClick={() => fileInputRef.current.click()}
                                    className="border-2 border-dashed border-gray-200 rounded-[20px] p-8 flex  flex-col items-center justify-center bg-[#FBFBFF] cursor-pointer hover:bg-gray-50 transition-all min-h-[200px] border-gray-100 rounded-[20px] p-8 flex  flex-col items-center justify-center bg-[#FBFBFF] cursor-pointer hover:bg-gray-50 transition-all min-h-[200px]"
                                >
                                    {previewFile ? (
                                        <div className="relative w-full h-40">
                                            <img src={previewFile} className="w-full h-full object-contain rounded-lg" alt="Preview" />
                                            <div className="absolute top-0 right-0 bg-[#24C3F3] text-white p-1 rounded-full"><FiImage /></div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="text-[#24C3F3] mb-4"><FiUploadCloud size={48} /></div>
                                            <p className="text-[#24C3F3] font-bold text-sm">Click to Select Image</p>
                                            <p className="text-gray-300 text-[11px] mt-4 font-medium uppercase">Supported: JPG / PNG • Max 5MB</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <div className='basis-1/4'>
                                    <button type="button"
                                        onClick={() => {
                                            setIsUploadModalOpen(false);
                                            setPreviewFile(null);
                                        }}
                                        className="bg-gradient-to-b w-full bg-gray-100 text-gray-800 px-8 hover:text-red-500 py-3 text-sm font-semibold rounded-full shadow-md flex items-center gap-2 flex items-center justify-center hover:opacity-90 transition-all">
                                        Cancel
                                    </button>
                                </div>

                                <div className='basis-2/4'>
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-b w-full flex items-center justify-center from-[#18D1E3] to-[#4CA7EB] text-white px-8 py-3.5 text-sm font-semibold rounded-full shadow-lg flex items-center gap-2 hover:opacity-90 transition-all">Upload</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL 2: IMAGE PREVIEW */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all" onClick={() => setSelectedImage(null)}>
                    <div className="bg-white w-full max-w-[700px] rounded-[32px] p-8 shadow-2xl relative animate-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedImage(null)} className="absolute right-8 top-8 text-gray-400 hover:text-gray-600"><FiX size={24} /></button>

                        <div className="mb-6">
                            <h2 className="text-[22px] font-bold text-[#1F1F1F]">{selectedImage.title}</h2>
                            <p className="text-gray-400 text-[13px] mt-1 font-medium italic">
                                {selectedImage.type === 'Wallpapers' ? 'Wallpaper' : 'Advertisement'} • Uploaded {selectedImage.date} • {selectedImage.size}
                            </p>
                        </div>

                        <div className="rounded-[24px] overflow-hidden aspect-[16/10] shadow-inner bg-gray-50 flex items-center justify-center">
                            <img src={selectedImage.img} alt={selectedImage.title} className="max-w-full max-h-full object-contain" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}