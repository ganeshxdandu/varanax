import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Jobs from "./components/Jobs";
import { Outlet } from "react-router";
import { useState } from "react";
import { SideBarContext } from "./utils/sideBarContext";
import { FormContext } from "./utils/formContext";
import { createBrowserRouter } from "react-router";
import "./index.css";

const App = () => {
  const sideBarOpen = localStorage.getItem("sideBarOpen");
  const [isOpen, setIsOpen] = useState(
    sideBarOpen === null ? true : JSON.parse(sideBarOpen),
  );
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-full w-full bg-zinc-800">
      <FormContext.Provider value={{ showForm, setShowForm }}>
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
          <Sidebar />
          <Outlet />
        </SideBarContext.Provider>
      </FormContext.Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
    ],
  },
]);

export default router;
