import { ArrowUp } from "lucide-react";

const StatCard = () => {
  return (
    <div className="border-stroke rounded-[10px] border-zinc-700 bg-zinc-800 p-4">
      <p className="text-body mb-8 text-zinc-400">{"Total Applied"}</p>
      <div className="value flex items-baseline gap-2 mb-2">
        <h3 className="text-[32px] font-bold tracking-tighter text-zinc-50 leading-0.75">
          {100}
        </h3>
        <div className="icon flex items-center gap-1">
          <ArrowUp className="bg-green-500/15 p-1 text-green-400 rounded-full border-stroke border-green-400/20" size={18} strokeWidth={2} />
          <p className="text-[12px] tracking-tight text-green-400">+10%</p>
        </div>
      </div>
        <p className="text-[12px] text-zinc-500">Compared to last week</p>
    </div>
  );
};
export default StatCard;
