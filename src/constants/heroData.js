import { IoIosFlash, IoIosPeople } from "react-icons/io";
import { BsLightbulbFill } from "react-icons/bs";

export const heroData = {
  title: "سیستم هوشمند مدیریت مربیان",
  highlight: "فیتیو",
  description: "پلتفرم جامع برای مدیریت برنامه‌های تمرینی و ردیابی پیشرفته",
  stats: [
    { id: 1, label: "مربی فعال", icon: <IoIosPeople size={28} className="text-orange-400"/> },
    { id: 2, label: "امن و قابل اعتماد", icon: <BsLightbulbFill size={28} className="text-orange-400" /> },
    { id: 3, label: "رایگان آزاد", icon: <IoIosFlash size={28} className="text-orange-400"/> },
  ],
};