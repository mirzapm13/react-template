import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import { FC, ReactNode } from "react";

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const customTheme: CustomFlowbiteTheme = {
    navbar: {
      root: {
        base: "bg-white px-2 py-2.5 sm:px-4 z-10 w-full fixed top-0 border-b border-gray-200 z-10 w-full fixed top-0 border-b border-gray-200",
        inner: {
          base: "mx-0 flex flex-wrap items-center justify-between !min-w-full",
        },
      },
    },
    sidebar: {
      root: {
        base: "h-full border-r border-gray-200 fixed",
        inner:
          "h-full overflow-y-auto overflow-x-hidden rounded bg-primary-800 px-3 py-4",
      },
      items: {
        base: "pt-[90px]",
      },
      item: {
        base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-primary-700 [&_svg]:text-[inherit] cursor-pointer",
      },
      collapse: {
        button:
          "flex w-full items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-primary-700 [&_svg]:text-[inherit]",
      },
      itemGroup: {
        base: "flex flex-col gap-1",
      },
    },
    drawer: {
      root: {
        base: "fixed z-40 overflow-y-auto transition-transform bg-primary-800",
      },
    },
  };

  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
};

export default ThemeWrapper;
