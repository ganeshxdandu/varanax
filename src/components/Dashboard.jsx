import Header from "./Header";
import { useContext } from "react";
import { SideBarContext } from "../utils/sideBarContext";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const { isOpen } = useContext(SideBarContext);

  return (
    <div
      className={`h-2000 w-full bg-zinc-900 ${isOpen ? "ml-62.5" : "ml-0"} transition-all duration-300`}
    >
      <Header title="Dashboard" />
      <div className="container p-6">
        <DashboardHeader />
      </div>
    </div>
  );
};

export default Dashboard;
