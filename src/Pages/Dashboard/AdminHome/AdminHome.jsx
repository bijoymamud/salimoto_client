import { BookOpen, BookText, Headphones, Video } from 'lucide-react';
import RecentContent from './RecentContent';


export const AdminHome = () => {
    const menuItems = [

        {
            name: "Total Dua",
            icon: <BookOpen size={22} />,
            amount: 1247,
            bg: "bg-[#8C60F5]",
        },
        {
            name: "Total Hadith",
            icon: <BookText size={22} />,
            amount: 856,
            bg: "bg-[#4CA7EB]"
        },
        {
            name: "Total Audio Files",
            icon: <Headphones size={22} />,
            amount: 2103,
            bg: "bg-[#18D183]"
        },
        {
            name: "Total Video Files",
            icon: <Video size={22} />,
            amount: 5,
            text: "text-purple-500",
            bg: "bg-[#8C60F51A]/30"
        }

    ];
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-[16px] text-[#6A7282] font-medium mb-2">{item.name}</p>
                                <p className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">{item.amount}</p>
                            </div>
                            <div className={` ${item.bg} ${item.text} shadow-md p-3 rounded-xl text-white `}>
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='py-20'>
                <RecentContent />
            </div>
        </div>
    )
}
