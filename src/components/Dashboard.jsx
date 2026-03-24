import Stats from "./Stats";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import JobForm from "./JobForm";
import RecentApplications from "./RecentApplications";
import { useContext, useState } from "react";
import { SideBarContext } from "../utils/sideBarContext";
import { FormContext } from "../utils/formContext";

const Dashboard = () => {
  const { isOpen } = useContext(SideBarContext);
  const [formErrors, setFormErros] = useState({});

  const handleAddJob = (jobData) => {
    // console.log("New Job Data:", jobData);
  };

  return (
    <div
      className={`min-h-screen w-full bg-zinc-900 ${isOpen ? "ml-62.5" : "ml-0"} transition-all duration-300`}
    >
        <Header title="Dashboard" />
      <div className="container max-w-7xl mx-auto">
        <div className="container p-6 relative">
          <DashboardHeader />
          <Stats />
          <RecentApplications />
          <JobForm onSubmit={handleAddJob} errors={setFormErros}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
