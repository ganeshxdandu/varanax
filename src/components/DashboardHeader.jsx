import { Plus } from "lucide-react";

const DashboardHeader = () => {
  const getTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return "Morning";
    } else if (hours < 16) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  return (
    <div className="border-stroke flex items-center justify-between rounded-[10px] border-zinc-700 bg-zinc-800 px-4 py-3.5 mb-8">
      <h2 className="text-[18px] tracking-tight text-zinc-50">
        Good {getTimeOfDay()},{" "}
        <span className="text-[20px] font-bold">Ganesh 👋🏻</span>
      </h2>
      <button className="text-body flex gap-2 bg-teal-600 text-teal-50 px-5 py-2 items-center rounded-full font-medium hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
        Add Job <Plus size={16}/>
      </button>
    </div>
  );
};
export default DashboardHeader;
