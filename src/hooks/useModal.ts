import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleOpenModal, handleCloseModal, handleToggleModal };
};

export default useModal;
