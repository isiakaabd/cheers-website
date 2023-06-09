import ReactDOM from "react-dom/client";
import "react-photo-view/dist/react-photo-view.css";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    <AppRoutes />
    <ToastContainer
      style={{ fontSize: "1.8rem" }}
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);
