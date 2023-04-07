import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import App from "../App";
import { muiTheme } from "../muiTheme";
import { ThemeProvider } from "@mui/material";

const AppRoutes = () => {
  const loginStatus = false;
  // useSelector((state) => state.auth.token);
  //    useSelector((state) => state.auth.token);
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
