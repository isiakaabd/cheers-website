import { Box, Grid, Toolbar } from "@mui/material";
import { Header, Footer } from ".";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Grid
      item
      container
      flexDirection={"column"}
      sx={{ minHeight: "100vh", height: "100%" }}
    >
      <Header />
      <Grid item sx={{ my: "auto", pb: 4 }}>
        <Toolbar>
          <Outlet />
        </Toolbar>
      </Grid>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Footer />
    </Grid>
  );
};

export default MainPage;
