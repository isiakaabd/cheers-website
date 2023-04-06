import { Box, Grid, Toolbar } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Grid item container flexDirection={"column"} sx={{ minHeight: "100vh" }}>
      <Header />
      <Grid item sx={{ my: "auto" }}>
        <Toolbar>
          <Outlet />
        </Toolbar>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default MainPage;
