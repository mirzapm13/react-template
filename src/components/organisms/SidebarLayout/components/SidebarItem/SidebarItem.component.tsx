import clsx from "clsx";
import { createElement, useState } from "react";
import { IconType } from "react-icons";
import { IoChevronDown } from "react-icons/io5";
import s from "./SidebarItem.module.css";

type SidebarItemProps = {
  icon: IconType;
  title: string;
  link: string;
  children?: {
    title: string;
    link: string;
  }[];
};

const SidebarItem = ({ icon, title, children }: SidebarItemProps) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <li className={s.Item} onClick={() => setActive((prev) => !prev)}>
        <div className={clsx(s.Icon)}>
          {createElement(icon, { size: 24, color: "inherit" })}
        </div>
        <p className={clsx(s.Title)}>{title}</p>

        {children && (
          <div className={clsx(s.Chevron, active && s.Active)}>
            <IoChevronDown size={20} />
          </div>
        )}
      </li>
      {active &&
        children?.map((item) => {
          return (
            <li className={clsx(s.Item, "!pl-12")}>
              <p className={clsx(s.Title)}>{item.title}</p>
            </li>
          );
        })}
    </>
  );
};

export default SidebarItem;
