import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Button, Card, Modal } from "flowbite-react";
import useModal from "../../hooks/useModal";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFPage = () => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="p-6">
      <Card>
        <Button className="w-fit" onClick={handleOpenModal}>
          Open PDF
        </Button>
        <div className="border-2 h-[750px]">
          <Viewer
            fileUrl="/files/sample.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Card>

      <Modal dismissible show={isOpen} onClose={handleCloseModal}>
        <Modal.Header />
        <Modal.Body>
          <Viewer fileUrl="/files/sample.pdf" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PDFPage;
