import Header from "./Header";
import { useContext } from "react";
import { SideBarContext } from "../utils/sideBarContext";

const Jobs = () => {
  const { isOpen } = useContext(SideBarContext);

  return (
    <div className={`w-full h-2000 bg-zinc-900 ${isOpen ? "ml-62.5" : "ml-0"} transition-all duration-300`}>
      <Header title="Jobs" />
    </div>
  );
};

export default Jobs;
