import { Plus } from "lucide-react";
import { useContext } from "react";
import { FormContext } from "../utils/formContext";

const DashboardHeader = () => {

  const {showForm, setShowForm} = useContext(FormContext);

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
    <div className="border-stroke mb-8 flex items-center justify-between rounded-[10px] border-zinc-700 bg-zinc-800 px-4 py-3.5">
      <h2 className="text-[18px] tracking-tight text-zinc-50">
        Good {getTimeOfDay()},{" "}
        <span className="text-[20px] font-bold">Ganesh 👋🏻</span>
      </h2>
      <button className="text-body flex cursor-pointer items-center gap-2 rounded-full bg-teal-600 px-5 py-2 font-medium text-teal-50 transition-colors duration-200 hover:bg-teal-700" onClick={()=>setShowForm(true)}>
        Add Job <Plus size={16} />
      </button>
    </div>
  );
};
export default DashboardHeader;
