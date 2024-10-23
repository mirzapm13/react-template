import { Worker } from "@react-pdf-viewer/core";
import "react-datepicker/dist/react-datepicker.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import ThemeWrapper from "./utils/ThemeWrapper";

function App() {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <ThemeWrapper>
          <RouterProvider router={router} />
        </ThemeWrapper>
      </Worker>
    </>
  );
}

export default App;
