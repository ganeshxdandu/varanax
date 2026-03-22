import { createContext } from "react";

const sideBarOpen = localStorage.getItem("sideBarOpen") || true;
export const SideBarContext = createContext(sideBarOpen);