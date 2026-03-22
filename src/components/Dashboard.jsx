import Stats from "./Stats";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import RecentApplications from "./RecentApplications";
import { useContext } from "react";
import { SideBarContext } from "../utils/sideBarContext";

const Dashboard = () => {
  const { isOpen } = useContext(SideBarContext);

  return (
    <div
      className={`w-full bg-zinc-900 ${isOpen ? "ml-62.5" : "ml-0"} transition-all duration-300`}
    >
      <Header title="Dashboard" />
      <div className="container p-6">
        <DashboardHeader />
        <Stats />
        <RecentApplications />
      </div>
    </div>
  );
};

export default Dashboard;
