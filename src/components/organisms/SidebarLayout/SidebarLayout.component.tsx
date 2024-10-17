import { Sidebar } from "flowbite-react";
import { FaTable } from "react-icons/fa";
import { HiArrowSmRight, HiChartPie, HiShoppingBag } from "react-icons/hi";
import { IoDocument } from "react-icons/io5";

// const MENU = [
//   {
//     title: "Overview",
//     link: "/overview",
//     icon: IoPieChart,
//     children: [
//       {
//         title: "Extras",
//         link: "/overview/extra",
//       },
//     ],
//   },
//   {
//     title: "Form",
//     link: "/form",
//     icon: IoDocumentText,
//   },
//   {
//     title: "Table",
//     link: "/table",
//     icon: FaTableList,
//   },
// ];

const SidebarLayout = () => {
  return (
    <Sidebar
      className="min-h-screen border-r border-gray-200"
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items className="min-h-screen">
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
          <Sidebar.Item href="table" icon={FaTable}>
            Table
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarLayout;
