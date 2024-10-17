import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header";
import SidebarLayout from "../../organisms/SidebarLayout";
import s from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className="Container">
      <Header />
      <div className={clsx(s.MainContainer)}>
        <SidebarLayout />
        <div className={clsx(s.OutletContainer)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
