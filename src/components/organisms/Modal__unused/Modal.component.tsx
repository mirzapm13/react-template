import clsx from "clsx";
import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const Modal: FC<{
  openState: boolean;
  onClose: () => void;
  children: ReactNode;
}> = ({ openState = true, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  if (!openState) return null;

  return createPortal(
    <div className="fixed min-h-screen nin-w-full top-0 left-0 z-20">
      <div className={clsx(s.Overlay)} onClick={onClose}></div>
      <div className={s.Content}>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
