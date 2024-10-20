import clsx from "clsx";
import { CustomFlowbiteTheme, Sidebar } from "flowbite-react";
import { FaChartLine, FaTable } from "react-icons/fa";
import { HiArrowSmRight, HiChartPie, HiShoppingBag } from "react-icons/hi";
import { IoDocument } from "react-icons/io5";
import { Link } from "react-router-dom";
import { viewportWidth } from "../../../constants/viewport";
import useViewport from "../../../hooks/useViewport";

const SidebarLayout = () => {
  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    root: {
      base: "h-full border-r border-gray-200 fixed",
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-primary-800 px-3 py-4",
    },
    items: {
      base: "pt-[90px]",
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-primary-700 [&_svg]:text-[inherit]",
    },
    collapse: {
      button:
        "flex w-full items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-primary-700 [&_svg]:text-[inherit]",
    },
    itemGroup: {
      base: "flex flex-col gap-1",
    },
  };

  const { width } = useViewport();
  return (
    <Sidebar
      theme={customTheme}
      className={clsx(
        width < viewportWidth.mobileDown && "!relative w-full border-0"
      )}
    >
      <Sidebar.Items
        className={clsx(width < viewportWidth.mobileDown && "pt-0")}
      >
        <Sidebar.ItemGroup>
          <Link to={"/overview"}>
            <Sidebar.Item icon={HiChartPie}>Overview</Sidebar.Item>
          </Link>
          <Sidebar.Collapse icon={HiShoppingBag} label="Dropdown">
            <Sidebar.Item href="#">Dropdown 1</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 2</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 3</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 4</Sidebar.Item>
          </Sidebar.Collapse>
          <Link to={"/form"}>
            <Sidebar.Item icon={IoDocument}>Form</Sidebar.Item>
          </Link>
          <Link to={"/table"}>
            <Sidebar.Item icon={FaTable}>Table</Sidebar.Item>
          </Link>
          <Link to={"/modal"}>
            <Sidebar.Item icon={FaTable}>Modal</Sidebar.Item>
          </Link>
          <Link to={"/pdf"}>
            <Sidebar.Item icon={IoDocument}>PDF Viewer</Sidebar.Item>
          </Link>
          <Link to={"/charts"}>
            <Sidebar.Item icon={FaChartLine}>Charts</Sidebar.Item>
          </Link>
          <Link to={"/advanced-table"}>
            <Sidebar.Item icon={FaTable}>Table</Sidebar.Item>
          </Link>
          <Link to={"/auth/login"}>
            <Sidebar.Item icon={HiArrowSmRight}>Sign In</Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarLayout;
