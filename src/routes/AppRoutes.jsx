import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import { ThemeProvider } from "@mui/material";
import { muiTheme } from "@/muiTheme";
import App from "@/App";

const AppRoutes = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route element={<App />}>
              <Route path="/*" element={<PrivateRoutes />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
