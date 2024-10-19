import clsx from "clsx";
import { CustomFlowbiteTheme, Drawer } from "flowbite-react";
import { FC, ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import { viewportWidth } from "../../../constants/viewport";
import useViewport from "../../../hooks/useViewport";
import Header from "../../organisms/Header";
import SidebarLayout from "../../organisms/SidebarLayout";
import s from "./DashboardLayout.module.css";

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
  children: ReactNode;
};

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

const DashboardLayout = () => {
  const customTheme: CustomFlowbiteTheme["drawer"] = {
    root: {
      base: "fixed z-40 overflow-y-auto transition-transform bg-primary-800",
    },
  };

  const { width } = useViewport();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <div className="Container">
      <Header openDrawer={() => setDrawerOpen(true)} />
      <ConditionalWrapper
        condition={width < viewportWidth.mobileDown}
        wrapper={(children) => (
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            theme={customTheme}
          >
            {children}
          </Drawer>
        )}
      >
        <SidebarLayout />
      </ConditionalWrapper>

      <div
        className={clsx(s.Wrapper, width < viewportWidth.mobileDown && "!pl-0")}
      >
        <div className={clsx(s.OutletContainer)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
