import React from 'react';
import { useForm } from 'react-hook-form';

export default function Settings() {
    const {
        register: registerProfile,
        handleSubmit: handleProfileSubmit,
        formState: { errors: profileErrors }
    } = useForm({
        defaultValues: {
            name: "Admin User",
            email: "admin@hisnii.com"
        }
    });

    // Change Password Form
    const {
        register: registerPassword,
        handleSubmit: handlePasswordSubmit,
        formState: { errors: passwordErrors }
    } = useForm();

    const onProfileSubmit = (data) => console.log("Profile Data:", data);
    const onPasswordSubmit = (data) => console.log("Password Data:", data);

    return (
        <div className="bg-[#F9FAFB] min-h-screen ">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-[24px] font-bold text-[#1F1F1F]">General Settings</h1>
                <p className="text-gray-400 text-sm">Configure your application basics</p>
            </div>

            <div className="max-w-[1000px] space-y-8">

                {/* SECTION 1: ADMIN PROFILE */}
                <form
                    onSubmit={handleProfileSubmit(onProfileSubmit)}
                    className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100"
                >
                    <div className="mb-6">
                        <h2 className="text-[18px] font-bold text-[#1F1F1F]">Admin Profile</h2>
                        <p className="text-gray-400 text-[13px]">Manage your personal information</p>
                    </div>

                    <hr className="border-gray-50 mb-8" />

                    <div className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Name</label>
                            <input
                                {...registerProfile("name", { required: "Name is required" })}
                                type="text"
                                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-full border-none outline-none text-[#1F1F1F] placeholder:text-gray-400 focus:ring-2 focus:ring-[#24C3F3]/20 transition-all"
                            />
                            {profileErrors.name && <span className="text-red-500 text-[14px] mt-1">{profileErrors.name.message}</span>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Email</label>
                            <input
                                {...registerProfile("email", { required: "Email is required" })}
                                type="email"
                                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-full border-none outline-none text-[#1F1F1F] placeholder:text-gray-400 focus:ring-2 focus:ring-[#24C3F3]/20 transition-all"
                            />
                            {profileErrors.email && <span className="text-red-500 !text-[14px] mt-1">{profileErrors.email.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="bg-gradient-to-b shadow-md flex  items-center py-3 gap-2 from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-base font-semibold rounded-full hover:cursor-pointer"
                            >
                                Upload Profile
                            </button>
                        </div>
                    </div>
                </form>

                {/* SECTION 2: CHANGE PASSWORD */}
                <form
                    onSubmit={handlePasswordSubmit(onPasswordSubmit)}
                    className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100"
                >
                    <div className="mb-6">
                        <h2 className="text-[18px] font-bold text-[#1F1F1F]">Change Password</h2>
                        <p className="text-gray-400 text-[13px]">Update your account password</p>
                    </div>

                    <hr className="border-gray-50 mb-8" />

                    <div className="space-y-6">
                        {/* Current Password */}
                        <div>
                            <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Current Password</label>
                            <input
                                {...registerPassword("currentPassword", { required: true })}
                                type="password"
                                placeholder="Enter current password"
                                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-full border-none outline-none text-[#1F1F1F] placeholder:text-gray-400 focus:ring-2 focus:ring-[#24C3F3]/20 transition-all"
                            />
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">New Password</label>
                            <input
                                {...registerPassword("newPassword", { required: true, minLength: 6 })}
                                type="password"
                                placeholder="Enter new password"
                                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-full border-none outline-none text-[#1F1F1F] placeholder:text-gray-400 focus:ring-2 focus:ring-[#24C3F3]/20 transition-all"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-[14px] font-bold text-[#1F1F1F] mb-2">Confirm New Password</label>
                            <input
                                {...registerPassword("confirmPassword", { required: true })}
                                type="password"
                                placeholder="Confirm new password"
                                className="w-full px-4 py-3 bg-[#F4F7FA] rounded-full border-none outline-none text-[#1F1F1F] placeholder:text-gray-400 focus:ring-2 focus:ring-[#24C3F3]/20 transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="bg-gradient-to-b shadow-md flex  items-center py-3 gap-2 from-[#18D1E3] to-[#4CA7EB] text-white shadow-lg px-8 py-2 text-base font-semibold rounded-full hover:cursor-pointer"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}