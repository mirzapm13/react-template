import {
  Button,
  Checkbox,
  Drawer,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import useModal from "../../../hooks/useModal";

const ModalPage = () => {
  const { handleOpenModal, handleCloseModal, isOpen } = useModal();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <div className="ModuleContainer">
      <div className="mb-2">Modal</div>
      <Button className="mb-2" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>
      <Modal dismissible show={isOpen} onClose={handleCloseModal}>
        <Modal.Header />
        <Modal.Body>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput id="password2" type="password" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat password" />
              </div>
              <TextInput id="repeat-password" type="password" required shadow />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <a
                  href="#"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  terms and conditions
                </a>
              </Label>
            </div>
            <Button type="submit">Register new account</Button>
          </form>
        </Modal.Body>
      </Modal>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        position="right"
        className="min-w-[400px]"
      >
        <Drawer.Header />
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <a
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </Drawer>
    </div>
  );
};

export default ModalPage;
