import clsx from "clsx";
import { Sidebar } from "flowbite-react";
import { FaTable } from "react-icons/fa";
import { HiArrowSmRight, HiChartPie, HiShoppingBag } from "react-icons/hi";
import { IoDocument } from "react-icons/io5";
import { viewportWidth } from "../../../constants/viewport";
import useViewport from "../../../hooks/useViewport";

const SidebarLayout = () => {
  const { width } = useViewport();
  return (
    <Sidebar
      className={clsx(
        "border-r border-gray-200 fixed",
        width < viewportWidth.mobileDown && "!relative w-full"
      )}
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items
        className={clsx(
          "pt-[50px]",
          width < viewportWidth.mobileDown && "pt-0"
        )}
      >
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/overview" icon={HiChartPie}>
            Overview
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Dropdown">
            <Sidebar.Item href="#">Dropdown 1</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 2</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 3</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 4</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/form" icon={IoDocument}>
            Form
          </Sidebar.Item>
          <Sidebar.Item href="/table" icon={FaTable}>
            Table
          </Sidebar.Item>
          <Sidebar.Item href="/modal" icon={FaTable}>
            Modal
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarLayout;
