import { Avatar, CustomFlowbiteTheme, Dropdown, Navbar } from "flowbite-react";
import { FC } from "react";
import { FaBell } from "react-icons/fa";

const Header: FC<{ openDrawer: () => void }> = ({ openDrawer }) => {
  const customTheme: CustomFlowbiteTheme["navbar"] = {
    root: {
      base: "bg-white px-2 py-2.5 sm:px-4 z-10 w-full fixed top-0 border-b border-gray-200 z-10 w-full fixed top-0 border-b border-gray-200",
      inner: {
        base: "mx-0 flex flex-wrap items-center justify-between !min-w-full",
      },
    },
  };

  return (
    <Navbar theme={customTheme}>
      <Navbar.Brand href="#">
        <img src="/globals/logo-placeholder.svg" alt="Main Logo" />
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <button
          type="button"
          data-dropdown-toggle="notification-dropdown"
          className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span className="sr-only">View notifications</span>
          <FaBell color="inherit" size={24} />
        </button>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle onClick={openDrawer} />
      </div>
    </Navbar>
  );
};

export default Header;
