import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Jobs from "./components/Jobs";
import { Outlet } from "react-router";
import { useState } from "react";
import { SideBarContext } from "./utils/sideBarContext";
import { createBrowserRouter } from "react-router";
import "./index.css";

const App = () => {
  const sideBarOpen = localStorage.getItem("sideBarOpen");
  const [isOpen, setIsOpen] = useState(
    sideBarOpen === null ? true : JSON.parse(sideBarOpen),
  );

  return (
    <div className="flex h-full w-full bg-zinc-800">
      <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
        <Sidebar />
        <Outlet />
      </SideBarContext.Provider>
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
