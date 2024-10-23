import clsx from "clsx";
import { Sidebar } from "flowbite-react";
import { FaChartLine, FaCog, FaTable, FaUser } from "react-icons/fa";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineX,
  HiShoppingBag,
} from "react-icons/hi";
import { IoDocument } from "react-icons/io5";
import { Link } from "react-router-dom";
import { viewportWidth } from "../../../constants/viewport";
import useViewport from "../../../hooks/useViewport";

const SidebarLayout = ({ closeModal }: { closeModal: () => void }) => {
  const { width } = useViewport();
  return (
    <Sidebar
      className={clsx(
        width < viewportWidth.mobileDown && "!relative w-full border-0"
      )}
    >
      <Sidebar.Items
        className={clsx(width < viewportWidth.mobileDown && "pt-0")}
      >
        {/* ===========Close Item=========== */}
        <Sidebar.ItemGroup>
          <Sidebar.Item
            onClick={closeModal}
            className={clsx(
              width >= viewportWidth.mobileDown && "hidden",
              "[&_span]:hidden w-fit mb-8 float-right"
            )}
            icon={HiOutlineX}
          ></Sidebar.Item>

          <Link to={"/user"}>
            <Sidebar.Item as="div" icon={FaUser}>
              User
            </Sidebar.Item>
          </Link>

          <Link to={"/role"}>
            <Sidebar.Item as="div" icon={FaCog}>
              Role
            </Sidebar.Item>
          </Link>

          <Link to={"/overview"}>
            <Sidebar.Item as="div" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
          </Link>
          <Sidebar.Collapse icon={HiShoppingBag} label="Dropdown">
            <Sidebar.Item href="#">Dropdown 1</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 2</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 3</Sidebar.Item>
            <Sidebar.Item href="#">Dropdown 4</Sidebar.Item>
          </Sidebar.Collapse>
          <Link to={"/form"}>
            <Sidebar.Item as="div" icon={IoDocument}>
              Form
            </Sidebar.Item>
          </Link>
          <Link to={"/table"}>
            <Sidebar.Item as="div" icon={FaTable}>
              Table
            </Sidebar.Item>
          </Link>
          <Link to={"/modal"}>
            <Sidebar.Item as="div" icon={FaTable}>
              Modal
            </Sidebar.Item>
          </Link>
          <Link to={"/pdf"}>
            <Sidebar.Item as="div" icon={IoDocument}>
              PDF Viewer
            </Sidebar.Item>
          </Link>
          <Link to={"/charts"}>
            <Sidebar.Item as="div" icon={FaChartLine}>
              Charts
            </Sidebar.Item>
          </Link>

          <Link to={"/auth/login"}>
            <Sidebar.Item as="div" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarLayout;
