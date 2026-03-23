import { Sun, PanelRight } from "lucide-react";
import { useContext } from "react";
import { SideBarContext } from "../utils/sideBarContext";

const Header = ({ title }) => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <div className="border-b-sidebar sticky top-0 left-0 flex h-17 w-full items-center justify-between border-zinc-700 bg-zinc-800 px-8">
      <div className="flex items-center gap-4">
        <div
          className={`icon group ${isOpen ? "hidden" : "block"} cursor-pointer rounded-md p-2 transition-all duration-200 hover:bg-zinc-700/50`}
          onClick={() => {
            setIsOpen(true);
            localStorage.setItem("sideBarOpen", true);
          }}
        >
          <PanelRight
            className="text-zinc-400 group-hover:text-zinc-50"
            size={20}
            strokeWidth={2}
          />
        </div>
        <h2 className="text-[20px] leading-15 font-medium tracking-tight text-zinc-50">
          {title}
        </h2>
      </div>
      <Sun size={20} color="#E4E4E7" />
    </div>
  );
};

export default Header;
