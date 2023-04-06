import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
