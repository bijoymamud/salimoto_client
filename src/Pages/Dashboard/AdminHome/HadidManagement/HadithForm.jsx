import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Upload, X } from "lucide-react";
import { Toaster, toast } from 'sonner';


export default function HadithForm() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const isEdit = !!id;

    const { register, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            title: "",
            language: "English → Arabic → Phonetic",
            category: "",
            arabic: "",
            translation: "",
            phonetic: "",
            reference: "",
        }
    });

    // Populate form if in Edit mode
    useEffect(() => {
        if (isEdit && location.state?.row) {
            reset(location.state.row);
        }
    }, [isEdit, location.state, reset]);


    const handleDraft = () => {
        toast.success("Hadith saved as draft");
    }


    const onSubmit = (data) => {
        try {

            if (isEdit) {
                toast.success("Hadith successfully updated");
            } else {
                toast.success("Hadith added successfully");
            }

            navigate("/");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    const onError = (errors) => {
        toast.error("Please fill in all required fields marked with *");
    };

    return (
        <div className="max-w-[1200px] mx-auto p-6">
            <Toaster
                position="top-right"
                richColors
            />
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-[#1F1F1F]">
                    {isEdit ? "Edit Hadith" : "Add New Hadith"}
                </h1>
                <p className="text-[#6A7282] text-sm">Create a new hadith entry for your library</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1F1F1F]">Hadith Title *</label>
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                placeholder="Enter Hadith title"
                                className="w-full p-3 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none focus:border-[#8C60F5] transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#1F1F1F]">Display Language *</label>
                                <select
                                    {...register("language")}
                                    className="w-full p-3 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none text-sm text-gray-500"
                                >
                                    <option>English → Arabic → Phonetic</option>
                                    <option>Arabic Only</option>
                                    <option>English Only</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#1F1F1F]">Category *</label>
                                <select
                                    {...register("category", { required: true })}
                                    className="w-full p-3 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none text-sm text-gray-500"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Morning Azkar">Morning Azkar</option>
                                    <option value="Evening Azkar">Evening Azkar</option>
                                    <option value="Salah">Salah</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Daily Life">Daily Life</option>
                                    <option value="Health">Health</option>

                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1F1F1F]">Arabic Text *</label>
                            <textarea
                                {...register("arabic", { required: true })}
                                dir="rtl"
                                rows="4"
                                placeholder="أدخل النص العربي..."
                                className="w-full p-4 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none text-right font-arabic text-xl"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1F1F1F]">English Translation *</label>
                            <textarea
                                {...register("translation", { required: true })}
                                rows="3"
                                placeholder="Enter English translation..."
                                className="w-full p-4 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1F1F1F]">Phonetic Transcription *</label>
                            <textarea
                                {...register("phonetic")}
                                rows="2"
                                placeholder="Enter phonetic transcription..."
                                className="w-full p-4 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none"
                            />
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
                            <label className="text-sm font-bold text-[#1F1F1F]">Reference</label>
                            <input
                                {...register("reference")}
                                type="text"
                                placeholder="e.g., Sahih Muslim 2702"
                                className="w-full p-3 bg-[#F9F9F9] border border-gray-200 rounded-xl outline-none"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-4">
                            <label className="text-sm font-bold text-[#1F1F1F]">Audio File</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center space-y-3 cursor-pointer hover:bg-gray-50 transition-colors relative">
                                <input
                                    type="file"
                                    accept="audio/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => console.log(e.target.files[0])}
                                />
                                <div className="p-3 bg-[#8C60F51A] rounded-xl text-[#8C60F5]">
                                    <Upload size={24} />
                                </div>
                                <p className="text-sm font-bold text-[#1F1F1F]">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-400">MP3 files only</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 text-sm shadow-md font-semibold text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDraft}
                        type="button"
                        className="px-8 py-3 shadow-md  text-sm font-semibold text-gray-600 rounded-full border border-gray-200 hover:bg-gray-50"
                    >
                        Save as Draft
                    </button>
                    <button

                        type="submit"
                        className="bg-gradient-to-b shadow-md from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-3 text-sm font-semibold rounded-full hover:cursor-pointer"
                    >
                        {isEdit ? "Update Hadith" : "Publish Hadith"}
                    </button>
                </div>
            </form>
        </div>
    );
}