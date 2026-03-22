import { Link, useLocation } from "react-router-dom";

const NavItem = ({ label, icon: Icon, to }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-body transition-colors duration-200 ${isActive ? "border-stroke border-teal-400/20 bg-teal-500/15 text-teal-400" : "text-zinc-400 hover:bg-teal-500/10 hover:text-teal-400/80"}`}
      to={to}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
};

export default NavItem;
