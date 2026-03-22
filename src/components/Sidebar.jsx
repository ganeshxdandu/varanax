import LOGO from "../assets/varanax.svg";
import { PanelRight } from "lucide-react";
import NavItem from "./NavItem";
import { navItems } from "../utils/navItems";
import { useContext } from "react";
import { SideBarContext } from "../utils/sideBarContext";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  return (
    <div
      className={`border-r-sidebar fixed h-screen min-w-62.5 border-zinc-700 bg-zinc-800 transition-all duration-200 ${isOpen ? "top-0 left-0" : "top-0 -left-full"}`}
    >
      <div className="header border-b-sidebar flex h-17 w-full items-center justify-between border-zinc-700 px-4">
        <div className="logo h-5">
          <img className="h-full w-auto object-cover" src={LOGO} alt="" />
        </div>
        <div
          className="icon group cursor-pointer rounded-md p-2 transition-all duration-200 hover:bg-zinc-700/50"
          onClick={() => {
            setIsOpen(false);
            localStorage.setItem("sideBarOpen", false);
          }}
        >
          <PanelRight
            className="text-zinc-400 group-hover:text-zinc-50"
            size={20}
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="items flex flex-col gap-4 pt-8 pr-4 pb-6 pl-4">
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
