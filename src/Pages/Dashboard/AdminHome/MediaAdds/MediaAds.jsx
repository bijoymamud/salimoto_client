
import mediaAdsIcon from "../../../../assets/ImageIcon.png";
import fileImage from "../../../../assets/fileImage.png";
import playIcon from "../../../../assets/playIcon.png";
import WallpaperAdd from "./WallpaperAdd";
export const MediaAds = () => {

    const infoData = [
        {
            id: 1,
            title: "Total Wallpapers",
            total_data: 7,
            icon: <img src={mediaAdsIcon} alt="media & ads" className="w-5 h-5" />,
            bg: "bg-[#8C60F5]/10",
            color: "text-green-500",
            category: "Images"
        },
        {
            id: 2,
            title: "Total Ads ",
            total_data: 5,
            icon: <img src={playIcon} alt="media & ads" className="w-5 h-5" />,
            bg: "bg-[#4CA7EB1A]",
            color: "text-[#4CA7EB]",
            category: "Images "
        },
        {
            id: 3,
            title: "Total Media ",
            total_data: 12,
            icon: <img src={fileImage} alt="media & ads" className="w-5 h-5" />,
            bg: "bg-[#18D1831A]",
            color: "text-[#18D183]",
            category: "Files"
        }
    ]

    return (
        <div>
            <div className="grid grid-cols-3 gap-10 rounded-[16px] gap-">
                {
                    infoData.map((item) => (
                        <div key={item.id}>
                            <div className="bg-white flex items-center justify-between rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                <div className="space-y-2">
                                    <p className="text-gray-500 text-[16px] text-[#6A7282] font-medium mb-2">{item.title}</p>
                                    <p className="text-3xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">{item.total_data}</p>
                                    <p className="text-gray-500 text-[16px] text-[#99A1AF] font-medium mb-2 text-sm ">{item.category}</p>
                                </div>
                                <div className={`${item.bg} w-12 h-12 rounded-[16px] flex items-center justify-center`}>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="py-20">
                <WallpaperAdd />
            </div>
        </div>
    )
}
